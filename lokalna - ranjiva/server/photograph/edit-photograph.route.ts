import {Request, Response} from "express";
const db = require("../_database/database.js");
module.exports = async function editPhotograph(req:Request, res:Response) {

    if (!req.body.name || !req.body.year || !req.body.photographerId || !req.body.price || !req.body.id){
        return res.status(400).json({"error": "You didn't define photograph name, year, photo Id, photographer Id or price"})
    }

    var photograph:any= await new Promise((resolve, reject) => {
        db.get("SELECT * FROM photograph where id = (?)",req.body.id,(err, row) => {
            if (err) {
                res.status(400).json({"error": "There's a problem with our SQLite database "+err.stack})
                reject(err);
                return;
            }
            resolve(row);
        });
    });

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

    if (!photographer || !photograph){
        res.status(400).json({"error": "That photographer or photograph doesn't exist in our SQLite database"})
    }
    
    const newPhotoLink = req.body.name+".jpg";
    var sql2 ='UPDATE photograph set name = COALESCE(?,name), year = COALESCE(?,year), price = COALESCE(?,price),photographerId = COALESCE(?,photographerId),photoLink = COALESCE(?,photoLink) WHERE id = ?'
    var params2 =[req.body.name,req.body.year,req.body.price,req.body.photographerId,newPhotoLink,req.body.id];
    db.run(sql2, params2, function (err, result) {

        if (err){
            return res.status(400).json({"error": "There's a problem with our SQLite database "+err.stack})
        }
        
        res.set('Cache-Control', 'public');
        res.status(200).json({"id":req.body.id,"name":req.body.name,"price":req.body.price,
        "year":req.body.year, "photoLink":req.body.photoLink, "photographerId":req.body.photographerId,"userId":photograph.userId,
        "photographer": {"id":photographer.id, "firstName":photographer.firstName,
            "lastName":photographer.lastName, "age": photographer.age}
        });
    });        
}
