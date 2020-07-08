import {Request, Response} from "express";
import { UserDb } from 'server/user/userDb';
const db = require("../database/database.js");
const getCurrentTime = require("../_common/time-info");

const querystring = require('querystring');


module.exports = async function createTransaction(req:Request,res:Response) { //NESIGURNA -> GET

        ///api/sendmoney/receiver=sa@gmail.com&amount=50
        const params = querystring.parse(req.url.split("/")[3].toString());

        if (!params || !params.receiver || !params.amount){
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


        var receiver:UserDb= await new Promise((resolve, reject) => {
            db.get("SELECT * FROM user where email = (?)",params.receiver,(err, row) => {
                if (err) {
                    res.status(400).json({"error": "There's a problem with our SQLite database "+err.stack})
                    reject(err);
                    return;
                }
                resolve(row);
            });
        });



        if (sender.money < parseInt(params.amount)) {
            errors.push("Sender doesn't have that much money");
        }

        if (!receiver) {
            errors.push("Receiver doesn't exist");
        }

        if ((parseInt(params.amount)<1) || (parseInt(params.amount)>100000) || !params.amount){
            errors.push("Please provide a proper amount");
        }

        if (errors.length){
            return res.status(400).json({"error":errors.join(",")});
        }

        var newMoney:number=sender.money-parseInt(params.amount);
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


        const time = await getCurrentTime();

        var sql2 ='INSERT INTO trans (amount, senderId, receiverId,date) VALUES (?,?,?,?)'
        var params2 =[parseInt(params.amount), req["user"].sub,receiver.id,time.toString()];
        db.run(sql2, params2, function (err, result) {

            if (err){
                return res.status(400).json({"error": "There's a problem with our SQLite database "+err.stack});
            }
            res.set('Cache-Control', 'public');
            res.status(200).json({"id":this.lastID,"amount":parseInt(params.amount),"senderId":req["user"].sub,"receiverId":receiver.id,"date":time.toString()});
        });    
    }    

