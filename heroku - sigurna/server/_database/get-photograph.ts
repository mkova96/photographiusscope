var db = require("../_database/database.js");

module.exports = async function getPhotographById(id:number) {
    var photograph:any= await new Promise((resolve, reject) => {
        db.get("SELECT * FROM photograph where id = (?)",id,(err, row) => {
            if (err) {
                reject(err);
            }
            resolve(row);
        });
    });
    return photograph;
}    