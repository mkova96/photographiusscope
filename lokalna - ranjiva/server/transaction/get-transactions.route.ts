const db = require("../_database/database.js");import {Request, Response} from "express";
import { UserDb } from '../user/userDb';

module.exports=async function getTransactions(req:Request, res:Response) {

        //api/transactions/email@mr.br
        const email = req.url.split("transactions/")[1].toString();

        if (!email){
            return res.status(400).json({"error": "You must define email to see transactions"});
        }
        
        if (email== "admin@mail.hr"){ //ADMIN CASE

            var trans:any=[];

            var rows:any = await new Promise((resolve, reject) => {
                db.all("select * from trans",params,(err, rows) => {
                    if (err) {
                        reject(err);
                    }
                    resolve(rows);
                });
            });
            if (!rows) {
                res.status(204).json({"error":"There are no transactions in our SQLite database"});
            }

            rows.forEach(async element => {

                var sender:UserDb= await new Promise((resolve, reject) => {
                    db.get("SELECT * FROM user where id = (?)",element.senderId,(err, row) => {
                        if (err) {
                            res.status(400).json({"error": "There's a problem with our SQLite database "+err.stack})
                            reject(err);
                            return;
                        }
                        resolve(row);
                    });
                });

                var receiver:UserDb = await new Promise((resolve, reject) => {
                    db.get("SELECT * FROM user where id = (?)",element.receiverId,(err, row) => {
                        if (err) {
                            res.status(400).json({"error": "There's a problem with our SQLite database "+err.stack})
                            reject(err);
                            return;
                        }
                        resolve(row);
                    });
                });

                if (!sender || !receiver){
                    res.status(400).json({"error": "There is a mistake in retrieving sender or receiver in our SQL database"});
                }

                
                trans.push({"id":element.id,"amount":element.amount,"date":element.date,
                    "senderId":element.senderId, "receiverId":element.receiverId, 
                    "sender": {"id":sender.id, "email":sender.email, "money": sender.money }, 
                    "receiver" : {"id":receiver.id, "email":receiver.email, "money": receiver.money}
                });

                if (trans.length==rows.length){
                    res.set('Cache-Control', 'public');
                    return res.status(200).json(trans);
                }
            });   


        }else{ //USER CASE
            var trans:any=[];

            var user:any = await new Promise((resolve, reject) => {
                db.get("select * from user where email = (?)",email,(err, rows) => {
                    if (err) {
                        res.status(400).json({"error": "There's a problem with our SQLite database "+err.stack})
                        reject(err);
                        return;
                    }
                    resolve(rows);
                });
            });

            if (!user){
                return res.status(400).json({"error": "There's no user with that email address in our SQLite database"});
            }

            var params=[user.id,user.id]

            var rows:any = await new Promise((resolve, reject) => {
                db.all("select * from trans where senderId = (?) or receiverId = (?)",params,(err, rows) => {
                    if (err) {
                        res.status(400).json({"error": "There's a problem with our SQLite database "+err.stack})
                        reject(err);
                        return;
                    }
                    resolve(rows);
                });
            });
            
            if (!rows) {
                return res.status(400).json({"error": "There are no transactions our SQLite database "});
            }

            rows.forEach(async element => {

                var sender:UserDb= await new Promise((resolve, reject) => {
                    db.get("SELECT * FROM user where id = (?)",element.senderId,(err, row) => {
                        if (err) {
                            res.status(400).json({"error": "There's a problem with our SQLite database "+err.stack})
                            reject(err);
                            return;
                        }
                        resolve(row);
                    });
                });

                var receiver:UserDb = await new Promise((resolve, reject) => {
                    db.get("SELECT * FROM user where id = (?)",element.receiverId,(err, row) => {
                        if (err) {
                            res.status(400).json({"error": "There's a problem with our SQLite database "+err.stack})
                            reject(err);
                            return;
                        }
                        resolve(row);
                    });
                });

                if (!sender || !receiver){
                    return res.status(400).json({"error": "That sender or receiver does not exist our SQLite database "})
                }

                
                trans.push({"id":element.id,"amount":element.amount,"date":element.date,
                    "senderId":element.senderId, "receiverId":element.receiverId, 
                    "sender": {"id":sender.id, "email":sender.email, "money": sender.money }, 
                    "receiver" : {"id":receiver.id, "email":receiver.email,  "money": receiver.money}
                });

                if (trans.length==rows.length){
                    res.set('Cache-Control', 'public');
                    return res.status(200).json(trans);
                }
            });            
    } 

}



