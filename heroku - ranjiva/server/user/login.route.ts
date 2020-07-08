import {Request, Response} from "express";
import {UserDb} from "./userDb";

const db = require("../database/database.js");
const createSessionToken=require('../_common/security.utils');

module.exports = function login(req: Request, res: Response) {

    if (!req.body.email || !req.body.password){
        return res.status(400).json({"error": "You must define email address and password to log in"})
    }

    var user:UserDb;
    var sql = "select * from user where email=(?)"
    var params = [req.body.email];
    db.all(sql, params, (err, rows) => {
        if (err){
            return res.status(400).json({"error": "There's a problem with our SQLite database "+err.stack})
        }

        try {
            user=rows[0];
            loginAndBuildResponse(req.body.password,user,res);
        }catch(err){
            return res.status(400).json({"error":"User with that email address does not exist in our SQLite database: "+err.stack});            
        }
    });
}

async function loginAndBuildResponse(password:any,user:UserDb,  res: Response) {

    try {
        if (password != user.password) {
            return res.status(400).json({"error":"Password for this user is not correct: "});        
        }

        const sessionToken =await createSessionToken(user);
        res.cookie("SESSIONID", sessionToken,{secure:false,httpOnly:false});
        res.set('Cache-Control', 'public');
        res.status(200).json({id:user.id, email:user.email,"firstName":user.firstName,"lastName":user.lastName, 
        "profileLink":user.profileLink,"money":user.money});
    }
    catch(err) {
        return res.status(400).json({"error":"There was a trouble with your login: "+err.stack});            
    }
}