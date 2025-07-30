const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();
const port = 3000;

// 1: Middleware is nothing but just a function which is used to work between req and response. yea authetication validation
// aur bhut kuch karta hae yea ik layer hae jo req k foran bad execute karta h jo bahut daray function perfoam karka valid
// response genrate karta hae.

// ReaL LIFE Eexamle if someone is approaching the admin panel of the website from their owner or ceo that can go there without
// any problem becuase we already defined that that one super admin or admin but if some user will try to access the admin panel
// of the website of w3 middleware will block the request and sent them back a response youa re not a valid user. inshort i will
// /admin is proteted route only admin will come and make changes into it and no other user will come and makes changes into 
// the admin panel. and if there si some route with name of somple user anyone can come and chnages according to it. there is a
// reason so we use middleware in the application. 

// lets dicuss about code 
// There are diffrent wayo of middleware 
// 1: Application level middleware
// 2: Router level middlware
// 3: Error handler Middleware
// 4: Inbuilt Middleware
// 5 : ThirdpartY Middleware 


////1: Inbuilt Middleware
// example: json cookieparser
// loading inbuilt middleware
app.use(express.json())  // 1 yea inbuilt middleware hae.

//custom Middleware creat karuga.
// 1 Logging Middleware 
// 2 authentication ka 
// 3 validation ka   ===> is case m order bahut matter karega.
// important thing for custom middleware age kahi par midleware m humy age next ni kia aur 
// wahan se res.send kar dea tu humy koi b kuch b route par ni phnchh skuga. isko middlewrae
// chaining bola jata hae mittar.




// const Logging = function (req,res,next){
//     console.log("M logging karra hu");
//     next();
// }
// app.use(Logging);
// const Authentication = function(re1,res,next){
//     console.log("Authentication horai hae");
//     // res.send("Chalo niklo ghr yhn se")
   
//     next();
// }
// app.use(Authentication);
// const validation = function(req,res,next){
//     console.log("validation horai hae")
    
//     next();
// }
// app.use(validation);

// app.get("/",(req,res)=>{
//     console.log(req.body)
//     res.json({
//         "message" : "Hello ji this is love babaar"
//     })
// })


// app.get("/item",(req,res)=>{
//     res.json({
//         "message" : "Middleware kam karna chahiye idr tak b"
//     })
// })
const route = require('./routes/main')

app.use("/",route)
app.listen(port,()=>{
    console.log(`this app is running on ${port}`);
})