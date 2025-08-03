const mongoose = require("mongoose");
const dotenv = require("dotenv");

//load config file

dotenv.config();


const ConnectDB = async()=>{
   try {
    const conn = mongoose.connect(process.env.DATABASE_URI);
    console.log("Database is connected");
   } catch(error) {
    console.log("Error is up");
   }
}

module.exports = ConnectDB();