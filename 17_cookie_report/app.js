const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.use('/views', express.static(__dirname + '/views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser()); //req.cookies 가능해짐

const cookieConfig =  {
  //옵션 속성들
  httpOnly: true, //웹 서버를 통해서만 쿠키 접근 가능 (js에서=프론트에서 접근 불가능)
  maxAge: 10 * 1000, //1min: 유효 시간 (단위: 밀리초)
  //하루: 24 * 60 * 60 * 1000(영국 표준시)
}


app.get('/', (req, res) => {
  //popup: req.cookies.popup
  //쿠키 설정시; 'hide'
  //쿠키 미설정시; ''
  res.render('index', {popup: req.cookies.popup});
});

app.post('/setCookie', (req, res) => {
  //쿠키 '설정'
  res.cookie('popup', 'hide', cookieConfig);
  //응답
  res.send('쿠키 설정 성공')//응답을 보냄
})



app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});