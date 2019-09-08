var express = require('express');
var router = express.Router();

const groupController = require('../controllers/groups');

router.get('/getAllGroups', groupController.getAllGroups);

module.exports = router;