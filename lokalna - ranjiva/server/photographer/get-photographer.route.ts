const db = require("../_database/database.js");import {Request, Response} from "express";

module.exports=async function getPhotographer(req:Request, res:Response) {

    if (!req.params.id){
        return res.status(400).json({"error": "You must define photographer id"});
    }

    var rows:any = await new Promise((resolve, reject) => {
        db.get("select * from photographer where id = (?)",req.params.id,(err, rows) => {
            if (err) {
                res.status(400).json({"error": "There's a problem with our SQLite database "+err.stack})
                reject(err);
                return;
            }
            resolve(rows);
        });
    });
    res.set('Cache-Control', 'public');
    return res.status(200).json(rows);     
}



