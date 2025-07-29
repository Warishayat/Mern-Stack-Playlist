const express = require("express");  //expres module ko include kia mena.
const app = express();               //express ki application ko initilaize karray haen.
const port = 3000                    //is port par meri request ayegi. m is post ki request ko serve karuga



app.get("/",(req,res)=>{
    res.send("App ki get request kam karri hae.")
})

app.get('/blog',(req,res)=>{
    res.send("Bahut saraya artical dikha du ga apko mery bhai")
})


// start the server 
app.listen(port,()=>{
    console.log(`Ap ki application is port par ${port} par chl rai hae.`)
})


