var db = require("../_database/database.js");

module.exports = async function getPhotographerById(id:number) {
    var photographer = await new Promise((resolve, reject) => {
        db.get("select * from photographer where id = (?)",id,(err, rows) => {
            if (err) {
                reject(err);
            }
            resolve(rows);
        });
    });
    return photographer;
}