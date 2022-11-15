const express = require('express');
const { Socket } = require('socket.io');
const app = express();
const PORT = 8000;
const http = require('http').Server(app); //socket은 express가 아닌 http 모듈에 연결해야 사용 가능함
const io = require('socket.io')(http); // http와 socket연결


app.set('view engine', 'ejs');
app.use('/views', express.static(__dirname + '/views'));

app.get('/', (req, res)=>{
  res.render('chat');
});




//io.on 메서드
//: socket과 관련된 통신작업을 처리리
io.on('connection', (socket)=>{
  //'connection' event
  //: 클라이언트가 접속했을때 발생하는 이벤트. 콜백으로 socket 객체를 제공함

  console.log('**SERVER SOCKET CONNECTED = ', socket.id);
  //socket.id: 소켓 고유 아이디 -> socket은 웹 "페이지별"로 생김!


  //[실습42]
  // 클라이언트에서 emit으로 보낸 내용을 백에서 on으로 확인하기
  socket.on('hello', (data) =>{
    console.log('socket on hello >> ', data);
    console.log(`${data.who} : ${data.msg}`);
    //서버로 받은 메시지를 서버에서 emit으로 클라이언트에 보냄
    socket.emit('helloKr', { who: 'hello', msg: '안녕!'});
  })
})

//[study ver]
io.on('connection', (socket)=>{
  socket.on('study', (data)=>{
    console.log(`${data.who} : ${data.msg}`);

    socket.emit('studyKr', { who: 'study', msg: '같이 공부해요!'});
  })
})


//[bye ver]
io.on('connection', (socket)=>{
  socket.on('bye', (data)=>{
    console.log(`${data.who} : ${data.msg}`);

    socket.emit('byeKr', { who: 'bye', msg: '잘가!'});
  })
})


//[실습44]
// io.on('connection', (socket) =>{
//   io.emit('notice', `${socket.id.slice(0,5)}님이 입장하셨습니다!`)
// })


//[실습44-2]
const nickArray = {}; //유저목록
io.on('connection', (socket)=>{
  socket.on ('setNick', (nick) =>{
    console.log(nick)

  // nickArray: {socketId1: nick1, socketId2: nick2, ..}
  // ->Object.values(): [nick1, nick2, nick3 ...]
  // -> [ nick1, nick2, ...]
  // -> indexOf(): nick이 존재하는지

  if (Object.values(nickArray).indexOf(nick) > -1) {
  //닉네임 중복이 있다면
  //'error' 이름의 이벤트를 전달 emit ('닉네임이 중복되었습니다!')
    socket.emit('error', '이미 존재하는 닉네임입니다.')
  } else {
  //닉네임 중복이 없다면
    nickArray[socket.id] = nick;
    console.log('유저 접속 목록 >> ', nickArray);

    io.emit('notice', `${nick}님이 입장하셨습니다!`)

    socket.emit('entrySuccess', nick);
  }

  })

  //[실습 44-3] 접속자 퇴장시 'notice' 이벤트로 퇴장 공지
  socket.on('disconnect',()=>{
    // 1. socket.id 콘솔로그 찍어보기
    console.log('❌ disconnect >> ', socket.id);

    // 2. 전체공지 ('notice', 퇴장메시지(유저닉네임 포함))
    io.emit('notice', `${nickArray[socket.id]}님이 퇴장하셨습니다.`)

    // 3. nickArray에서 해당 유저 삭제 (객체에서 key-value 쌍 삭제)

    // delete 연산자 활용
  })

  //[실습45] step1
  socket.on('send', (data) => {
    console.log('send >> ', data);

    // [실습45] step2
    const sendData = { nick: data.myNick, msg: data.msg}
    io.emit('newMessage', sendData);
  })
})


//****socket을 사용하기 위해 app이 아니라 http로 바뀜 주의****
http.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});