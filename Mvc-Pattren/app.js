const express = require("express");
const app = express();
const dotenv = require("dotenv")                     // Private 
const ConnectDB = require("./config/db")             // Database schema nd model
const userRouter = require("./routes/userRoutes");   //routres
app.use(express.json());
dotenv.config();
ConnectDB();


// In todayas lecture i will discuss about MVC pattren where mvc stand for how req and res flow.
// Model       -> database schemas and models,db logics idr ayengy mittar.
// View        -> user view ejs come under this how view look like.
// Controllers -> its nothing but business logic,all logic will came under this.

// we are making a application kind of cart product we can creat product,view,edit and delet.



app.use("/api", userRouter);

// How flow will work ?
//  http://localhost3000/api/users -> post -> creatUser
// http://localhost3000/api/users -> get -> getProducts
// http://localhost3000/api/users/:id -> put -> updateUsers
// http://localhost3000/api/users/:id -> delet ->user delete

app.listen(process.env.PORT,()=>{
    console.log("App is up")
})