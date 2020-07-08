const jwt = require("jsonwebtoken");
const argon2=require("argon2");


module.exports = async function createCsrfToken(sessionToken:string) {
    return await argon2.hash(sessionToken);
}

