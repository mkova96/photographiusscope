import {Request, Response, NextFunction} from 'express';


module.exports =function checkIfAuthenticated(req: Request, res: Response, next: NextFunction) {

    if (req['user']) {
        next();
    }
    else {
        res.status(403).json({"error": "You must log in first"})
    }
}