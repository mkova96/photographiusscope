import {Request, Response} from "express";
const db = require("../_database/database.js");

const getPhotographById = require('../_database/get-photograph');
const getPhotographerById = require('../_database/get-photographer');
const getUserById = require('../_database/get-user-by-id');
const updateUser = require('../_database/update-user');
const winston = require('winston');

module.exports = async function buyPhotograph(req:Request, res:Response) {

    if (!req.body.id) {
        winston.log({level:'warn',message:'Failed buy-photograph attempt', logObject})
        res.status(400).json({"error": "Not enough input parameters"});
    }

    const photograph = await getPhotographById(req.body.id);

    if (!photograph){
        winston.log({level:'warn',message:'Failed buy-photograph attempt', logObject})
        res.status(400).json({"error": "There is a mistake in retrieving a photograph!"});
    }
    if (photograph.userId){
        winston.log({level:'warn',message:'Failed attempt at buy-photograph', logObject});
        res.status(400).json({"error": "You can't buy this photograph!"});
    }

    const photographer = await getPhotographerById(photograph.photographerId);

    if (!photographer){
        winston.log({level:'warn',message:'Failed buy-photograph attempt', logObject})
        res.status(400).json({"error": "There is a mistake in retrieving a photographer!"});
    }

    const user = await getUserById(req["user"].sub);
    var logObject = {
        time:new Date().toString(),
        user:user.email
    }

    if (user.money < photograph.price){
        winston.log({level:'warn',message:'Failed buy-photograph attempt', logObject})
        res.status(400).json({"error": "You don't have that much money!"});
    }
    var newMoney=user.money-photograph.price;
    
    const newUser = await updateUser(req["user"].sub,newMoney);

    var sql2 ='update photograph set userId = COALESCE(?,userId) where id = (?)'
    var params2 =[req["user"].sub,req.body.id];
    db.run(sql2, params2, async function (err, result) {

        if (err){
            winston.log({level:'error',message:'Error in buy-photograph', logObject}) 
            res.status(400).json({"error": 'Error in buy-photograph'})
        }
        winston.log({level:'info',message:'Bought photograph'},logObject);

        res.set('Cache-Control' ,'no-cache, max-age=0');
        res.status(200).json({"id":photograph.id,"name":photograph.name,"price":photograph.price,
            "year":photograph.year, "photoLink":photograph.photoLink, "photographerId":photograph.photographerId,"userId":req["user"].sub,
            "photographer": {"id":photographer.id, "firstName":photographer.firstName,
                "lastName":photographer.lastName, "age": photographer.age}}); 
        
    });
}
