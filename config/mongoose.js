//Importing mongoose package
const mongoose = require("mongoose");


//Making Connection

const DB = 'mongodb+srv://yallalaraja:12345@cluster0.f9dpilv.mongodb.net/'
mongoose.connect(DB).then(()=>{
    console.log('Connection successful!');
}).catch((err) => console.log("no connection " + err));

//setting it to db
const db = mongoose.connection;

//if error occurs
db.on("error", console.error.bind(console, "Error while connecting to DB"));
// when db connects successfully
db.once("open", function(){
    console.log("Successfully connected to DB");
});

//Exporting Our DataBase
module.exports = db;