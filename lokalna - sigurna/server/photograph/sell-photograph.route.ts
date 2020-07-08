import {Request, Response} from "express";
const db = require("../_database/database.js");
const getPhotographById = require('../_database/get-photograph');
const getPhotographerById = require('../_database/get-photographer');
const getUserById = require('../_database/get-user-by-id');
const updateUser = require('../_database/update-user');
const winston = require('winston');


module.exports = async function sellPhotograph(req:Request, res:Response) {

    if (!req.body.id) {
        winston.log({level:'warn',message:'Failed sell-photograph attempt', logObject})
        return res.status(400).json({"error": "Not enough input parameters"});
    }

    const user1 = await getUserById(req["user"].sub);

    var logObject = {
        time:new Date().toString(),
        user:user1.email
    }

    const photograph = await getPhotographById(req.body.id);

    if (!photograph){
        winston.log({level:'warn',message:'Failed attempt at sell-photograph', logObject});
        res.status(400).json({"error": "There is a mistake in retrieving a photograph!"});
    }
    if (req["user"].sub != photograph.userId){
        winston.log({level:'warn',message:'Failed attempt at sell-photograph', logObject});
        res.status(400).json({"error": "You don't own this photograph!"});
    }

    const photographer = await getPhotographerById(photograph.photographerId);

    if (!photographer){
        winston.log({level:'error',message:'Error in sell-photograph'},logObject)
        res.status(400).json({"error": "There is a mistake in retrieving a photographer!"});
    }

    const user = await getUserById(photograph.userId);

    var logObject = {
        time:new Date().toString(),
        user:user.email
    }

    var newMoney=photograph.price + user.money;
    const newUser = await updateUser(photograph.userId,newMoney);    
    
    var sql2 ='update photograph set userId = (?) where id = (?)'
    var params2 =[null,req.body.id];
    db.run(sql2, params2, async function (err, result) {

        if (err){ 
            winston.log({level:'error',message:'Error in sell-photograph'},logObject)
            res.status(400).json({"error": 'Error in sell-photograph'})
        }
        winston.log({level:'info',message:'Sold photograph'},logObject);

        res.set('Cache-Control' ,'no-cache, max-age=0');
        res.status(200).json({"id":photograph.id,"name":photograph.name,"price":photograph.price,
            "year":photograph.year, "photoLink":photograph.photoLink, "photographerId":photograph.photographerId,"userId":null,
            "photographer": {"id":photographer.id, "firstName":photographer.firstName,
                "lastName":photographer.lastName, "age": photographer.age}});         
    });
}
