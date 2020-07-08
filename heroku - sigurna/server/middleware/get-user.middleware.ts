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
        console.log("e greska je:", err);
        return;
    }
}

async function handleSessionCookie(jwt:string, req: Request) {
    
    try {
        const payload = await decodeJwt(jwt);
        req["user"] = payload;
        console.log("ID trenutnog usera:", req["user"].sub)
    }
    catch(err) {
        console.log("Error: Could not extract user from request:", err.message);
    }
}

module.exports=function retrieveUserIdFromRequest(req: Request, res: Response, next: NextFunction) {

    var jwt;
    console.log("URL:",req.url)
    console.log("parami",req.params);

    if (decodeURIComponent(req.url).split("SESSIONID/")[1]) {
        jwt = (decodeURIComponent(req.url).split("SESSIONID/")[1].toString());
        console.log("ovaj url ima sessionID",decodeURIComponent(req.url));
    }else{
        console.log("ovi uso")
        jwt = req.cookies["SESSIONID"];
    }

    if (jwt) {

        handleSessionCookie(jwt, req)
            .then(() => next())
            .catch(err => {
                console.error("greskica",err);
                next();
        })
    }
    else {
        console.log("trenutno nema ulogiranog korisnika");
        next();
    }
}