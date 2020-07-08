const db = require("../_database/database.js");
import {Request, Response} from "express";

const getUserById = require('../_database/get-user-by-id');
const winston = require('winston');



module.exports=async function getMessages(req:Request, res:Response) {

    var date = new Date().toString()

    var messages:any=[];
    var params=[parseInt(req["user"].sub),parseInt(req["user"].sub)]

    var rows:any = await new Promise((resolve, reject) => {
        db.all("select * from message where senderId = (?) or receiverId = (?)",params,(err, rows) => {
            if (err) {
                reject(err);
            }
            resolve(rows);
        });
    });
    
    if (!rows) {
        res.status(204).json({"error":"There are no messages"});
    }

    rows.forEach(async element => {

        const sender = await getUserById(element.senderId);
        const receiver = await getUserById(element.receiverId);


        if (!sender || !receiver){
            winston.log({level:'error',message:'Error in get-messages'},date)
            res.status(400).json({"error": 'Error in get-messages'});
        }
        
        messages.push({"id":element.id,"content":element.content,"date":element.date,
            "senderId":element.senderId, "receiverId":element.receiverId, 
            "sender": {"id":sender.id, "email":sender.email, "role":sender.role, "money": sender.money,"firstName":sender.firstName,"lastName":sender.lastName,"profileLink":sender.profileLink }, 
            "receiver" : {"id":receiver.id, "email":receiver.email,"firstName":receiver.firstName,"lastName":receiver.lastName,"profileLink":receiver.profileLink, "role":receiver.role, "money": receiver.money}
        });

        if (messages.length==rows.length){
            res.set('Cache-Control', 'no-store');
            return res.status(200).json(messages);
        }
    });            
  }