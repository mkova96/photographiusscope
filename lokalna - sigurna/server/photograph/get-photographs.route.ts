const db = require("../_database/database.js");
import {Request, Response} from "express";

const getPhotographerById = require('../_database/get-photographer');
const winston = require('winston');
const getUserById = require('../_database/get-user-by-id');

module.exports=async function getPhotographs(req:Request, res:Response) {

    const user = await getUserById(parseInt(req["user"].sub));
    var logObject = {
        time:new Date().toString(),
        user:user.email
    }

    var rows:any = await new Promise((resolve, reject) => {
        db.all("select * from photograph",(err, rows) => {
            if (err) {
                reject(err);
            }
            resolve(rows);
        });
    });

    var photos:any=[];
    rows.forEach(async element => {

        var ui;
        const photographer = await getPhotographerById(element.photographerId);

        if (!photographer){
            winston.log({level:'error',message:'Error in get-photographs'},logObject)
            res.status(400).json({"error": "There is a mistake in retrieving a photographer!"});
        }

        if (!element.userId){
            ui=null;
        }else {
            ui=element.userId;
        }
        
        photos.push({"id":element.id,"name":element.name,"price":element.price,
            "year":element.year, "photoLink":element.photoLink, "photographerId":element.photographerId,"userId":ui,
            "photographer": {"id":photographer.id, "firstName":photographer.firstName,
                "lastName":photographer.lastName, "age": photographer.age 
            }
        });

        if (photos.length==rows.length){
            res.set('Cache-Control' ,'no-cache, max-age=0');
            return res.status(200).json(photos);
        }
        
    });    
}



