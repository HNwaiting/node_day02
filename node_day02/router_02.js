const express=require("express");
const mysql=require("mysql");
var app=express();
var server=app.listen(3000,()=>{
  console.log("服务器启动中....")
})
var pool=mysql.createPool({
  host:"127.0.0.1",
  user:"root",
  password:"",
  database:"xz",
  port:3306

})
app.get("/user/:uid/:uname",(req,res)=>{
    console.log(req.params);
    res.end();
})