//form id를 변수 todoForm에 할당
const todoForm = document.querySelector('#todo-form');
//input에 사용자가 content를 입력하면 ul에 li가 추가되므로 변수 ul에 ul태그 클래스인 .todos 할당
const ul = document.querySelector('.todos');

//폼을 제츨했을때 실행할 이벤트 함수
todoForm.addEventListener('submit', function(e) {
  //새로고침 방지
  e.preventDefault();

  //input value = 'input[name="todo"]'
  const todoInput = document.querySelector('input[name="todo"]');
  let todo = todoInput.value;

  //새로 만들어질 li태그를 위해 변수 newTodo 생성 및 li 할당
  const newTodo = document.createElement('li');
  newTodo.textContent = todo;
  ul.append(newTodo);

  //li가 create되고 input창 초기화
  todoInput.value = '';
})