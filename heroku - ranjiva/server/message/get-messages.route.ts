const db = require("../database/database.js");
import {Request, Response} from "express";
import { UserDb } from 'server/user/userDb';

module.exports=async function getMessages(req:Request, res:Response) {

            var messages:any=[];
            var params=[parseInt(req["user"].sub),parseInt(req["user"].sub)];


            var rows:any = await new Promise((resolve, reject) => {
                db.all("select * from message where senderId = (?) or receiverId = (?)",params,(err, rows) => {
                    if (err) {
                        res.status(400).json({"error": "There's a problem with our SQLite database "+err.stack})
                        reject(err);
                        return;
                    }
                    resolve(rows);
                });
            });
            
            if (!rows) {
                res.status(204).json({"error":"There are no messages in our SQLite database"});
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
                    res.status(400).json({"error": "That sender or receiver does not exist in out SQLite database"});
                }
                
                messages.push({"id":element.id,"content":element.content,"date":element.date,
                    "senderId":element.senderId, "receiverId":element.receiverId, 
                    "sender": {"id":sender.id, "email":sender.email, "money": sender.money,"firstName":sender.firstName,"lastName":sender.lastName,"profileLink":sender.profileLink }, 
                    "receiver" : {"id":receiver.id, "email":receiver.email,"firstName":receiver.firstName,"lastName":receiver.lastName,"profileLink":receiver.profileLink, "money": receiver.money}
                });

                if (messages.length==rows.length){
                    res.set('Cache-Control', 'public');
                    return res.status(200).json(messages);
                }
            });            
  }