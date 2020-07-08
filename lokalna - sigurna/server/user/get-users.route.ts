const db = require("../_database/database.js");
import {Request, Response} from "express";

const winston = require('winston')
const getUserById = require('../_database/get-user-by-id');

module.exports=async function getUsers(req:Request, res:Response) { 

    const user = await getUserById(parseInt(req["user"].sub));

    var logObject = {
      time:new Date().toString(),
      user:user.email
    }

    var input = req.body.input.toLowerCase();

    if (input.length >= 25 || /\d/.test(input)|| input.includes(";") || input.includes("--") || 
    input.toLocaleLowerCase().includes("drop table") || input.includes("=") || input.includes("insert")){

      winston.log({level:'warn',message:'Failed user search', logObject})
      return res.status(400).json({"error": "improper input"})
    }

    var params = ["%"+input+"%","%"+input+"%",parseInt(req["user"].sub)];
    var sql = "SELECT * FROM user WHERE LOWER(lastName) LIKE (?) OR LOWER(firstName) LIKE (?) AND id not in (1,?)";


    db.all(sql.toString(),params, (err, rows) => {
      if (err){
        return res.status(400).json({"error": "Error in user search"})
      }

      if (!rows) {
          return res.status(204).json({"error":"Users doesn't exist"});
      }
      res.set('Cache-Control', 'no-store');
      return res.status(200).json(rows);
    });
}
