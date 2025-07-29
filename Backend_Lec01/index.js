const express = require("express")
const app = express()
const port = 3000
// load routes that we make in the item.js
const item = require("./routes/item");

// app.get("/",(req,res)=>{
//     res.sendFile("/index.html",{root:__dirname}) //root sepecify karna lazmi huta hae is ase m
// })

// app.put("/item/:id" ,(req,res)=>{
//     res.send("Hello ji item arary haen")
// })

// app.delete('/item/:id',(req,res)=>{
//     res.json({
//         "message" : "chacha apka data delet kar dea h sojao"
//     })
// })

// app.post("/item" ,(req,res)=>{
//    res.send("Hello je swagat h post req ka")
// })


app.use("/api",item);
app.listen(port,()=>{
    console.log(`AP ki app port 3000 par run horai hae. ${port}`)
})