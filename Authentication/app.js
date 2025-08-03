const express = require("express")
const app = express();
const dotenv = require("dotenv")
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;  //username and pass starategy
const User = require("./Models/UserModel");


app.use(express.json())

// Middleware 
// What is authentication and authorization?
// AUthentication mean 
dotenv.config();
const Logging =(req,res,next)=>{
    console.log(`${new Date().toLocaleString()} request made by: ${req.originalUrl}`)
    next();
}

passport.use(new LocalStrategy(async(user,password,done)=>{
    try {
        console.log("received Credentiola")
        const user = await User.findOne({name:user})
        
        if(!user || user.length===0){
            return done(null,false,{message:"incorrect name or password"})
        }
        const passMatch = User.password===password ?  true : false
        if(passMatch){
            return done(null,user)
        }
        return done(null,false,{message:"incorrect name or password"})
    }catch(error) {
        return done(error)
    }
}))

app.use(passport.initialize()) //intialize the passport


app.use(Logging);
app.get("/",(req,res)=>{
    res.json({
        success:true,
        message : "hello bhaiaya i am working fine"
    })
}) 


app.listen(process.env.PORT,()=>{console.log("App is up")})