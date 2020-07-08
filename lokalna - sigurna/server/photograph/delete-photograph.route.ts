import {Request, Response} from "express";
const db = require("../_database/database.js");
const getPhotographById = require('../_database/get-photograph');
const winston = require('winston');

module.exports = async function deletePhotograph(req:Request, res:Response) {

    if (!req.params.id) {
        winston.log({level:'warn',message:'ADMIN: Failed delete-photograph attempt'})
        return res.status(400).json({"error": "Not enough input parameters"});
    }

    var date = new Date().toString()
    const photograph = await getPhotographById(req.params.id);

    if (photograph){
        db.run('DELETE FROM photograph WHERE id = ?', req.params.id, function (err, result) {
            if (err){
                winston.log({level:'error',message:'ADMIN: Error in delete-photograph'},date)
                res.status(400).json({"error": 'Error in delete-photograph'})
            }
            winston.log({level:'info',message:'ADMIN: Deleted photograph'},date);

            res.set('Cache-Control' ,'no-cache, max-age=0');
            res.status(200).json({"message":"deleted"});
        });     
    }else{
        winston.log({level:'error',message:'ADMIN: Error in delete-photograph'},date)
        res.status(400).json({"error":"That photograph doesn't exist!"});
    }
}
