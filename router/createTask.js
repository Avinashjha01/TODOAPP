const express = require('express');
const router = express.Router();

//Adiing Controller
const cretecontroller = require('../controller/createTask');
  
//route handler
 router.post('/tasks',cretecontroller.create_task);
//Export router here to available outside this module
module.exports = router;