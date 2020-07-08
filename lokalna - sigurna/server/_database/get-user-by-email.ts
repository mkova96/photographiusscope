import { UserDb } from "../user/userDb";

var db = require("./database.js");

module.exports = async function getUserByEmail(email:string) :Promise<UserDb> {


  var user:UserDb= await new Promise((resolve, reject) => {
    db.get("SELECT * FROM user where email = (?)",email,(err, row) => {
        if (err) {
            reject(err);
        }
        resolve(row);
    });
  });
  return user;
}