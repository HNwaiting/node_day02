const http = require("http");
const express = require("express");
var app = express();
http.createServer(app).listen(3000);
console.log("服务器启动成功");
console.log(__dirname);
app.get('/index.html', (req, res) => {
    res.sendFile(__dirname + "/public/login.html");

})