const express = require ("express")
const router = express.Router()

// These all are my routes
router.get("/",(req,res)=>{
    res.send("kuch kuch tu huva hae boss")
    // res.sendFile("../index.html",{root:__dirname}) //root sepecify karna lazmi huta hae is ase m
})

router.put("/item/:id" ,(req,res)=>{
    res.send("Hello ji item arary haen")
})

router.delete('/item/:id',(req,res)=>{
    res.json({
        "message" : "chacha apka data delet kar dea h sojao"
    })
})

router.post("/item" ,(req,res)=>{
   res.send("Hello je swagat h post req ka")
})


module.exports = router