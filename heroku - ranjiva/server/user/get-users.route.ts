const db = require("../database/database.js");
import {Request, Response} from "express";

module.exports=function getUsers(req:Request, res:Response) { /// PRONAĐEN SQL INJECTION KOD TESTIRANJA

   
      var sql = "SELECT * FROM user WHERE lastName = '" + req.body.input + "' OR firstName = '" + req.body.input + "'";

      db.all(sql, (err, rows) => {
        if (err){
          return res.status(400).json({"error": err.message})
        }
        if (!rows) {
          return res.status(204).json({"error":"User doesn't exist"});
        }
        res.set('Cache-Control', 'public');
        return res.status(200).json(rows);
      });
}
