const express = require('express')

const app = express()
const port = 8080

// 네이버 스마트스토어 인증번호
let smartstore = "000000"

app.use(express.static(__dirname + '/'));
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
  /*res.send(`안녕하세요. 날씨네 입니다.
  지금은 홈페이지를 준비하는 중이니 잠시만 기다려주세요.
  <a href="/ncube/calc>냥큐브 판 수 계산기</a>"`);*/
});

app.get('/ncube/calc', (req, res) => {
  res.sendFile(__dirname + '/ncube/calc/index.html');
});

app.get('/naver', (req, res) => {
  res.send(smartstore);
});

app.get('/naver/:num', (req, res) => {
  smartstore = req.params.num
  res.status(200).end()
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
