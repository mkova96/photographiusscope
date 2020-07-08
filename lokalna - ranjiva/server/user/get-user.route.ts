const db = require("../_database/database.js");
import {UserDb} from "./userDb";
import {Request, Response} from "express";

module.exports=function getUser(req:Request, res:Response) {

  if (!req["user"]) {
    return res.sendStatus(204);

  }else{

      var user:UserDb;
      var sql = "select * from user where id=(?)";

      var params = [parseInt(req["user"].sub)];

      db.all(sql, params, (err, rows) => {
        if (err){
          return res.status(400).json({"error": "There was an error in our SQLite database "+err.stack})
        }

        try {
          user=rows[0];


          if (!user) {
              return res.status(204).json({"error": "User does not exist in our SQLite database "+err.stack})
          }
          res.set('Cache-Control', 'public');
          res.status(200).json({"email":user.email,"id":user.id,"money":user.money,"firstName":user.firstName,"lastName":user.lastName, 
          "profileLink":user.profileLink});

        }catch(err){
          return res.status(400).json({"error": "There was an error in getting user "+err.stack})
        }
      });
    }
}