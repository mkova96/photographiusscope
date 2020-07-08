import { UserDb } from '../user/userDb';

var db = require("../_database/database.js");


module.exports = async function updateUser(id:number,money:number) :Promise<UserDb> {
    var sql= `UPDATE user set money = COALESCE (?,money) WHERE id = ?`;
    var newUser:UserDb=await new Promise((resolve, reject) => {
        db.run(sql,[money,id],(err, row) => {
            if (err) {
                reject(err);
            }
            resolve(row);
        });
    });

    return newUser;
}