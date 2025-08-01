const {Schema,model} = require("mongoose");

const userSchema = new Schema({
    name:{
        type:String,
        required:true,
        maxlength:50,
    },
    email:{
        type: String,
        required:true
    },
    password :{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default : Date.now
    }
});

const userModel = model("User",userSchema) 
module.exports = userModel;