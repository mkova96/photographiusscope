import {Request, Response} from "express";
const db = require("../database/database.js");

module.exports = async function createPhotographer(req:Request, res:Response) {
    
    if (!req.body.firstName || !req.body.lastName || !req.body.age){
        return res.status(400).json({"error": "You didn't define photographer's first name, last name or age"})
    }

    var sql2 ='INSERT INTO photographer (firstName, lastName, age) VALUES (?,?,?)'
    var params2 =[req.body.firstName,req.body.lastName,req.body.age];
    db.run(sql2, params2, function (err, result) {

        if (err){
            return res.status(400).json({"error": "There's a problem with our SQLite database "+err.stack})
        }
        
        res.set('Cache-Control', 'public');
        res.status(200).json({"id":this.lastID,"firstName":req.body.firstName,
            "lastName":req.body.lastName,"age":req.body.age}
        );
    });        
}
