import {Request, Response} from "express";
const db = require("../_database/database.js");

const getPhotographerById = require('../_database/get-photographer');
const winston = require('winston');

module.exports = async function createPhotograph(req:Request, res:Response) {

    if (!req.body.name || !req.body.year || !req.body.photographerId || !req.body.price){
        winston.log({level:'error',message:'ADMIN: Error in create-photograph'},date)
        return res.status(400).json({"error": "Not enough input parameters"})
    }
    if ((!Number.isInteger(req.body.year) || !Number.isInteger(req.body.price)) || 
        (req.body.name.length >50 || req.body.name.length <1) || (req.body.year <1800 || req.body.year > 2020) || (req.body.price <1)){
        winston.log({level:'error',message:'ADMIN: Error in create-photograph'},date)
        return res.status(400).json({"error": "Wrong input parameters"})
    }

    var date = new Date().toString();

    var sql2 ='INSERT INTO photograph (name, year, photographerId, price, userId, photoLink) VALUES (?,?,?,?,?,?)'
    var photoLink=req.body.name+".jpg"
    var params2 =[req.body.name,req.body.year,req.body.photographerId,req.body.price,null,photoLink];

    const photographer = await getPhotographerById(req.body.photographerId);


    if (!photographer){
        winston.log({level:'error',message:'ADMIN: Error in create-photograph'},date)
        res.status(400).json({"error": "That photographer doesn't exist!"})
    }

    db.run(sql2, params2, function (err, result) {

        if (err){
            winston.log({level:'error',message:'ADMIN: Error in create-photograph'},date)
            res.status(400).json({"error": 'Error in create-photograph'})
        }
        winston.log({level:'info',message:'ADMIN: New photograph'},date);

        res.set('Cache-Control' ,'no-cache, max-age=0');
        res.status(200).json({"id":req.body.id,"name":req.body.name,"price":req.body.price,
        "year":req.body.year, "photoLink":req.body.photoLink, "photographerId":req.body.photographerId,"userId":null,
        "photographer": {"id":photographer.id, "firstName":photographer.firstName,
            "lastName":photographer.lastName, "age": photographer.age}
        });
    });      
}
