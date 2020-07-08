const db = require("../_database/database.js");import {Request, Response} from "express";

module.exports=async function getPhotographers(req:Request, res:Response) {

    var rows:any = await new Promise((resolve, reject) => {
        db.all("select * from photographer",(err, rows) => {
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



