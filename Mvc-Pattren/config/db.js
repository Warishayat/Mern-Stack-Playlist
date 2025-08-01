const mongoose = require("mongoose");
const dotenv = require("dotenv")

// load  config file
dotenv.config();

const ConnectDB = async()=>{
    try {
        const conn = await mongoose.connect(process.env.DATABASE_URI)
        console.log("Database is connected");
    } catch (error) {
        console.error("Error is up")
        process.exit(1)
    }
}

module.exports = ConnectDB;