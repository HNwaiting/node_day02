const http=require("http");
const express=require("express");

const routerLogin=require("./router/login");


let app=express();
let server=http.createServer(app);
server.listen(3000);
console.log("服务器启动成功");
//使用路由中间件
app.use('/login',routerLogin);
