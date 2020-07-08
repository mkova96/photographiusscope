import {Request, Response} from "express";
import { UserDb } from 'server/user/userDb';
const db = require("../database/database.js");

const querystring = require('querystring');


module.exports = async function createMessage(req:Request, res:Response) {


        var receiverEmail=req.body.receiverEmail;
        var content=req.body.content;

        if (!receiverEmail || !content){
            return res.status(400).json({"error": "You didn't define receiver or content"});
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
            errors.push("Receiver doesn't exist in our SQLite database");
        }



        if (errors.length){
            return res.status(400).json({"error":errors.join(",")});
        }
        let date_ob = new Date();
        let date = ("0" + date_ob.getDate()).slice(-2);
        let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
        let year = date_ob.getFullYear();
        let hours = date_ob.getHours();
        let minutes = date_ob.getMinutes();
        let seconds = date_ob.getSeconds();
        const time = year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds;

        var sql2 ='INSERT INTO message (content,date,senderId,receiverId) VALUES (?,?,?,?)'
        var params2 =[content, time.toString(),req["user"].sub,receiver.id];
        db.run(sql2, params2, function (err, result) {

            if (err){
                return res.status(400).json({"error": "There's a problem with our SQLite database "+err.stack})
            }
            res.set('Cache-Control', 'public');
            res.status(200).json({"id":this.lastID,"content":content,"senderId":req["user"].sub,"receiverId":receiver.id,
                "sender":sender,"receiver":receiver});
        });         
}
