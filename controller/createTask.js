//Adding Schema of Todo_App 
const Task = require('../model/tasks.js');

//Sending Response to Browser
module.exports.create_task =(req,res)=>{

     //Access From Data
     const tasks = {
         description :req.body.description,
         dueDate:req.body.dueDate,
         Category:req.body.Category,
     }

     //Process the data
     Task.create(tasks)
     .then(createTask =>{
        return res.redirect('back');
     }).catch(err =>{
         console.log(err); 
     });
}