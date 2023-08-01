//Add Mongoose Module 
const mongoose =require('mongoose');

//Todo Schema with datatypes
const tasks = new mongoose.Schema({
    description:{
         type:String,
         required:true
    },
    dueDate:{
           type:String,
           required:true
    },
    Category:{
         type:String,
         require:true
    },  
})

//Exporting models to available outside
const Task = mongoose.model('TodoApp',tasks);
module.exports =Task;