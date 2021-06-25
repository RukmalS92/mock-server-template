const validator = require('../services/validation.service')
const chalk = require('chalk')

const validateInfo = async (req, res, next) => {
    try {
        if(req.body === undefined){
            throw new Error('No body found');
        }
        const email = req.body.email;
        const password = req.body.password;
        if((email === undefined) || (password === undefined)){
            throw new Error('Body does contain eiter username email password');
        }
    
        if(!validator.validateEmail(email)){
           throw new Error('Wrong email format')
        }
        console.log(chalk.blue('validation success'));
        next()
    } catch (error) {
        console.log(chalk.red(error.message));
        return res.send({status : "fail", message : error.message})
    }
}

module.exports = {
    validateInfo
}