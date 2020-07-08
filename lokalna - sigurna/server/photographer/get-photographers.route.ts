const db = require("../_database/database.js");
import {Request, Response} from "express";

module.exports=async function getPhotographers(req:Request, res:Response) {

    var rows:any = await new Promise((resolve, reject) => {
        db.all("select * from photographer",(err, rows) => {
            if (err) {
                reject(err);
            }
            resolve(rows);
        });
    });
    res.set('Cache-Control' ,'no-cache, max-age=0');

    return res.status(200).json(rows);    
}



