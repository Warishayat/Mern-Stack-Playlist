const express = require("express");
const router = express.Router()

// i will discurss the two types of middleware 
// 1: Application level middleware
// 2: Router Level Middleware
// 3: Error Type Middleware


// Route Specific Middleware 
// suppose one route for /student and one for /admin is just for admin role lets make with
// Middleware

const authenticate = function (req,res,next){
    console.log("im working inside Auth.")
    req.user = {id:1,name:"waris", student:true}

    if (req.user){
        // check karo authenticate haw k nai //mean login h k nai hae tu agy bhjna srf
        next()
    }
    else{
        // age login nai h tu usko bolo k login kare
        res.json({
            success: false ,
            message: "bhai je login karke apko dikhata hu sundar vadiyan"
            
        })
    }
}

const isStudent = function(req,res,next){
    console.log("student wala middleware")
    //checl karo k user jo hae wo student hae
    if(req.user.student){
        //agr student hae tu next chale jao wrna jao peechy
        next()
    }
    else{
        res.json(
            {
                sucess:false,
                message : "ary bhai tu student ho k admin route m kia dhund ra hae"
            }
        )
    }
}

const isAdmin = function(req,res,next){
    // agr admin h tu admin wla route wrna nikl jao yhns se
    console.log("im inside the admin wla route");
    if(!req.user.student){
        // mean k yea admin h ikso bhjo amdin wly route par
        next()
    }
    else{
        res.json({
            sucess:false ,
            message : "Bhai tu admin hi kar kin chkru mae laga hua hae dehan kar thura. "
        })
    }
}


//routes

router.get("/student",authenticate,isStudent,(req,res)=>{
    res.json({
        message : "welcome student ban k kia teer mara ray."
    })
})

router.get("/admin",authenticate,isAdmin,(req,res)=>{
    res.json({
        message: "welcome je admin panale par apka swagat kia jata hae."
    })
})

module.exports = router