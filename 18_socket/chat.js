const express = require('express');
const { send } = require('process');
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
console.log('nickArray >> ', nickArray);

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

    updateList(); // 입장 성공 후 유저목록 업데이트
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
    delete nickArray[socket.id];


    updateList(); //유저 퇴장 후 유저목록 업데이트
  })



  //[실습45] step1
  socket.on('send', (data) => {
    console.log('send >> ', data);
    // {myNick: 'a', dm: 'all | 특정닉네임', msg: 'cc'}

    if (data.dm !== 'all') { //data.dm = 특정 유저의 socket.id
      // dm 전송
      let dmSocketId = data.dm;
      const sendData = { nick: data.myNick, msg: data.msg, dm: '(속닥속닥) '}

      io.to(dmSocketId).emit('newMessage', sendData); //특정 소켓아이디에게만 메시지 전송

      // [미션] 자신에게 dm보내면 메시지가 두 번 가는 버그 해결하기
      // if (dmSocketId가 본인의 id와 동일하면?) { 
      // dm을 보내지 않음
      // } else {
      // dm을 보냄
      // }

      if (Object.values(nickArray).indexOf(dmSocketId) != -1) { 
        socket.emit('newMessage', sendData);
      } else {
        return false
      }

      // socket.emit('newMessage', sendData); //자기 자신에게도 DM 메시지 전송

    } else {
      // 전체 메시지 전송 
      // [실습45] step2
      const sendData = { nick: data.myNick, msg: data.msg}
      io.emit('newMessage', sendData);
    }


  })
})



// [실습46] DM 기능 구현
// 유저 목록 업데이트 (유저입장, 퇴장시 업데이트)
function updateList() {
  io.emit('updateNicks', nickArray);
}


//****socket을 사용하기 위해 app이 아니라 http로 바뀜 주의****
http.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});