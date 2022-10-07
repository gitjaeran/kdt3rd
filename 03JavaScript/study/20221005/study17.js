console.log('JS Event - Form');


//이벤트 객체
// event
//이벤트가 발생하면 브라우저는 발생한 이벤트에 대한 정보를 담은 이벤트 객체(오브젝트)를 이벤트 리스너에게 전달
const clickMe = document.querySelector('#clickme');
clickMe.addEventListener('click', function(event){
  console.log(event);
  //event: 이벤트 객체에 대한 정보를 담고 있음
})


const todoForm = document.querySelector('#todo-form');
const ul = document.querySelector('.todos');
todoForm.addEventListener('submit', function(e){
  //preventDefault(): 브라우저에서 구현된 기본 동작 취소
  //폼 이벤트: 폼이 제출되면 새로고침되는 기본동작을 취소
  //=폼을 제출하더라도 새로고침하지 않을 수 있음
  e.preventDefault();
  //form의 submit 이벤트는 제출되는 것이 기본 동작임
  //제출: 새로고침
  // console.log('Add 버튼 클릭');

  const todoInput = document.querySelector('input[name="todo"]');
  console.log(todoInput);
  console.dir(todoInput); //객체를 트리구조로 보여주는 명령어
  console.dir(todoInput.value); //내용물

  let todo = todoInput.value; //사용자가 input에 입력한 값

  //li태그를 만들어서, li 태그의 content로 input.value 값이 담기도록 코드 작성
  const newTodo = document.createElement('li'); //<li></li>
  newTodo.textContent = todo;//li 사용자가 입력한 input값
  ul.append(newTodo); //ul li 사용자가 입력한 input값

  //input 내용 초기화
  todoInput.value = '';//input의 content를 초기화
})


//=============================input
const chgInput = document.querySelector('#change-input');

chgInput.addEventListener('input', function(){
//input: 입력창에 변경이 일어나는 순간을 계속 감지함
//미리보기에서 사용 가능 ex. textarea
  const div = document.querySelector('.intro');
  div.textContent = chgInput.value;
})


//연습
// const textArea = document.querySelector('#textarea');
// textArea.addEventListener('input', function(){
//   textArea.textContent = textArea.value;
// })

//====================================키보드 이벤트

const keyInput = document.querySelector('#key-input');
keyInput.addEventListener('keydown', function(event) {
  // console.log(event); //function에 event를 넣고 콘솔을 찍으면 보임
  // console.log(event.code);

  if (event.code === 'ArrowUp'){
    console.log('UP')
  } else if (event.code === 'ArrowRight'){
    console.log('RIGHT')
  } else if (event.code === 'ArrowLeft'){
    console.log('LEFT')
  } else if (event.code === 'ArrowDown'){
    console.log('DOWN')
  } else {
    console.log('Others');
  }
})

//연습
// const textInput2 = document.querySelector('#text2');
// textInput2.addEventListener('keydown', function(event){
// if(event.code === 'h'){
//   console.log('h')
// } else if(event.code === 'e'){
//   console.log('e')
// } else if(event.code === 'l'){
//   console.log('l')
// } else if(event.code === 'o'){
//   console.log('0')
// } else if(event.code === 'w'){
//   console.log('w')
// } else {
//   console.log('others')
// }
// })