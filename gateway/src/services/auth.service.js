const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

const saltrounds = parseInt(process.env.BCRYPT_SALT_ROUNDS);
const encodingKey = process.env.JWT_KEY;

const generateEncryptedPassword = async (pwd) => {
   return await bcrypt.hash(pwd, saltrounds);
}

const compareEncryptedPassword = async (pwd, hasedpwd) => {
    return await bcrypt.compare(pwd,hasedpwd)
}

const generateAuthToken = async (payload) => {
    return await jwt.sign(payload, encodingKey, {expiresIn : '24h'});
}

const varifyAuthToken = async (token) => {
    return await jwt.verify(token, encodingKey);
}



module.exports = {
    generateEncryptedPassword,
    compareEncryptedPassword,
    generateAuthToken,
    varifyAuthToken
}