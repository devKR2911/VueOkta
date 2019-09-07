var express = require('express');
var router = express.Router();

const userController = require('../controllers/user');

router.get('/getAllUsers', userController.getAllEmployee);
router.post('/addUser', userController.addUser);

module.exports = router;