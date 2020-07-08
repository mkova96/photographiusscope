import {Request, Response} from "express";
const db = require("../_database/database.js");
const winston = require('winston');

module.exports = async function deletePhotographer(req:Request, res:Response) {

    var date = new Date().toString()

    if (!req.params.id) {
        winston.log({level:'warn',message:'ADMIN: Failed delete-photographer attempt'})
        return res.status(400).json({"error": "Not enough input parameters"});
    }

    var rows:any = await new Promise((resolve, reject) => {
        db.get("select * from photograph where photographerId = (?)",req.params.id,(err, rows) => {
            if (err) {
                reject(err);
            }
            resolve(rows);
        });
    });
    if (rows){
        db.run('DELETE FROM photograph WHERE photographerId = ?', req.params.id, function (err, result) {
            if (err){
                    winston.log({level:'error',message:'ADMIN: Error in delete-photographer'},date)
                    res.status(400).json({"error": 'Error in delete-photographer'})
                }
            db.run('DELETE FROM photographer WHERE id = ?', req.params.id, function (err, result) {
                if (err){
                    winston.log({level:'error',message:'ADMIN: Error in delete-photographer'},date)
                    res.status(400).json({"error": 'Error in delete-photographer'})
                }
                winston.log({level:'info',message:'ADMIN: Deleted photographer'},date);

                res.set('Cache-Control' ,'no-cache, max-age=0');
                res.status(200).json({"message":"deleted"});
            });    
        });     
    }else {
        db.run('DELETE FROM photographer WHERE id = ?', req.params.id, function (err, result) {
            if (err){
                winston.log({level:'error',message:'ADMIN: Error in delete-photographer'},date)
                res.status(400).json({"error": 'Error in delete-photographer'})
            }
            winston.log({level:'info',message:'ADMIN: Deleted photographer'},date);
            res.set('Cache-Control' ,'no-cache, max-age=0');
            res.status(200).json({"message":"deleted"});
        }); 
    }  
}
