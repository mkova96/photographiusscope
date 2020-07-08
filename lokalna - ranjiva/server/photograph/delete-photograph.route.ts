import {Request, Response} from "express";
const db = require("../_database/database.js");
module.exports = async function deletePhotograph(req:Request, res:Response) {

    if (!req.params.id){
        return res.status(400).json({"error": "You must define photo id"});
    }

    var rows:any = await new Promise((resolve, reject) => {
        db.get("select * from photograph where id = (?)",req.params.id,(err, rows) => {
            if (err) {
                res.status(400).json({"error": "There's a problem with our SQLite database "+err.stack})
                reject(err);
                return;
            }
            resolve(rows);
        });
    });
    if (rows){
        db.run('DELETE FROM photograph WHERE id = ?', req.params.id, function (err, result) {
            if (err){
                return res.status(400).json({"error": "There's a problem with our SQLite database "+err.stack})
            }
            res.set('Cache-Control', 'public');
            res.status(200).json({"message":"deleted"});
        });     
    }else{
        res.status(400).json({"error":"That photograph doesn't exist in our SQLite database"});
    }
}
