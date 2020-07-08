import {Application,Request, Response, NextFunction} from "express";
const request = require("request");

module.exports = async function validateCaptcha(req:Request, res:Response) {

    console.log("pozvo capcu")

        let token = req.body.captcha;
        const secretKey = "6LcbzaYZAAAAAL6B4gpGYcR-s6ImOaE3nB1QO-Cx"; //the secret key from your google admin console;
  
        //token validation url is URL: https://www.google.com/recaptcha/api/siteverify 
        // METHOD used is: POST
        
        const url =  `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}&remoteip=${req.connection.remoteAddress}`
        
        //note that remoteip is the users ip address and it is optional
        // in node req.connection.remoteAddress gives the users ip address
        
        if(token === null || token === undefined){
            res.status(201).send({success: false, message: "Token is empty or invalid"})
            return console.log("token empty");
        }
        
        request(url, function(err, response, body){
            //the body is the data that contains success message
            body = JSON.parse(body);
            
            //check if the validation failed
            if(body.success !== undefined && !body.success){
                res.send({success: false, 'message': "recaptcha failed"});
                return console.log("failed")
            }
            
            //if passed response success message to client
            res.send({"success": true, 'message': "recaptcha passed"});
        });
}

