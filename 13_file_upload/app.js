const express = require('express');
const app = express();
const PORT = 8000;

// multer 설정
const multer = require('multer');
const upload = multer({
  dest: '/uploads',
});


app.set('view engine', 'ejs');
app.use('/views', express.static(__dirname + '/views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routing (경로 설정)
app.get('/', function (req, res) {
  res.render('index', { title: 'file upload를 배워보자' });
});


// 1. single(): 하나의 파일 업로드할 때
// single()의 인자로 input 태그의 name값을 넣어준다
// single() -> req.file 객체에 파일 정보
app.post('/upload', upload.single('userfile'), function(req, res){
  console.log(req.file); //파일 업로드 성공 결과(파일첨부)
  //fieldname: 폼에 정의된 name
  //originalname: 원본 파일명
  //encoding: 파일 엔코딩 설정
  //mimetype: 파일 타입
  //destination: 파일을 저장할 경로(폴더)
  //path: 업로드된 파일 전체 경로
  //filename: destination에 저장된 파일명

  // mimetype: 'image/jpeg',
  // destination: '/uploads',
  // filename: 'b3db3b9a3cc1ab6eadf7dbf8fd550b58',        
  // path: '\\uploads\\b3db3b9a3cc1ab6eadf7dbf8fd550b58', 
  // size: 42367

  console.log(req.body); //title 데이터 정보 확인 가능

  res.send('Uploads!');
});



app.listen(PORT, function (req, res) {
  console.log(`http://localhost:${PORT}`);
});