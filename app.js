var express = require("express");

var app = express();

app.get("/", function(req, res) {
  res.send("Get 리퀘스트를 보냈군요!!! 오빠 존멋");
});

app.post("/", function(req, res) {
  res.send("Post 리퀘스트를 보냈군요!!! 도커 돌아가요?");
});

app.put("/", function(req, res) {
  res.send("Put 리퀘스트를 보냈군요!!!! 깃액션 돌고 있나요?");
});

app.delete("/", function(req, res) {
  res.send("Delete 리퀘스트를 보냈군요!!! 깃액션 푸쉬중임??");
});

app.listen(3000, function () {
  console.log("앱이 시작됩니다. 3000번포트로요~!!!")
})