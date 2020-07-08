import {Application,Request, Response, NextFunction} from "express";
const request = require("request");

module.exports = async function validateCaptcha(req:Request, res:Response) {


        let token = req.body.captcha;
        const secretKey = "6LfePfAUAAAAADHqz7cm2LWa-BPyfpXwWlVHCjph"; //the secret key from your google admin console;
  
        //token validation url is URL: https://www.google.com/recaptcha/api/siteverify 
        // METHOD used is: POST
        
        const url =  `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}&remoteip=${req.connection.remoteAddress}`
        
        //note that remoteip is the users ip address and it is optional
        // in node req.connection.remoteAddress gives the users ip address
        
        if(token === null || token === undefined){
            res.status(201).send({success: false, message: "Token is empty or invalid"})
        }
        
        request(url, function(err, response, body){
            //the body is the data that contains success message
            body = JSON.parse(body);
            
            //check if the validation failed
            if(body.success !== undefined && !body.success){
                res.send({success: false, 'message': "recaptcha failed"});
            }
            
            //if passed response success message to client
            res.send({"success": true, 'message': "recaptcha passed"});
        });
}

