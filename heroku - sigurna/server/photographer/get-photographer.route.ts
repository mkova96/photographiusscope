var db = require("../_database/database.js");
import {Request, Response} from "express";
const getPhotographerById = require('../_database/get-photographer');
const winston = require('winston');

module.exports=async function getPhotographer(req:Request, res:Response) {

    if (!req.params.id){
      winston.log({level:'error',message:'Error in get-photographer'})
      res.status(400).json({"error": "Not enough input parameters"})
    }

    const photographer = await getPhotographerById(req.params.id);

    if (!photographer){
      res.status(400).json({"error":"That photographer doesn't exist"})
    }

    res.set('Cache-Control' ,'no-cache, max-age=0');
    return res.status(200).json(photographer);  
}



