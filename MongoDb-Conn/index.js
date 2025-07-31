const express  = require("express");
const app = express()
const mongoose = require("mongoose");
const COnnectDb = require("./db")
const routes = require("./route/main")
app.use(express.json())
const port = 3000
COnnectDb();




//connect karna database se 
// model creat karna
// crud operation perform karna 

app.use("/api",routes)

//http://localhost:3000/api/user - >get request mar k sub user le leingy
//http://localhost:3000/api/user - > post request mar k datbhj k user creat kar leingy.

app.listen(port,()=>{
    console.log("server is up")
})