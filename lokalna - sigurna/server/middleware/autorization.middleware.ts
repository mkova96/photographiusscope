import { NextFunction, Request, Response } from 'express';
const _ = require ("lodash");
const winston = require('winston');

module.exports = function checkIfAuthorized(allowedRole: string,req: Request,res: Response,next: NextFunction) {

    const userInfo = req['user'];

    if (userInfo.role == allowedRole) {
        next();
    }
    else {
        var date = new Date().toString()
        winston.log({level:'warn',message:'Unautorized attempt at '+req.url.toString(), date});

        res.sendStatus(403);
    }

}