const express = require('express')

const app = express()
const port = 8080

// 네이버 스마트스토어 인증번호 저장용
let smartstore = "000000"

app.use(express.static(__dirname + '/'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');  
});

// 판수 계산기
app.get('/ncube/calc', (req, res) => {
  res.sendFile(__dirname + '/ncube/calc/index.html');
});

// 스마트스토어 인증번호 출력
app.get('/naver', (req, res) => {
  res.send(smartstore);
});

// 스마트스토어 인증번호 입력
app.get('/naver/:num', (req, res) => {
  smartstore = req.params.num
  res.status(200).end()
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
