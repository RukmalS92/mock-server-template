const router = require('express').Router()
const { signUp, signIn } = require('../controllers/auth.controller')
const { validateInfo } = require('../middleware/validator.middleware')

router.post('/signup', validateInfo, signUp);
router.post('/signin',validateInfo, signIn);


module.exports = router;