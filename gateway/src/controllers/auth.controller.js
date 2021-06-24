const { User } = require('../models/auth.model')
const { generateAuthToken, varifyAuthToken, generateEncryptedPassword, compareEncryptedPassword} = require('../services/auth.service')
const chalk = require('chalk')

const signUp = async (req, res) => {

    try {
        req.body.password = await generateEncryptedPassword(req.body.password)
    } catch (error) {
        console.log(chalk.red(error.message))
        return res.status(500).send('Fatal error : password encryption error')
    }
  
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    try {
        let user = await User.findOne({email : email});
        if(user !== null){
            throw new Error(`User already present with this username is ${user.username}`)
        }
    } catch (error) {
        console.log(chalk.red(error.message))
        return res.status(500).send(error.message)
    }

    try {
        
        let user = await User.create({
            username,
            email,
            password
        });
        if(user === null){
            throw new Error('User creation faliure')
        }
        let token = await generateAuthToken({email, password});
        res.cookie('token', token);
        console.log(chalk.green(`new user created with following info :  ${user}`))
        return res.send({status : "success", user})
    } catch (error) {
        console.log(chalk.red(error.message))
        return res.status(500).send(error.message)
    }
}

const signIn = async (req, res) => {

    const email = req.body.email;
    const password = req.body.password;

    try {
        let user = await User.findOne({email : email});
        if(user === null){
            throw new Error(`No such user for email : ${email}`)
        }
        let loginStatus = await compareEncryptedPassword(password, user.password);
        if(!loginStatus){
            throw new Error('Please enter correct password')
        }
        let token = await generateAuthToken({email, password})
        res.cookie('token', token)
        return res.send({status : "success", user})
    } catch (error) {
        console.log(chalk.red(error.message));
        return res.status(500).send(error.message)
    }
}


module.exports = {
    signIn,
    signUp
}