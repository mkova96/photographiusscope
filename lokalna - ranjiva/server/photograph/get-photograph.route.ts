const db = require("../_database/database.js");import {Request, Response} from "express";

module.exports=async function getPhotograph(req:Request, res:Response) {

    if (!req.params.id){
        return res.status(400).json({"error": "You must define photo id"});
    }

    var photos:any=[];
    var photo:any = await new Promise((resolve, reject) => {
        db.get("select * from photograph where id = (?)",req.params.id,(err, rows) => {
            if (err) {
                res.status(400).json({"error": "There's a problem with our SQLite database "+err.stack})
                reject(err);
                return;
            }
            resolve(rows);
        });
    });

    if (!photo){
        res.status(400).json({"error": "That photo doesn't exist in our SQLite database"})
    }

    var photographer:any= await new Promise((resolve, reject) => {
        db.get("SELECT * FROM photographer where id = (?)",photo.photographerId,(err, row) => {
            if (err) {
                res.status(400).json({"error": "There's a problem with our SQLite database "+err.stack})
                reject(err);
                return;
            }
            resolve(row);
        });
    });
    
    res.set('Cache-Control', 'public');
    res.status(200).json({"id":photo.id,"name":photo.name,"price":photo.price,
        "year":photo.year, "photoLink":photo.photoLink, "photographerId":photo.photographerId,"userId":null,
        "photographer": {"id":photographer.id, "firstName":photographer.firstName,
            "lastName":photographer.lastName, "age": photographer.age}});
} 



