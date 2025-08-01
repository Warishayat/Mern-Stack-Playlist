const {Schema,model} = require("mongoose");
const { type } = require("os");

const UserSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default: Date.now
    }
})

// register with model
const UserModel = model("User",UserSchema);
module.exports = UserModel;