import {Request, Response} from "express";
import { UserDb } from './userDb';
import { strict } from 'assert';

const createSessionToken=require('../_common/security.utils');
const db = require("../_database/database.js");
module.exports = async function createUser(req:Request, res:Response) {

    if (!req.body.email || !req.body.password || !req.body.firstName || !req.body.lastName){
        return res.status(400).json({"error": "You must define email adderss, password, first name and last name"});
    }

    var data = {
        email: req.body.email,
        password: req.body.password,
        money:10000,
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        profileLink:req.body.profileLink
    }

    var sql ='INSERT INTO user (email, password,firstName,lastName,profileLink,money) VALUES (?,?,?,?,?,?)'
    var params =[data.email, data.password,data.firstName,data.lastName,data.profileLink,data.money];

    db.run(sql, params, async function (err, result) {

        if (err){
            return res.status(400).json({"error": "There's a problem with our SQLite database "+err.stack})
        }

        try {           
            const user:UserDb={id:this.lastID,email:data.email,password:data.password,
                firstName:data.firstName,lastName:data.lastName, profileLink:data.profileLink,money:data.money};

            const sessionToken = await createSessionToken(user);
            res.cookie("SESSIONID", sessionToken,{secure:false,httpOnly:false});
            res.set('Cache-Control', 'public');
            
            res.status(200).json({"id":this.lastID,"email":data.email,"firstName":data.firstName,"lastName":data.lastName, 
                "profileLink":data.profileLink,"money":10000});
        } 
        catch(error) {
            return res.status(400).json({"error": "There was an error in signup "+err.stack})
        }

    });        
    
}