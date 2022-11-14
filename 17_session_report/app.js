const express = require('express');
const session = require('express-session');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.use('/views', express.static(__dirname + '/views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session({
  secret: 'secretKey',
  resave: false,
  saveUninitialized: true,
  })
);

//(임시) DB에 저장되어있는 유저정보
const userInfo = { id: 'a', pw: '1'};


app.get('/', (req, res)=>{
  console.log('req.session.user >> ', req.session.user);
  //세션 설정 x -> undefined
  //세션 설정 o -> userInfo.id 값

const user = req.session.user;
  if (user !== undefined) {
    res.render('index', {isLogin:true, user: user});
  } else {
    res.render('index', {isLogin:false});
  }

  //세션 값이 있으면, index.ejs render {isLogin: true, user: req.session.user}
  //세션 값이 없으면, index.ejs render {isLogin: false}
});

// GET /login = render(login.ejs)
app.get('/login', (req, res)=>{
  res.render('login');
});

//POST /login = 로그인 정보 일치; 세션설정 / 불일치; 경로이동
app.post('/login', (req, res)=>{
  console.log(req.body); //{ id: '1', pw: '1' }
  console.log(req.body.id);

  //로그인 정보 일치시
  //- req.session.user 저장
  // - /redirect
  //로그인 정보 불일치시
  // - alert
  // -/ 경로로 이동

  if (req.body.id === userInfo.id && req.body.pw === userInfo.pw) {
//폼에 입력한 아이디 = DB에서 찾은 아이디 &&
//폼에 입력한 비번 = DB에서 찾은 비번
    req.session.user = req.body.id; //세션 설정
    res.redirect('/');
  } else {
    res.send(
      `<script>
        alert('로그인 실패!');
        document.location.href = '/';
      </script>`
      );
  };
});

//GET /logout
app.get('/logout', (req, res)=>{
  const user = req.session.user;
  console.log('GET /logout | req.session.user>> ', user);

  if(user !== undefined) {
    //req.session.destroy(콜백)
    //콜백 안에서 로그아웃 -> /리다이렉트
    req.session.destroy((err)=>{
      if(err) {
        throw err;
      }

      res.redirect('/');
    });
  } else {
    //유저가 브라우저에서 /logout 경로로 직접 접근하면
    //res.send()
    //alert('잘못된 경로입니다')
    // /경로로 이동
    res.send(
      `<script>
        alert('잘못된 접근입니다!');
        document.location.href = '/';
      </script>`
    )
  }
})


app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});


//req.session: '사용자별'로 해당 객체 안에 세션 정보가 들어있음

//세션쿠키 설정
//req.session.키 = 값

//세션쿠키 사용
//req.session.키

//세션삭제
//req.session.destroy(콜백함수)
// -콜백함수: 세션 삭제시 호출할 콜백함수를 의미함