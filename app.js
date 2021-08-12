var express = require("express");

var app = express();

app.get("/", function(req, res) {
  res.send("Get 리퀘스트를 보냈군요!!!");
});

app.post("/", function(req, res) {
  res.send("Post 리퀘스트를 보냈군요!!!");
});

app.put("/", function(req, res) {
  res.send("Put 리퀘스트를 보냈군요!!!");
});

app.delete("/", function(req, res) {
  res.send("Delete 리퀘스트를 보냈군요!!!");
});

app.listen(3000, function () {
  console.log("앱이 시작됩니다. 3000번포트로요~!!!")
})