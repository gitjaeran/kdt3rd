console.log('JS DOM - 요소 다루기');

//document 요소 다루기 (읽고 쓰기)

//1. HTML 요소 내용(content) 읽고(가져오기) 쓰기(바꾸기)
let div1 = document.getElementById('div1');
console.log(div1);


// innerHTML 속성
// : 요소 안의 "코드"를 가져오거나 수정
// => 입력된 문자열을 HTML 형식으로 가져옴
// 읽기: 요소.innerHTML
// 쓰기: 요소.innerHTML = 수정하려는 태그
console.log(div1.innerHTML); //읽기
div1.innerHTML = '여기는 <b>첫번째</b> 태그입니다. &hearts;'; //바꾸기


// innerText 속성
// : 요소 안의 "텍스트"를 가져오거나 수정
// => 입력된 문자열을 그대로! 태그로 인식X
// 읽기: 요소.innerText
// 쓰기: 요소.innerText = 수정하려는 내용
console.log(div1.innerText); //읽기
div1.innerText = '여기는 <b>첫번째</b> 태그입니다. &hearts;'; //쓰기
div1.innerText = '안녕하세요!' //쓰기


// textContent 속성
// : innerText와 마찬가지로 텍스트 정보를 표시
// IE9 이전 버전에서는 사용 불가능
console.log(div1.textContent); //읽기
div1.textContent = '안녕하세요 222';




//연습
let div2 = document.getElementById('div2');
console.log(div2);

console.log(div2.innerHTML);
div2.innerHTML = '여기는 <b>두번째</b> 태그입니다. &hearts;';
console.log(div2.innerText);
div2.innerText = '여기는 <b>두번째</b> 태그입니다. &hearts;';
div2.innerText = '안녕 이건 두번째 div야!'



//속성 접근
//요소.속성명
console.log(document.getElementById('beach'));
console.log(beach.id);
console.log(beach.src);
console.log(beach.width);
console.log(beach.alt);
//
let google = document.getElementById('google');
console.log(google);
console.log(google.href);
// getAttribute() : 속성값 가져오기
// setAttribute() : 속성값 설정하기
console.log(google.getAttribute('href'));
google.setAttribute('href', 'https://www.naver.com');
google.innerText = 'Naver';



//연습
//이미지 바꾸기, width 변경
console.log(beach.getAttribute('src'));
console.log(beach.getAttribute('id'));
console.log(beach.getAttribute('width'));
beach.setAttribute('width', '300');
beach.setAttribute('height', '200');
beach.setAttribute('src', './member_1.png');
beach.setAttribute('src', 'https://blog.kakaocdn.net/dn/Cabcw/btrrdmj0A58/1YkOil23N3sFbQsrY61qpK/img.jpg');


//=============================================
// 3. 스타일(CSS) 제어
// : JS로 CSS 설정 가능

let h1 = document.querySelector('h1');
console.log(h1);
console.log(h1.style);
//CSS에 접근하려면 CSS처럼 언더바(_)가 아니라 카멜케이스로 접근
console.log(h1.style.fontSize);

// 3-1. 인라인 스타일에 적용됨
h1.style.color = 'limegreen'; //색상 바꾸기
h1.style.backgroundColor = 'skyblue';
h1.style.border = '4px solid brown';
h1.style.textShadow = '2px 2px 10px #f005';

let lis = document.querySelectorAll('li');
console.log(lis);
//**반복문을 이용해서 여러 요소 스타일 한번에 설정 가능
// for (let i=0; i<lis.length; i++) {
//   console.log(lis[i]);

//   lis[i].style.color = 'rgb(0, 100, 200)';
//   lis[i].style.fontSize = '20px';
//   lis[i].style.backgroundColor  = '#ddd';
// }


//for ... of 반복문
//for (let 반복변수 of 배열) {}
const myList = ['a', 'b', 'c', 'd'];
for (let list of myList) {
  console.log(list);
}


//위에서 반복문을 통해 지정한 스타일을 for of로 지정해보기
// for (let li of lis) {
//   console.log(li);

//   lis[i].style.color = 'rgb(0, 100, 200)';
//   lis[i].style.fontSize = '20px';
//   lis[i].style.backgroundColor  = '#ddd';
// }



// 3-2. 클래스 제어 방식
// classList 속성
// - add(클래스명): 클래스 추가
// - remove(클래스명): 클래스 삭제
// - toggle(클래스명): 클래스 있으면 제거, 없으면 추가
// - contains(클래스명): 해당 클래스가 있는지 boolean 값으로 반환

console.log(h1);
console.log(h1.classList.add('h1'));
console.log(h1.classList);

//lis에 저장되어 있는 각각 li 요소에 접근해 .li 클래스 추가하기
//반복문 사용
console.log(lis);

// for (let li of lis) {
//   console.log(li);

//   li.style.color = 'rgb(0, 100, 200)';
//   li.style.fontSize = '20px';
//   li.style.backgroundColor  = '#ddd';
// }

for (let i=0; i<lis.length; i++) {
  lis[i].classList.add('li');
}


//remove
console.log(h1.classList); //삭제 전
h1.classList.remove('title');
console.log(h1.classList); //삭제 후
//toggle
h1.classList.toggle('happy'); //없어서 추가
h1.classList.toggle('happy'); //있어서 삭제
//contains
console.log(h1.classList.contains('header-color')); //true
console.log(h1.classList.contains('lucky')); //false




//========================
console.log(document.querySelector('li')); //제일 처음으로 찾은 li태그
//계층 이동

//**부모, 자식, 형제 찾기
const apple = document.querySelector('li');
const fruits = document.querySelector('ul');
console.log(apple); //사과
console.log(fruits); //ul태그

//1. apple의 '부모' 노드 찾아보기
//직속 부모는 하나
console.log(apple.parentElement); //부모: ul태그 #fruits
console.log(apple.parentElement.parentElement); //부모: #fruits의 부모인 body태그

//2. fruits의 '자식' 노드 찾아보기
//자식 요소는 여러개 나올 수 있다.
console.log(fruits.children); //ul태그의 자식인 li*4
console.log(fruits.children[0]); //첫 번째 자식요소 배열로 접근
console.log(fruits.children[1]); //두 번째 자식요소 배열로 접근
//부모 -> 자식 -> 부모
console.log(fruits.children[0].parentElement);

//3. '형제' 노드 찾아보기
const lists = document.querySelectorAll('li');
console.log(lists); //li 4개를 배열로 전부 가져옴

const listOrange = lists[2]; //세 번째 배열인 오렌지 할당
// const listOrange = document.querySelectorAll[2]; //위와 같은 코드
console.log(listOrange); //오렌지

console.log(listOrange.previousElementSibling); //키위
console.log(listOrange.nextElementSibling); //수박


//=======================
console.log('연습---------------');
const num = document.querySelector('ol');
console.log(num);
console.log(num.children[0]); //one
console.log(num.children[1]); //two
console.log(num.children[2]); //three
console.log(num.children[3]); //.numbers-3 (1~3 three-one ~ three=three)
console.log(num.children[4]); //four


const numLists = document.querySelectorAll('.numbers > li');
console.log(numLists); //numbers 클래스 안에 있는 li 4개
console.log(numLists[0]); //one
console.log(numLists[0].parentElement); //numbers
console.log(numLists[0].nextElementSibling); //two
console.log(numLists[0].previousElementSibling); //null


//??? numbers-3 li 불러오는 방법 ???
const num3List = document.querySelectorAll('.numbers-3');



