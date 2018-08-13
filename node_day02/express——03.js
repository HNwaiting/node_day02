const express=require("express");
var app=express();
var server=app.listen(3000,()=>{
  console.log("服务器启动中.....");
})
app.use(express.static(__dirname+"public"));
var count=0;
app.use("/user",(req,res,next)=>{
    count++;
    next();

})