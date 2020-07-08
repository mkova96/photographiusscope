import {Request, Response, NextFunction} from 'express';
const winston = require('winston')

module.exports = function checkCsrfToken(req: Request,  res: Response,  next: NextFunction) {

    const csrfCookie = req.cookies["XSRF-TOKEN"];
    const csrfHeader = req.headers['x-xsrf-token'];

    if (csrfCookie && csrfHeader && csrfCookie === csrfHeader) {
        next();
    }
    else {
        var date = new Date().toString();
        winston.log({level:'warn',message:'Cross site request attempt at '+req.url.toString(), date});
        res.sendStatus(403);
    }
}