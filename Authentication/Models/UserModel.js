const {Schema,model} = require("mongoose");


// define your schema

const UserSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true
    },
    created_at :{
        type:Date,
        default:Date.now
    }
})

const UserModel = model("User",UserSchema);
module.exports = UserModel;