//Adding Schema of to-do list here.

const Task = require('../model/tasks.js');

//Pre added task for just demo.
var Tasks = [
     {
         description:"Yoga",
         dueDate:"25/06/2023",
         category:"Health"
     }
 ]

//Sending Response To Browser
module.exports.home =(req,res)=>{
    const query =Task.find({}); 
    query.exec() 
    .then(tasks =>{
       //sending index.ejs file to the browser
       return res.render('index',{
            title:"ToDo List App ",
            tasks_List:tasks
       });  
    }).catch(err =>{
         console.log(err);
    });
}