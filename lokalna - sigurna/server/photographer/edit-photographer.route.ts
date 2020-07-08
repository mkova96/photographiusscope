import {Request, Response} from "express";
const db = require("../_database/database.js");
const winston = require('winston');

module.exports = async function editPhotographer(req:Request, res:Response) {
        
    if (!req.body.firstName || !req.body.lastName || !req.body.age || !req.body.id){
        winston.log({level:'error',message:'ADMIN: Error in edit-photographer'},date)
        return res.status(400).json({"error": "Not enough parameters"})
    }

    if (!Number.isInteger(req.body.age) || (req.body.firstName.length >30 || req.body.firstName.length <1) 
    || (req.body.lastName.length >30 || req.body.lastName.length <1) || (req.body.age <18 ||req.body.age > 100 )){ 
        winston.log({level:'error',message:'ADMIN: Error in edit-photographer'},date)
        return res.status(400).json({"error": "Wrong input parameters"})
    }
    
    var date = new Date().toString()
        
    var sql2 ='UPDATE photographer set firstName = COALESCE(?,firstname), lastName = COALESCE(?,lastname), age = COALESCE(?,age) WHERE id = ?'
    var params2 =[req.body.firstName,req.body.lastName,req.body.age,req.body.id];
    db.run(sql2, params2, function (err, result) {

        if (err){
            winston.log({level:'error',message:'ADMIN: Error in edit-photographer'},date)
            res.status(400).json({"error": 'Error in edit-photographer'})
        }
        winston.log({level:'info',message:'ADMIN: Edited photographer'},date);

        res.set('Cache-Control' ,'no-cache, max-age=0');
        res.status(200).json({"id":this.lastID,"firstName":req.body.firstName,
            "lastName":req.body.lastName,"age":req.body.age}
        );
    });      
}
