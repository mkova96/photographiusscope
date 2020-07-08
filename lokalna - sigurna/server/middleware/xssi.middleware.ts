import {Request, Response, NextFunction} from 'express';

module.exports = function xssiProtection(req:Request, res:Response, next:NextFunction) {
    return (req, res, next) => {
        var xssiProtection = ")]}\',\n";
        res.status(200).send(xssiProtection + JSON.stringify(res.locals.data));
    }
    next();      
};
