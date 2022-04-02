
  
const mongoose = require("mongoose");

module.exports = ()=>{
    return mongoose.connect(
        "mongodb+srv://abhishekmehra:abhishek@cluster0.euh2t.mongodb.net/blnkit1"
    )
};