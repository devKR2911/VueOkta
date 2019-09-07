var express = require('express');
var router = express.Router();

const userController = require('../controllers/user');

router.get('/getAllUsers', userController.getAllUsers);
router.post('/addUser', userController.addUser);
router.post('/getUserDetails', userController.getUserDetails);
router.post('/updateUserDetails', userController.updateUserDetails);





module.exports = router;