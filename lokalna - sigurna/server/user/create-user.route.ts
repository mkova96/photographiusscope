import {Request, Response} from "express";
import { UserDb } from './userDb';

const createSessionToken=require('../_common/security.utils');
const createCsrfToken=require("../_common/csrfToken");
const db = require("../_database/database.js");

const argon2=require("argon2");

const winston = require('winston');
const getUserByEmail = require('../_database/get-user-by-email');

module.exports = async function createUser(req:Request, res:Response) {

    if (!req.body.email || !req.body.password || !req.body.firstName || !req.body.lastName){
        winston.log({level:'warn',message:'Failed signup attempt', logObject})
        return res.status(400).json({"error":"Not enough parameters"});
    }

    var errors:string[]=[];
    const pass:string[] = ["1v7Upjw3nT","YAgjecc826","a838hfiD","PolniyPizdec0211","Password1","Sojdlg123aljg",
    "j38ifUbn","3rJs1la7qE","iw14Fi9j"]

    const email=req.body.email;
    const password=req.body.password;
    const regexp = new RegExp("[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}");

    var logObject = {
        time:new Date().toString(),
        user:email
    }
    if (!regexp.test(email) || (password.length<8 || password.length>30) || pass.includes(password) || (req.body.firstName.length<1 || req.body.firstName.length>30) 
    || (req.body.lastName.length<1 || req.body.lastName.length>30) || !/\d/.test(password)|| !/[A-Z]/.test(password) || !/[a-z]/.test(password)) {
        winston.log({level:'warn',message:'Failed signup attempt', logObject})
        return res.status(400).json({"error":"Wrong parameters"});
    }

    const user = await getUserByEmail(email);

    if (user){
        winston.log({level:'warn',message:'Failed signup attempt', logObject})
        return res.status(400).json({"error":"That email address is taken"});    
    }


    const passwordDigest = await argon2.hash(req.body.password);

    var data = {
        email: req.body.email,
        passwordDigest : passwordDigest,
        role:"USER",
        money:10000,
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        profileLink:req.body.profileLink
    }

    var sql ='INSERT INTO user (email, passwordDigest,firstName,lastName,profileLink,role,money) VALUES (?,?,?,?,?,?,?)'
    var params =[data.email, data.passwordDigest,data.firstName,data.lastName,data.profileLink,data.role,data.money];

    db.run(sql, params, async function (err, result) {

        if (err){
            winston.log({level:'warn',message:'Failed signup attempt', logObject})
            return res.status(400).json({"error":"Error in signup"});
        }

        try {           
            const user:UserDb={id:this.lastID,email:data.email,passwordDigest:data.passwordDigest,firstName:data.firstName,
                lastName:data.lastName, profileLink:data.profileLink,role:"USER",money:data.money};

            const sessionToken = await createSessionToken(user);
            const csrfToken = await createCsrfToken(sessionToken);

            res.cookie("SESSIONID", sessionToken,{secure:true,httpOnly:true,sameSite:"strict",maxAge:1800000}); //pola sata
            res.cookie("XSRF-TOKEN", csrfToken, {secure:true,sameSite:"strict"});

            res.set('Cache-Control', 'no-store');

            winston.log({level:'info',message:'New user', logObject});

            res.status(200).json({"id":this.lastID,"email":data.email,"firstName":data.firstName,"lastName":data.lastName, 
            "profileLink":data.profileLink,"role":"USER","money":10000});
        } 
        catch(error) {
            winston.log({level:'error',message:'Error in user signup', logObject})
            res.sendStatus(500);
        }

    });        
    
}

