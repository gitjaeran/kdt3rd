const { render } = require('ejs');
const express = require('express');
const app = express();
const PORT = 8000;

//views 설정
app.set('view engine', 'ejs');
// Middleware(미들웨어) 설정
// : 요청(req)과 응답(res)의 중간에서 작업
app.use('/views', express.static(__dirname + '/views'));
app.use(express.urlencoded({extended: true}));
app.use(express.json()); //json 형태로 데이터를 전달받음

// Routing - 경로 설정
// -req(request): 요청(클라이언트 -> 서버)
// -res(responsive): 응답(서버 -> 클라이언트)
app.get('/', function (req, res){ // GET /(http://loclhost:PORT)
  res.render('index.ejs', {title: 'Form 전송을 배워보자', desc: '여기는 설명'}); //views/index.ejs 파일을 찾아서 클라이언트에게 '응답'
});




// index.ejs 12줄 input 요청
app.get('/getForm', function(req, res){
  //get 요청은 req.query 객체에 폼 정보가 전달
  console.log(req.query);
  // res.send('get 요청 응답 성공!!');
  res.render('result', {title: 'GET 요청 성공', userInfo: req.query})
})

// index.ejs 20줄 input 요청
app.post('/postForm', function(req, res){
  //post 요청은 req.body 객체에 폼 정보가 전달
  console.log(req.body);
  // res.send('post 요청 응답 성공');
  res.render('result', {title: 'POST 요청 성공', userInfo: req.body})
})



app.listen(PORT, function() {
  console.log(`http://localhost:${PORT}`)
});


// app.get('/getForm', function(req, res){
//   res.send('result')
// })