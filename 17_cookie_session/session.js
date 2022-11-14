const express = require('express');
const session = require('express-session');
const app = express();
const PORT = 8000;

//session({세션모듈_옵션})
// *필수 -secret: 세션 발급시 사용되는 키
// -resave: 매 요청마다 세션을 다시 저장할 것인지
// -saveUninitialized: 초기값이 지정되지 않은 상태에서도 처음부터 세션을 생성할지
// -secure: true 설정시 https에서만 세션을 주고받음
// -name: 세션 쿠키명 (connect.sid - 기본이름. 바꿀수있음)
app.use(session({
  secret: 'secretKey',
  resave: false,
  saveUninitialized: true,
  })
);

//req.session: '사용자별'로 해당 객체 안에 세션 정보가 들어있음

//세션쿠키 설정
//req.session.키 = 값

//세션쿠키 사용
//req.session.키

//세션삭제
//req.session.destroy(콜백함수)
// -콜백함수: 세션 삭제시 호출할 콜백함수를 의미함

app.get('/', (req, res)=>{
  //세션 설정
  req.session.name = '홍길동';

  //응답보냄
  res.send('세션 설정 완료');
});

app.get('/name', (req, res) => {
  res.send(req.session.name);
});

// app.get('/sid', (req, res) => {
//   res.send(req.sessionID);
// });

app.get('/destroy', (req, res)=>{
  req.session.destroy((err)=>{
    if(err){
      throw err;
    }

    // 1. GET / : name 세션 설정
    // 2. GET /name: name 값 확인
    // 3. GET /destroy: 세션 삭제
    // 4. GET /name: name 확인 불가능
    res.send('세션 삭제 완료');
    // res.redirect('/'); ->홈으로 돌아감
  });
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});