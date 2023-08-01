//Adding Schema of Todos 
const Task = require('../model/tasks.js');

//Sending Response to Browser
module.exports.delete_task=(req,res)=>{
     //Access from data
       let id =req.query.id;
       console.log(id);
     //Process the data...
     Task.findByIdAndRemove(id).then().catch(err =>{
         console.log(err);
      });
        return res.redirect ('back');
}
