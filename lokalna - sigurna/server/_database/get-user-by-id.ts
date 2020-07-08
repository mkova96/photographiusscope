import { UserDb } from "../user/userDb";

var db = require("./database.js");
module.exports = async function getUserById(id:number):Promise<UserDb>  {
  
    var user:UserDb = await new Promise((resolve, reject) => {
      db.get("SELECT * FROM user where id = (?)",id,(err, row) => {
          if (err) {
              reject(err);
          }
          resolve(row);
      });
    });
    return user;
}