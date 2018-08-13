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
app.get('/home',(req,res)=>{

  res.send("this is home page");
})
app.get('/',(req,res)=>{

  res.redirect("/home");
})
app.get('/userlist',(req,res)=>{
  var sql="select * from xz_user";
  pool.query(sql,(err,result)=>{
    res.json(result);
    pool.end();
  })
})