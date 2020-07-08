import {Request, Response} from "express";


module.exports = function logout(req:Request,res:Response){
    res.set('Cache-Control', 'public');
    return res.status(200).json({message: 'Logout Successful'});
}
