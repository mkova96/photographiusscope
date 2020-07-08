const db = require("../_database/database.js");
import {Request, Response} from "express";
const { exec } = require('child_process');
const winston = require('winston');
const getUserById = require('../_database/get-user-by-id');


module.exports=async function Ping(req:Request, res:Response) {

    const user = await getUserById(req["user"].sub);

    var logObject = {
        time:new Date().toString(),
        user:user.email
    }
    const ipaddress = req.body.input;

    const regex= new RegExp("^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$");

    if (!ipaddress || !regex.test(ipaddress) || ipaddress.length < 7 || ipaddress.length>15){
        winston.log({level:'warn',message:'Failed ping attempt', logObject})
        res.json({"response":"Not a valid ip address"})
    }

    if (req.get('User-Agent').includes("Windows")){
        exec(`ping ${ipaddress}`, (err, stdout, stderr) => {
            if (err) {

                winston.log({level:'error',message:'Error in ping', logObject})
                console.error(`exec error: ${err}`);
                res.json({"response":"There was an error pinging that address"})
            }
    
            res.json({"response":stdout.split('\r\n\r\nPing')[1]});
        });
    }else {
        exec(`sudo ping ${ipaddress}`, (err, stdout, stderr) => {
            if (err) {
                winston.log({level:'error',message:'Error in ping', logObject})

                console.error(`exec error: ${err}`);
                res.json({"response":"There was an error pinging that address"})
            }
    
            res.json({"response":stdout.split('\r\n\r\n')[1]});
        });
    }
   
}