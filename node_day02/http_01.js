const http=require("http");
var server=http.createServer();
server.listen(3000);
console.log("服务器启动成功");
server.on("request",(req,res)=>{
  console.log(req.url);
  res.end("ok");
})