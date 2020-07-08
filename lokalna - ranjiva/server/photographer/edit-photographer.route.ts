import {Request, Response} from "express";
const db = require("../_database/database.js");
module.exports = async function editPhotographer(req:Request, res:Response) {

    if (!req.body.firstName || !req.body.lastName || !req.body.age || !req.body.id){
        return res.status(400).json({"error": "You didn't define photographer's first name, id, last name or age"})
    }
        
    var sql2 ='UPDATE photographer set firstName = COALESCE(?,firstname), lastName = COALESCE(?,lastname), age = COALESCE(?,age) WHERE id = ?'
    var params2 =[req.body.firstName,req.body.lastName,req.body.age,req.body.id];
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
