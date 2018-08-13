const mysql=require("mysql");
const http=require("http");

var server=http.createServer();
server.listen(3000);
console.log("服务器启动成功");
server.on("request",(req,res)=>{
  var conn=mysql.createConnection({
    host:"127.0.0.1",
    password:"",
    database:"xz",
    user:"root",
    port:3306

  })
  var sql="insert into xz_laptop_family(fid,fname) values(11,'戴尔400') ";
  conn.query(sql,(err,result)=>{

    console.log(result);
    conn.end();
    res.end();
  })




})

