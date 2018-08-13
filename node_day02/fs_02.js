const fs=require("fs");
var src="./public/two.html";
var filename="./public/first.html";
fs.readFile(filename,(err,data)=>{
    if(err) throw err;
    fs.writeFile(src,data,(err)=>{

      if(err) throw err;
      console.log("文件复制结束");
    })


})