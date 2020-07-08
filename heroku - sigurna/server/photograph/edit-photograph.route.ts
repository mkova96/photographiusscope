import {Request, Response} from "express";
const db = require("../_database/database.js");
const getPhotographById = require('../_database/get-photograph');
const getPhotographerById = require('../_database/get-photographer');
const winston = require('winston');

module.exports = async function editPhotograph(req:Request, res:Response) {

    var date = new Date().toString()

    const photograph = await getPhotographById(req.body.id);
    const photographer = await getPhotographerById(req.body.photographerId);

    if (!photographer || !photograph){
        winston.log({level:'error',message:'ADMIN: Error in edit-photograph'},date)
        res.status(400).json({"error": "That photographer or photograph doesn't exist!"})
    }
    if ((!Number.isInteger(req.body.year) || !Number.isInteger(req.body.price)) || 
        (req.body.name.length >50 || req.body.name.length <1) || (req.body.year <1800 || req.body.year > 2020) || (req.body.price <1)){        winston.log({level:'error',message:'ADMIN: Error in edit-photograph'},date)
        return res.status(400).json({"error": "Wrong input parameters"})
    }
    
    const newPhotoLink = req.body.name+".jpg";
    var sql2 ='UPDATE photograph set name = COALESCE(?,name), year = COALESCE(?,year), price = COALESCE(?,price),photographerId = COALESCE(?,photographerId),photoLink = COALESCE(?,photoLink) WHERE id = ?'
    var params2 =[req.body.name,req.body.year,req.body.price,req.body.photographerId,newPhotoLink,req.body.id];
    db.run(sql2, params2, function (err, result) {

        if (err){
            winston.log({level:'error',message:'ADMIN: Error in edit-photograph'},date)
            res.status(400).json({"error": 'Error in edit-photograph'})
        }
        winston.log({level:'info',message:'ADMIN: Edited photograph'},date);

        res.set('Cache-Control' ,'no-cache, max-age=0');
        res.status(200).json({"id":req.body.id,"name":req.body.name,"price":req.body.price,
            "year":req.body.year, "photoLink":req.body.photoLink, "photographerId":req.body.photographerId,"userId":photograph.userId,
            "photographer": {"id":photographer.id, "firstName":photographer.firstName,
            "lastName":photographer.lastName, "age": photographer.age}
        });
    });        
}
