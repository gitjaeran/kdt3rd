console.log('JS event');

//이벤트(Event)
//: 사용자들의 행동에 반응하는 작업
//ex. 클릭, 더블클릭, 폼 제출 등...



//이벤트 리스너(Event Listener)
//: 이벤트가 발생했을 때 실행할 함수

//1. 인라인 방식
// -> html 태그 안에서 작성함
// 또는 html에서 showAlert 작성 후 아래 함수 작성
/*
 function showAlert() {
  alert('버튼 1을 클릭!');
 } 
 */

//2. onXX 속성 방식
let btn2 = document.querySelector('#btn2'); //id를 가져와야 하니 # 붙힌것
btn2.onclick = function() {
  alert('버튼2 클릭@@');
}

//3. addEventListener() 방식
//btn3.addEventListener('type', listener);
// ㄴ type: 이벤트 종류(클릭, 더블 클릭 ...)
// ㄴ listener: 이벤트 발생시 처리할 함수

let btn3 = document.querySelector('#btn3');
btn3.addEventListener('click', function() {
  alert('버튼3 클릭@@@@@!!!!');
});


//연습==============================
// let span2 = document.querySelector('#span2');
// span2.onclick = function() {
//   alert('span2 클릭');
// }

// let span3 = document.querySelector('#span3');
// span3.addEventListener('mouseover', function(){
//   span3.style.backgroundColor = 'beige';
//   span3.style.color = 'red';
//   span3.style.border = '2px solid black';
// })

// span3.addEventListener('click', function(){
//   alert('span3 클릭');
//   span3.style.backgroundColor = 'black';
//   span3.style.color = 'white';
// })


//mouseover 이벤트
// function mouseoverspan1() {
//   let span1 = document.querySelector('#span1');
//   span1.style.color = 'blue';
// }

// let span2 = document.querySelector('#span2');
// span2.onmouseover = function(){
// span2.style.backgroundColor = 'black';
// }


//dblclick 이벤트
// let span2 = document.querySelector('#span2');
// span2.ondblclick = function(){
//   span2.style.backgroundColor = 'black';
// }



//같은 작업을 여러개 할때, 함수로 정의해주고 listener 자리에 함수 이름을 넣어줄 수 있다.
/*
function showAlert2() {
  alert('더블 클릭');
}
span3.addEventListener('click', showAlert2);
div3.addEventListener('click', showAlert2);
span4.addEventListener('click', showAlert2);
span5.addEventListener('click', showAlert2);
*/