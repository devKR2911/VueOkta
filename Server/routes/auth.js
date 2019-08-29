var express = require('express');
var router = express.Router();

const authController = require('../controllers/auth');

/* GET users listing. */
router.get('/login', authController.login);

module.exports = router;