const db = require("../_database/database.js");
import {Request, Response} from "express";


module.exports=async function getAllUsers(req:Request, res:Response) { 

    var sql = "SELECT * FROM user WHERE id not in (1,?)";

    db.all(sql.toString(),parseInt(req["user"].sub), (err, rows) => {
        if (err){
            return res.status(400).json({"error": "There's a problem in getting users"})
        }

        if (!rows) {
            return res.status(204).json({"error": "There's a problem in getting users"})
        }
        res.set('Cache-Control', 'no-store');
        return res.status(200).json(rows);
    });
}
