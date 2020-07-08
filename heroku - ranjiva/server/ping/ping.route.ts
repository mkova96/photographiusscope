var db = require("../database/database.js");
import {Request, Response} from "express";
const { exec } = require('child_process');
const querystring = require('querystring');


module.exports=function Ping(req:Request, res:Response) { //TESTIRA SE POZITIVNO NA OS COMMAND INJECTION

    //https://localhost:4200/api/ping?param1=127.0.0.1
    var ipaddress = (decodeURIComponent(req.url).split("=")[1].toString());

    if (!ipaddress){
        return res.status(400).json({"error": "You must define IPv4 address to ping"});
    }
    
    ipaddress = ipaddress.replace(/\+/g, " ");


    res.json({"response":"There was an error pinging that address"})

   
}