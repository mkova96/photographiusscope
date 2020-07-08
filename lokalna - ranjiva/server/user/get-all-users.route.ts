const db = require("../_database/database.js");
import {Request, Response} from "express";


module.exports=async function getAllUsers(req:Request, res:Response) { 

    var sql = "SELECT * FROM user WHERE id not in (1,?)";

    db.all(sql.toString(),parseInt(req["user"].sub), (err, rows) => {
        if (err){
            return res.status(400).json({"error": "There's a problem with our SQLite database "+err.stack})
        }

        if (!rows) {
            return res.status(204).json({"error": "User does not exist in our SQLite database "})
        }
        res.set('Cache-Control', 'public');
        return res.status(200).json(rows);
    });
}
