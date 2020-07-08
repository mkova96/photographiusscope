var db = require("../_database/database.js");
import {Request, Response} from "express";
const getUserById = require('../_database/get-user-by-id');
const winston = require('winston');

module.exports=async function getTransactions(req:Request, res:Response) {

    if (req["user"].role == "ADMIN"){ //ADMIN CASE

        var trans:any=[];

        var rows:any = await new Promise((resolve, reject) => {
            db.all("select * from trans",(err, rows) => {
                if (err) {
                    reject(err);
                }
                resolve(rows);
            });
        });
        
        if (!rows) {
            res.status(204).json({"error":"There are no transactions"});
        }

        rows.forEach(async element => {

            const sender = await getUserById(element.senderId);
            const receiver = await getUserById(element.receiverId);

            var logObject = {
                time:new Date().toString(),
                user:sender.email
            }

            if (!sender || !receiver){
                winston.log({level:'error',message:'Error in get-transaction', logObject})
                res.status(400).json({"error": "There is a mistake in retrieving sender or receiver!"});
            }

            trans.push({"id":element.id,"amount":element.amount,"date":element.date,
                "senderId":element.senderId, "receiverId":element.receiverId, 
                "sender": {"id":sender.id, "email":sender.email, "role":sender.role, "money": sender.money }, 
                "receiver" : {"id":receiver.id, "email":receiver.email, "role":receiver.role, "money": receiver.money}
            });

            if (trans.length==rows.length){
                res.set('Cache-Control', 'no-store');

                return res.status(200).json(trans);
            }
        });   

    }else if (req["user"].role == "USER") { //USER CASE

        var trans:any=[];
        var params=[parseInt(req["user"].sub),parseInt(req["user"].sub)]

        var rows:any = await new Promise((resolve, reject) => {
            db.all("select * from trans where senderId = (?) or receiverId = (?)",params,(err, rows) => {
                if (err) {
                    reject(err);
                }
                resolve(rows);
            });
        });
        
        if (!rows) {
            res.status(204).json({"error":"There are no transactions"});
        }

        rows.forEach(async element => {

            const sender = await getUserById(element.senderId);
            const receiver = await getUserById(element.receiverId);

            var logObject = {
                time:new Date().toString(),
                user:sender.email
            }

            if (!sender || !receiver){
                winston.log({level:'error',message:'Error in get-transaction', logObject})
                res.status(400).json({"error": "There is a mistake in retrieving sender or receiver!"});
            }

            trans.push({"id":element.id,"amount":element.amount,"date":element.date,
                "senderId":element.senderId, "receiverId":element.receiverId, 
                "sender": {"id":sender.id, "email":sender.email, "role":sender.role, "money": sender.money }, 
                "receiver" : {"id":receiver.id, "email":receiver.email, "role":receiver.role, "money": receiver.money}
            });

            if (trans.length==rows.length){
                res.set('Cache-Control', 'no-store');

                return res.status(200).json(trans);
            }
        });            
    } 

}



