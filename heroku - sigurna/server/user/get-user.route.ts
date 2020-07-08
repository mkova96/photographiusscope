const db = require("../_database/database.js");
import {UserDb} from "./userDb";
import {Request, Response} from "express";
const getUserById = require('../_database/get-user-by-id');

module.exports=function getUser(req:Request, res:Response) {

  if (!req["user"]) {
    return res.sendStatus(204);

  }else{
    var user:UserDb;

    db.all("select * from user where id=(?)", parseInt(req["user"].sub), (err, rows) => {
      if (err){
        return res.status(400).json({"error": "There was an error in getting user"})
      }

      try {
        user=rows[0];

        if (!user) {
            return res.status(204).json({"error": "There was an error in getting user"})
        }

        res.set('Cache-Control', 'no-store');
        res.status(200).json({"email":user.email,"id":user.id,"role":user.role,"money":user.money,"firstName":user.firstName,"lastName":user.lastName, 
          "profileLink":user.profileLink});

      }catch(err){
        console.log(err.message);
        return res.status(400).json({"error": "There was an error in getting user "})
      }
    });    
  }
}