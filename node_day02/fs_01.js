
const fs=require("fs");
//console.log("1");
/*var filename="./public/row.log"

fs.readFile(filename,(err,data)=>{
  if(err) throw err;
  console.log("2");
  console.log(data.toString())
})
console.log("3");*/

var filename="./public/col.log";
var data=new Date().toString();
console.log("1")
/*fs.writeFile(filename,data,(err)=>{
    if(err) throw err;
    console.log("2")

*/
fs.appendFile(filename,data,(err)=>{
  if(err) throw err;
   console.log("写入完成");
})

console.log("3");
