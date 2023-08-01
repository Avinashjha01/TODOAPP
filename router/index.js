const express = require('express');
const router = express.Router();

//Controller
const homecontroller = require('../controller/home');

//Route Handle
router.get('/',homecontroller.home);
router.use('/createTask',require('./createTask'));
router.use('/deleteTask',require('./deleteTask'));

//Export router here to available outside this module
module.exports = router;

