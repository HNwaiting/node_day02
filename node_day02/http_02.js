const http=require("http");
const fs=require("fs");
const url=require("url");

var server=http.createServer();
server.listen(3000);
server.on("request",(req,res)=>{
  var urlobj=url.parse(req.url,true);
 var path=urlobj.pathname;
  if('/index.html'==path){

    fs.readFile('./public/index.html',(err,data)=>{
      if(err) throw err;
      res.end(data);

    })
  }else{
    fs.readFile('./public/404.html',(err,data)=>{
      if(err) throw err;
      res.end(data);

    })

  }

})