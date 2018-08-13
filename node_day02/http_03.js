const http=require("http");
const url=require("url");
const fs=require("fs");

var server=http.createServer();
server.listen(3000);
server.on("request",(req,res)=>{
    var urlobj=url.parse(req.url,true);
    var path=urlobj.pathname;
    console.log(path);
    res.setHeader("Content-Type","text/html;charset=utf-8");
    if("/refister.html"==path){
      fs.readFile("./public/refister.html",(err,data)=>{
        if(err) throw err;
        res.end(data);

      })
    }else if("/register.do"==path){
        var uname=urlobj.query.uname;
        var upwd=urlobj.query.upwd;
        var uid=urlobj.query.uid;
        var age=urlobj.query.age;
        var data=uname+"_"+upwd+"\r\n";
        fs.appendFile("./public/user.do",data,(err)=>{
            if(err) throw err;
            res.end("<b>注册成功</b>");

        })

    }else{

      res.end("<b>注册失败</b>")
    }

})