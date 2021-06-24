const router = require('express').Router()
const { hello } = require('../controllers/index.controller')

router.get('/', hello);


module.exports = router;