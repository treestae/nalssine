const express = require('express')
//const compression = require('compression');
const app = express()
const port = 8080

//app.use(compression());
app.use(express.static(__dirname + '/'));
app.get('/', (req, res) => {
  res.send(`안녕하세요. 날씨네 입니다.
  지금은 홈페이지를 준비하는 중이니 잠시만 기다려주세요.
  <a href="/ncube/calc>냥큐브 판 수 계산기</a>"`);
});

app.get('/ncube/calc', (req, res) => {
  res.sendFile(__dirname + '/ncube/calc/index.html');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
