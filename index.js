const express = require('express');
const path = require('path');
const db = require('./database/mongoose.js');
const port = 8000;
const host ='127.0.0.1';
const app = express();
//Middleware for parsing (Url encoded from data)
app.use(express.urlencoded({extended:false}));

//Importing router Handler
app.use('/',require('./router'));

//Import static Files
app.use(express.static(__dirname +'/src'));

//Set the View engine to ejs
app.set('view engine','ejs');
app.set('views','./views');

//Server Setup
app.listen(port,function(err){
    if(err){
         console.log("Error In Sever Due To:" ,err.message);
    }
    console.log("Server is running on port:",port);    
});