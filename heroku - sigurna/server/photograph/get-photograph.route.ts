var db = require("../_database/database.js");
import {Request, Response} from "express";
const getPhotographById = require('../_database/get-photograph');
const getPhotographerById = require('../_database/get-photographer');
const getUserById = require('../_database/get-user-by-id');
const winston = require('winston');

module.exports=async function getPhotograph(req:Request, res:Response) {

    if (!req.params.id){
        winston.log({level:'error',message:'Error in get-photograph'},logObject)
        res.status(400).json({"error": "Not enough input parameters"})
    }

    const user = await getUserById(req["user"].sub);
    var logObject = {
        time:new Date().toString(),
        user:user.email
    }
    const photo = await getPhotographById(req.params.id);

    if (!photo){
        winston.log({level:'error',message:'Error in get-photograph'},logObject)
        res.status(400).json({"error": "That photo doesn't exist!"})
    }
    const photographer = await getPhotographerById(photo.photographerId);

    if (!photographer){
        winston.log({level:'error',message:'Error in get-photograph'},logObject)
        res.status(400).json({"error": "That photo doesn't exist!"})
    }

    res.set('Cache-Control' ,'no-cache, max-age=0');
    res.status(200).json({"id":photo.id,"name":photo.name,"price":photo.price,
        "year":photo.year, "photoLink":photo.photoLink, "photographerId":photo.photographerId,"userId":null,
        "photographer": {"id":photographer.id, "firstName":photographer.firstName,
            "lastName":photographer.lastName, "age": photographer.age}});

} 



