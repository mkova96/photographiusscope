import {Request, Response} from "express";
const db = require("../database/database.js");

module.exports = async function createPhotograph(req:Request, res:Response) {

    if (!req.body.name || !req.body.year || !req.body.photographerId || !req.body.price){
        return res.status(400).json({"error": "You didn't define photograph name, year, photographer Id or price"})
    }

    var sql2 ='INSERT INTO photograph (name, year, photographerId, price, userId, photoLink) VALUES (?,?,?,?,?,?)'
    var photoLink=req.body.name+".jpg"
    var params2 =[req.body.name,req.body.year,req.body.photographerId,req.body.price,null,photoLink];

    var photographer:any= await new Promise((resolve, reject) => {
        db.get("SELECT * FROM photographer where id = (?)",req.body.photographerId,(err, row) => {
            if (err) {
                res.status(400).json({"error": "There's a problem with our SQLite database "+err.stack})
                reject(err);
                return;
            }
            resolve(row);
        });
    });

    if (!photographer){
        res.status(400).json({"error": "That photographer doesn't exist in our SQLite database"})
    }

    db.run(sql2, params2, function (err, result) {

        if (err){
            return res.status(400).json({"error": "There's a problem with our SQLite database "+err.stack})
        }
        
        res.set('Cache-Control', 'public');
        res.status(200).json({"id":req.body.id,"name":req.body.name,"price":req.body.price,
        "year":req.body.year, "photoLink":req.body.photoLink, "photographerId":req.body.photographerId,"userId":null,
        "photographer": {"id":photographer.id, "firstName":photographer.firstName,
            "lastName":photographer.lastName, "age": photographer.age}
        });
    });        
}
