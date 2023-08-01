//Adding Mongoose Module Dependencies
const mongoose=  require('mongoose');

//Error Handler
main().catch(err =>console.log("Connection Error: ",err));


//Connection with MongoDB
async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/Todo_App');
    console.log("Conneted to database Successfully");
}
