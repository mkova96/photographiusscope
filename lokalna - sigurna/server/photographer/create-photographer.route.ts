import {Request, Response} from "express";
const winston = require('winston');
const db = require("../_database/database.js");

module.exports = async function createPhotographer(req:Request, res:Response) {

    if (!req.body.firstName || !req.body.lastName || !req.body.age){
        winston.log({level:'error',message:'ADMIN: Error in create-photographer'},date)
        return res.status(400).json({"error": "Not enough parameters"})
    }
    if (!Number.isInteger(req.body.age) || (req.body.firstName.length >30 || req.body.firstName.length <1) 
    || (req.body.lastName.length >30 || req.body.lastName.length <1) ){ 
        winston.log({level:'error',message:'ADMIN: Error in create-photographer'},date)
        return res.status(400).json({"error": "Wrong input parameters"})
    }

    var date = new Date().toString()
    
    var sql2 ='INSERT INTO photographer (firstName, lastName, age) VALUES (?,?,?)'
    var params2 =[req.body.firstName,req.body.lastName,req.body.age];
    db.run(sql2, params2, function (err, result) {

        if (err){
            winston.log({level:'error',message:'ADMIN: Error in create-photographer'},date)
            res.status(400).json({"error": 'Error in create-photographer'})
        }
        res.set('Cache-Control' ,'no-cache, max-age=0');

        winston.log({level:'info',message:'ADMIN: New photographer'},date);
        res.status(200).json({"id":this.lastID,"firstName":req.body.firstName,"lastName":req.body.lastName,"age":req.body.age});
    });        
}
