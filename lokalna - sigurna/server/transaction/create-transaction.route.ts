import {Request, Response} from "express";
const db = require("../_database/database.js");
const winston = require('winston')
const argon2=require("argon2");

const getCurrentTime = require("../_common/time-info");
const getUserById = require('../_database/get-user-by-id');
const getUserByEmail = require('../_database/get-user-by-email');
const updateUser = require('../_database/update-user');

module.exports = async function createTransaction(req:Request,res:Response,formData:FormData) {
    const regexp = new RegExp("[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}");

    if (!req.body.amount || !req.body.receiverEmail || !req.body.password) {
        winston.log({level:'error',message:'Error in create-trans'});
        return res.status(400).json({"error": "Not enough parameters"})
    }
    if (!Number.isInteger(req.body.amount) || (req.body.amount <1 || req.body.amount >10000) || !regexp.test(req.body.receiverEmail) 
    || (req.body.password.length <8 || req.body.password.length >30)) {
        winston.log({level:'error',message:'Error in create-trans'});
        return res.status(400).json({"error": "Wrong parameters"}) 
    } 

    const amount=req.body.amount;
    const receiverEmail=req.body.receiverEmail;
    const password=req.body.password;
   
    var errors:string[]=[];

    const sender = await getUserById(req["user"].sub);
    const receiver = await getUserByEmail(receiverEmail);

    var logObject = {
        time:new Date().toString(),
        user:sender.email
    }

    const isPasswordValid = await argon2.verify(sender.passwordDigest,password);

    if (!receiver || sender.money < parseInt(amount) || !isPasswordValid) {

        winston.log({level:'warn',message:'Failed transaction attempt', logObject})
        return res.status(400).json({"error":'Error in create transaction'});    
    }

    var newMoney:number=sender.money-amount;
    const newSender = updateUser(req["user"].sub,newMoney);

    const time = await getCurrentTime();

    var sql2 ='INSERT INTO trans (amount, senderId, receiverId,date) VALUES (?,?,?,?)'
    var params2 =[amount, req["user"].sub,receiver.id,time];
    
    db.run(sql2, params2, function (err, result) {

        if (err){

            winston.log({level:'error',message:'Error in create-transaction', logObject})
            return res.status(400).json({"error": 'Error in create-transaction'})
        }
        res.set('Cache-Control', 'no-store');

        winston.log({level:'info',message:'New transaction', logObject});
        res.status(200).json({"id":this.lastID,"amount":amount,"senderId":req["user"].sub,"date":time});
    });        
}
