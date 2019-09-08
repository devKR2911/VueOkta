var express = require('express');
var router = express.Router();

const groupController = require('../controllers/groups');

router.get('/getAllGroups', groupController.getAllGroups);
router.post('/createGroup', groupController.createGroup);



module.exports = router;