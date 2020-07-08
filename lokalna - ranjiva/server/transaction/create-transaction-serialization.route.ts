import {Request, Response} from "express";
import { UserDb } from '../user/userDb';
const db = require("../_database/database.js");
var serialize = require("node-serialize")

module.exports = async function createTransactionSerialization(req:Request,res:Response,formData:FormData) { //NESIGURNA -> POST

    if (!req.body.data){
        return res.status(400).json({"error": "You must send file"});
    }

    var obj = serialize.unserialize(req.body.data);

    const receiverEmail=obj.receiver;
    const amount=obj.amount;

    if (!receiverEmail || !amount){
        return res.status(400).json({"error": "You must define receiver and amount"});
    }

    var errors:string[]=[];

    var sender:UserDb= await new Promise((resolve, reject) => {
        db.get("SELECT * FROM user where id = (?)",req["user"].sub,(err, row) => {
            if (err) {
                res.status(400).json({"error": "There's a problem with our SQLite database "+err.stack})
                reject(err);
                return;
            }
            resolve(row);
        });
    });

    if (sender.money < parseInt(amount)) {
        errors.push("Sender doesn't have that much money");
    }

    var receiver:UserDb= await new Promise((resolve, reject) => {
        db.get("SELECT * FROM user where email = (?)",receiverEmail,(err, row) => {
            if (err) {
                res.status(400).json({"error": "There's a problem with our SQLite database "+err.stack})
                reject(err);
                return;
            }
            resolve(row);
        });
    });

    if (!receiver) {
        errors.push("Receiver doesn't exist");
    }

    
    if (amount<1 || amount>100000 || !amount){
        errors.push("Please provide a proper amount");
    }

    if (errors.length){
        return res.status(400).json({"error":errors.join(",")});
    }

    var newMoney:number=sender.money-amount;
    var sql= `UPDATE user set money = COALESCE (?,money) WHERE id = ?`;
    var newSender=await new Promise((resolve, reject) => {
        db.run(sql,[newMoney,req["user"].sub],(err, row) => {
            if (err) {
                res.status(400).json({"error": "There's a problem with our SQLite database "+err.stack})
                reject(err);
                return;
            }
            resolve(row);
        });
    });

    let date_ob = new Date();
    let date = ("0" + date_ob.getDate()).slice(-2);
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    let year = date_ob.getFullYear();
    let hours = date_ob.getHours();
    let minutes = date_ob.getMinutes();
    let seconds = date_ob.getSeconds();
    const time = year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds;


    var sql2 ='INSERT INTO trans (amount, senderId, receiverId,date) VALUES (?,?,?,?)'
    var params2 =[amount, req["user"].sub,receiver.id,time.toString()];
    db.run(sql2, params2, function (err, result) {

        if (err) {
            res.status(400).json({"error": "There's a problem with our SQLite database "+err.stack})
            return;
        }

        res.status(200).json({"id":this.lastID,"amount":amount,"senderId":req["user"].sub,"date":time.toString()});

    });        

}    
