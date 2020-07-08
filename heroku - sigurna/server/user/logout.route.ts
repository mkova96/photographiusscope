import {Request, Response} from "express";
const winston = require('winston');
const getUserById = require('../_database/get-user-by-id');

module.exports = async function logout(req:Request,res:Response){
    const user = await getUserById(parseInt(req["user"].sub));

    var logObject = {
        time:new Date().toString(),
        user:user.email
    }
    winston.log({level:'info',message:'Logout', logObject});
    res.clearCookie("SESSIONID");
    res.clearCookie("XSRF-TOKEN");

    return res.status(200).json({message: 'Logout Successful'});
}
