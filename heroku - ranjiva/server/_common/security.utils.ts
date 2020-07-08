const jwt = require("jsonwebtoken");


require('util.promisify').shim();
const fs=require("fs");

const util = require('util');


const signJwt = util.promisify(jwt.sign);
const RSA_PRIVATE_KEY = fs.readFileSync('./private.key');

const SESSION_DURATION = 1000;

import { UserDb } from '../user/userDb';

require('util.promisify').shim();


module.exports = async function createSessionToken(user:UserDb) {
    return signJwt({},
        RSA_PRIVATE_KEY, {
            algorithm: 'RS256',
            subject: user.id.toString()
        }
    );
}

