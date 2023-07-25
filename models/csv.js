/*Importing mongoose package*/
const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  fileName: {
    type: String
  },
  filePath : {
    type:String
  },
  file: {
    type: String
  }
}, {
  timestamps: {
    options: { timeZone: 'Asia/Kolkata' }
  }
});



//Making Mongoose Model
const files = mongoose.model("files", dataSchema);

//Exporting by files model
module.exports = files;