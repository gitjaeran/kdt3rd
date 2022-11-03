const express = require('express');
const app = express();
const PORT = 8000;

// multer 설정
const multer = require('multer');
const path = require('path');
const uploadDeatil = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      // req: 요청에 대한 정보
      // file: 파일에 대한 정보
      // done(에러, 저장경로): 함수
      done(null, 'uploads/'); // 경로설정
    },
    filename(req, file, done) {
      // req: 요청에 대한 정보
      // file: 파일에 대한 정보
      // done: 함수
      const ext = path.extname(file.originalname); // file.originalname에서 "확장자" 추출

      // test
      console.log(file.originalname); // peach.jpg
      console.log(ext); // .jpg
      console.log(path.basename(file.originalname, ext)); // path.basename('peach.jpg', '.jpg') => 'peach'

      done(null, path.basename(file.originalname, ext) + Date.now() + ext); // peach + 123123123123 + .jpg

      // [파일명+현재시간.확장자] 이름으로 바꿔서 파일 업로드
      // 현재시간: 파일명이 겹치는 것을 막기 위함
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 },
});

app.set('view engine', 'ejs');
app.use('/views', express.static(__dirname + '/views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/uploads', express.static(__dirname + '/uploads')); // upload 폴더 접근 가능하게끔

app.get('/', function (req, res) {
  res.render('index', { title: '파일 업로드 실습31 ' });
});

app.post('/result', uploadDeatil.single('profile'), function (req, res) {
  console.log(req.file);
  console.log(req.body);

  res.render('result', { userInfo: req.body, imgSrc: req.file.path });
});

app.listen(PORT, function (req, res) {
  console.log(`http://localhost:${PORT}`);
});
