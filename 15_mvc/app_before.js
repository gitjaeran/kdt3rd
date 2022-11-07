const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.use('/views', express.static(__dirname + '/views'));
app.use('/static', express.static(__dirname + '/static'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



//(임시) DB로부터 댓글 목록을 받아왔다고 가정함
// 배열: 전체 댓글 / 각 객체: 댓글 하나
const comments = [{
  id: 1,
  userid: 'helloworld',
  date: '2022-10-31',
  comment: '안녕하세요!'
}, 
{
  id: 2,
  userid: 'happy',
  date: '2022-11-01',
  comment: '반가워용!'
}, 
{
  id: 3,
  userid: 'lucky',
  date: '2022-11-06',
  comment: '메롱!'
}, 
{
  id: 4,
  userid: 'penguin',
  date: '2022-11-07',
  comment: '귀여운 펭귄펭귄'
}]

// GET / : [댓글 목록 보기] 이동 링크 걸려있음 ->a tag link
app.get('/', (req, res) => {
  res.render('index');
});

// GET /comments : 댓글 전체 목록 확인 가능
app.get('/comments', (req, res) => {
  console.log(comments); //댓글목록 확인용
  //commentsInfos는 위에서 선언했던 const comments 배열임
  res.render('comments', {commentsInfos: comments});
})

// GET /comment/:id : 각 댓글을 자세히 볼 수 있음
app.get('/comment/:id', (req, res) => {
  console.log(req.params); //라우드 매개변수(:id)에 대한 정보는 params에 저장되어있음
  console.log(req.params.id); //id 값 추출가능


  const commentId = req.params.id; //댓글 id: url로 들어온 매개변수
  // comments = [{}, {}, {}, {}]
  console.log(comments[commentId -1]); //댓글 목록에서 특정 댓글 정보 추출
  // -1을 넣는 이유: 배열은 0부터 시작하기 때문에.

  //1. :id는 존재하지 않는 댓글 id는 안 됨(0, 음수, 댓글 배열 길이보다 큰 값). 그래서 아래처럼 띄워줌
  if (commentId < 1 || commentId > comments.length) {
    return res.render('404');
  }

  //2. :id는 숫자가 아닌 것이 들어오면 안 됨
  if (isNaN(commentId)) {
    return res.render('404');
  }


  res.render('comment', {commentInfo: comments[commentId -1] });
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});


// [404 Error]
// 맨 마지막 라우트로 선언할것!
// 그렇지 않으면 나머지 코드 무시됨
// *all
app.get('*', (req, res) => {
  res.render('404');
});


// 함수 선언
// 1) 명시적 함수 선언
// function func_name() { ... }
// 2) 함수 표현식
// const var_name = function () { ... }

// 2 변형) 화살표 함수
// : 함수 표현식을 더 단순하게 작성해보자!
// const f = () => { ... }