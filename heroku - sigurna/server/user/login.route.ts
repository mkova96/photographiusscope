import {Request, Response} from "express";
import {UserDb} from "./userDb";

const db = require("../_database/database.js");
const argon2 = require('argon2');
const createSessionToken=require('../_common/security.utils');
const createCsrfToken=require("../_common/csrfToken");
const winston = require('winston');
const getUserByEmail = require('../_database/get-user-by-email');


module.exports = async function login(req: Request, res: Response) {

    const regexp = new RegExp("[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}");

    if (!req.body.email || !req.body.password){
        winston.log({level:'warn',message:'Failed login attempt', logObject})
        return res.status(400).json({"error": "Not enough parameters"})    
    }

    if (!regexp.test(req.body.email) || (req.body.password.length <8 || req.body.password.length >30)) {
        winston.log({level:'warn',message:'Failed login attempt', logObject})
        return res.status(400).json({"error": "Wrong parameters"}) 
    }
    
    var logObject = {
        time:new Date().toString(),
        user:req.body.email
    }
    

    const user = await getUserByEmail(req.body.email); //RADI
    console.log("MOJ LOGIRANI:",user);

    if (!user){
        winston.log({level:'warn',message:'Failed login attempt', logObject})
        return res.status(400).json({"error": "Email address or password are not correct"})
    }else{
        loginAndBuildResponse(req.body.password,user,res,logObject);
    }
}

async function loginAndBuildResponse(password:any,user:UserDb,  res: Response,logObject) {

    try {
        const isPasswordValid = await argon2.verify(user.passwordDigest,password);

        if (!isPasswordValid) {
            winston.log({level:'warn',message:'Failed login attempt', logObject})
            return res.status(400).json({"error": "Email address or password are not correct"})
        }

        const sessionToken = await createSessionToken(user);
        const csrfToken = await createCsrfToken(sessionToken);

        res.cookie("SESSIONID", sessionToken,{secure:true,httpOnly:true,sameSite:"strict",maxAge:1800000}); //pola sata
        res.cookie("XSRF-TOKEN", csrfToken, {secure:true,sameSite:"strict"});

        res.set('Cache-Control', 'no-store');

        winston.log({level:'info',message:'New login', logObject});

        res.status(200).json({id:user.id, email:user.email,role:user.role,"firstName":user.firstName,"lastName":user.lastName, 
            "profileLink":user.profileLink,"money":user.money});
    }
    catch(err) {
        winston.log({level:'error',message:'Error in user login', logObject})
        res.status(400).json({"error":"Login failed"});
    }
}