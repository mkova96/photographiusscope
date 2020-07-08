const db = require("../database/database.js");
import {Request, Response} from "express";

module.exports=async function getPhotographs(req:Request, res:Response) {
    
    var photos:any=[];
    var rows:any = await new Promise((resolve, reject) => {
        db.all("select * from photograph where userId = (?)",req["user"].sub,(err, rows) => {
            if (err) {
                res.status(400).json({"error": "There's a problem with our SQLite database "+err.stack})
                reject(err);
                return;                }
            resolve(rows);
        });
    });

    rows.forEach(async element => {

        var ui;
        var photographer:any= await new Promise((resolve, reject) => {
            db.get("SELECT * FROM photographer where id = (?)",element.photographerId,(err, row) => {
                if (err) {
                    res.status(400).json({"error": "There's a problem with our SQLite database "+err.stack})
                    reject(err);
                    return;                    }
                resolve(row);
            });
        });

        if (!photographer){
            res.status(400).json({"error": "There is a mistake in retrieving a photographer in our SQLite database"});
        }

        if (!element.userId){
            ui=null;
        }else {
            ui=element.userId;
        }
        
        photos.push({"id":element.id,"name":element.name,"price":element.price,
            "year":element.year, "photoLink":element.photoLink, "photographerId":element.photographerId,"userId":ui,
            "photographer": {"id":photographer.id, "firstName":photographer.firstName,
                "lastName":photographer.lastName, "age": photographer.age 
            }
        });

        if (photos.length==rows.length){
            res.set('Cache-Control', 'public');
            return res.status(200).json(photos);
        }
        
    });
}



