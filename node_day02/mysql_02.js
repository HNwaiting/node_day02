const http=require("http");
const mysql=require("mysql");
const url=require("url");
const fs=require("fs");

var server=http.createServer();
server.listen(3000);
server.on("request",(req,res)=>{
    var pool=mysql.createPool({
      host:"127.0.0.1",
      user:"root",
      password:"",
      database:"xz",
      port:3306

    })
  var urlobj=url.parse(req.url,true);
    var path=urlobj.pathname;
    res.setHeader("content-Type","text/html;charset=utf-8");
  if("/login.html"==path){
     fs.readFile("./public/login.html",(err,data)=>{
        if(err) throw err;
        res.end(data);

     })

  }else if("/login.do"==path){
      var u=urlobj.query.uname;
      var s=urlobj.query.upwd;
      var sql="select uid from xz_user where uname=? and upwd=?";
      pool.query(sql,[u,s],(err,result)=>{

        if(err) throw err;
        var msg="";
        if(result.length==0){
          msg="用户名或者密码错误";

        }else{
          msg="登录成功";
        }
        res.end(msg);
        pool.end();
      })

  }else if('/userlist.do'==path){
      var sql="select uid,uname,upwd from xz_user";
      pool.query(sql,(err,result)=>{
          if(err) throw err;
          var html=`<table>
                      <thead><th>用户编号</th><th>用户名</th><th>用户密码</th></thead>
                    <tbody>`
                  for(var row of result){
                      html+=`<tr>`
                      html+=`<td>${row.uid}</td>`
                      html+=`<td>${row.uname}</td>`
                      html+=`<td>${row.upwd}</td>`
                      html+=`</tr>`
                  }
                  html+=`</tbody><table>`
                  res.end(html);
                  pool.end();
      })

  }else if("/register.html"==path) {
    fs.readFile("./public/refister.html", (err, data) => {

      if (err) throw err;
      res.end(data);
    })
  }else if("/register.do"==path){
    var uid=urlobj.query.uid;
    var uname=urlobj.query.uname;
    var upwd=urlobj.query.upwd;
    var  phone=urlobj.query.phone;
    var sql="insert into xz_user(uid,uname,upwd,phone) values(?,?,?,?)";
    pool.query(sql,[uid,uname,upwd,phone],(err,result)=>{
      if(err) throw err;
      var msg="";
      if(result.affectedRows>0){

        msg="添加成功";
      }else{

        msg="添加失败";
      }
      res.end(msg);
      pool.end();
    })


  }else{
      res.end("<b>您请求的网页未找到</b>")

  }

})