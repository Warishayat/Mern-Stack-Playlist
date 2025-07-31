const mongoose = require("mongoose");
const dotenv = require('dotenv')

// loading dotenv cofiguration
dotenv.config();


const ConnectDb = async()=>{
    try {
        const conn = await mongoose.connect(process.env.DATABASE_URI)
        console.log("Database is connected");
    } catch (error) {
        console.error("Error is up")
        process.exit(1)
    }
}


module.exports = ConnectDb;