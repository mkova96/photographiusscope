import {Request, Response} from "express";
const db = require("../_database/database.js");

const getUserById = require('../_database/get-user-by-id');
const getUserByEmail = require('../_database/get-user-by-email');
const getCurrentTime = require("../_common/time-info");
const winston = require('winston');

module.exports = async function createMessage(req:Request, res:Response) {

    if (!req.body.receiverEmail || !req.body.content){
        winston.log({level:'warn',message:'No input at create-message', logObject});
        return res.status(400).json({"error":"Not enough input parameters"});
    }      
    if (req.body.content.length <1 || req.body.content.length > 300) {
        winston.log({level:'warn',message:'Wrong inputs at create-message', logObject});
        return res.status(400).json({"error":"Content is too long"});
    }

    var receiverEmail=req.body.receiverEmail;
    var content=req.body.content;

    var errors:string[]=[];

    const sender = await getUserById(req["user"].sub);
    var logObject = {
        time:new Date().toString(),
        user:sender.email
    }
    const receiver = await getUserByEmail(receiverEmail)

    if (!receiver) {
        winston.log({level:'warn',message:'Failed attempt at create-message', logObject});
        return res.status(400).json({"error":'Failed attempt at create-message'});
    }

    const time = await getCurrentTime();

    var sql2 ='INSERT INTO message (content,date,senderId,receiverId) VALUES (?,?,?,?)'
    var params2 =[content, time.toString(),req["user"].sub,receiver.id];
    db.run(sql2, params2, function (err, result) {

        if (err){
            winston.log({level:'error',message:'Error in create-message'},logObject)
            res.status(400).json({"error": 'Error in create-message'})
        }
        winston.log({level:'info',message:'New message'},logObject);

        res.set('Cache-Control', 'no-store');

        res.status(200).json({"id":this.lastID,"content":content,"senderId":req["user"].sub,"receiverId":receiver.id,
            "sender":sender,"receiver":receiver});
    });
}
