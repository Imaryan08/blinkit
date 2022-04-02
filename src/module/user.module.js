const mongoose = require("mongoose");
const bcrypt = require('bcrypt');

// create schema
const userSchema = new mongoose.Schema({
    fullName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
    
},{
    timestamps:true,
    versionKey:false
})

// possword convert in decrypting form 
userSchema.pre("save",function(next){
    const hash = bcrypt.hashSync(this.password, 8);
    this.password = hash;
    return next()
})

// possword conver in incrypting form 
userSchema.methods.checkPassword = function(password){
    console.log(password)
    return bcrypt.compareSync(password,this.password);
}

module.exports = mongoose.model("userdata",userSchema)




