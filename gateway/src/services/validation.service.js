const validator = require('validator')

const validateEmail = (email) => {
    return validator.isEmail(email);
}

const validatePassword = (pwd) => {

}

module.exports = {
    validateEmail,
    validatePassword
}