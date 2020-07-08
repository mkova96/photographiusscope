import {Request, Response} from "express";
const db = require("../database/database.js");

module.exports = async function deletePhotographer(req:Request, res:Response) {
    
    if (!req.params.id){
        return res.status(400).json({"error": "You must define photographer id"});
    }

    var rows:any = await new Promise((resolve, reject) => {
        db.get("select * from photograph where photographerId = (?)",req.params.id,(err, rows) => {
            if (err) {
                res.status(400).json({"error": "There's a problem with our SQLite database "+err.stack})
                reject(err);
                return;
            }
            resolve(rows);
        });
    });
    if (rows){
        db.run('DELETE FROM photograph WHERE photographerId = ?', req.params.id, function (err, result) {
            if (err){
                    return res.status(400).json({"error": "There's a problem with our SQLite database "+err.stack})
                }
            db.run('DELETE FROM photographer WHERE id = ?', req.params.id, function (err, result) {
                if (err){
                    return res.status(400).json({"error": "There's a problem with our SQLite database "+err.stack})
                }

                res.status(200).json({"message":"deleted"});
            });    
        });     
    }else {
        db.run('DELETE FROM photographer WHERE id = ?', req.params.id, function (err, result) {
            if (err){
                return res.status(400).json({"error": "There's a problem with our SQLite database "+err.stack})
            }
            
            res.set('Cache-Control', 'public');
            res.status(200).json({"message":"deleted"});
        }); 
    }
}
