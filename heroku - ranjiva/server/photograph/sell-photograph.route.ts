import {Request, Response} from "express";
const db = require("../database/database.js");

module.exports = async function sellPhotograph(req:Request, res:Response) {

    if (!req.body.id){
        return res.status(400).json({"error": "You must define photo id"});
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

    if (!photograph){
        res.status(400).json({"error": "There is a mistake in retrieving a photograph in our SQLite database"});
    }
    if (req["user"].sub === photograph.userId){
        res.status(400).json({"error": "You don't own this photograph!"});
    }    

    var photographer:any= await new Promise((resolve, reject) => {
        db.get("SELECT * FROM photographer where id = (?)",photograph.photographerId,(err, row) => {
            if (err) {
                res.status(400).json({"error": "There's a problem with our SQLite database "+err.stack})
                reject(err);
                return;
            }
            resolve(row);
        });
    });

    if (!photographer){
        res.status(400).json({"error": "There is a mistake in retrieving a photographer in our SQLite database"});
    }

    var user:any= await new Promise((resolve, reject) => {
        db.get("SELECT * FROM user where id = (?)",photograph.userId,(err, row) => {
            if (err) {
                res.status(400).json({"error": "There's a problem with our SQLite database "+err.stack})
                reject(err);
                return;
            }
            resolve(row);
        });
    });

    var newMoney=photograph.price + user.money;

    var userUpdated:any= await new Promise((resolve, reject) => {
        db.run("update user set money = (?) where id = (?)",newMoney,photograph.userId,(err, row) => {
            if (err) {
                res.status(400).json({"error": "There's a problem with our SQLite database "+err.stack})
                reject(err);
                return;
            }
            resolve(row);
        });
    });

    var sql2 ='update photograph set userId = (?) where id = (?)'
    var params2 =[null,req.body.id];
    db.run(sql2, params2, async function (err, result) {

        if (err){ 
            return res.status(400).json({"error": "There's a problem with our SQLite database "+err.stack})
        }

        var photographer:any= await new Promise((resolve, reject) => {
            db.get("SELECT * FROM photographer where id = (?)",photograph.photographerId,(err, row) => {
                if (err) {
                    res.status(400).json({"error": "There's a problem with our SQLite database "+err.stack})
                    reject(err);
                    return;
                }
                resolve(row);
            });
        });
        
        res.set('Cache-Control', 'public');
        res.status(200).json({"id":photograph.id,"name":photograph.name,"price":photograph.price,
            "year":photograph.year, "photoLink":photograph.photoLink, "photographerId":photograph.photographerId,"userId":null,
            "photographer": {"id":photographer.id, "firstName":photographer.firstName,
                "lastName":photographer.lastName, "age": photographer.age}}); 
        
    }); 
}
