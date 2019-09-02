var express = require('express');
var router = express.Router();

const employeeController = require('../controllers/employee');

router.get('/getAllEmployee', employeeController.getAllEmployee);

module.exports = router;

