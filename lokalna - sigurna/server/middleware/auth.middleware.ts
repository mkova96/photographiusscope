import {Request, Response, NextFunction} from 'express';
const winston = require('winston')

module.exports =function checkIfAuthenticated(req: Request, res: Response, next: NextFunction) {

    if (req['user']) {
        next();
    }
    else {
        var date = new Date().toString();
        winston.log({level:'warn',message:'Unauthenticated attempt at '+req.url.toString(), date});

        res.sendStatus(403);
    }
}