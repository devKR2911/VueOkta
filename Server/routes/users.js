var express = require('express');
var router = express.Router();

const userController = require('../controllers/users');

/* GET users listing. */
router.get('/getAllUsers', userController.getAllUsers);

module.exports = router;