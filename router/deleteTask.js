const express =require('express');
const router = express.Router();

//Controller handler
const deletecontroller = require('../controller/deleteTask');
//Access the data
router.get('/tasks',deletecontroller.delete_task);

//Export router here to available outside this module
module.exports = router;