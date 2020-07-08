import {Request, Response, NextFunction} from 'express';

//const decodeJwt = require ("./security.utils");

const jwt = require("jsonwebtoken");
const fs=require("fs");
const RSA_PUBLIC_KEY = fs.readFileSync('./public.key');


async function decodeJwt(token:string) {

    try {
        const payload = await jwt.verify(token, RSA_PUBLIC_KEY);    
        return payload;
    }
    catch(err){
        return;
    }
}

async function handleSessionCookie(jwt:string, req: Request) {
    
    try {
        const payload = await decodeJwt(jwt);
        req["user"] = payload;
    }
    catch(err) {
    }
}

module.exports=function retrieveUserIdFromRequest(req: Request, res: Response, next: NextFunction) {

    var jwt;

    if (decodeURIComponent(req.url).split("SESSIONID/")[1]) {

        jwt = (decodeURIComponent(req.url).split("SESSIONID/")[1].toString());
    }else{

        jwt = req.cookies["SESSIONID"];
    }

    if (jwt) {

        handleSessionCookie(jwt, req)
            .then(() => next())
            .catch(err => {
                next();
        })
    }
    else {
        next();
    }
}