const express = require("express");
const fs = require("fs");

const app = express();

app.get("/", (req, res) => {
  fs.readFile("index.html", (error, data) => {
    if (error) {
      res.status(500).send("Internal Server Error");
    } else {
      res.setHeader("Content-Type", "text/html");
      res.send(data);
    }
  });
});
app.use(express.urlencoded({ extended: true }));

app.post("/submit", (req, res) => {
  const inputData = req.body; // POST 요청의 데이터는 req.body에 저장됨
  console.log("POST 요청 데이터:", inputData);
  res.send("POST 요청이 성공적으로 처리되었습니다.");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`서버가 포트 ${PORT}에서 실행 중입니다.`);
});
