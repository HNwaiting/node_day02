const express=require("express");
const pool=require("../pool.js");


let router=express.Router();

router.get('/login',(req,res)=>{
    res.end("ok");
    pool.end();
})

module.exports=router;