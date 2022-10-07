console.log('JS 심화; DOM - 요소 객체 가져오기');

//document 객체
//속성

console.log(document.documentElement); //html 태그 반환
console.log(document.head); //head 태그 반환
console.log(document.body); //body 태그 반환
console.log(document.URL); //웹페이지 url (https ~ 끝)
console.log(document.domain); //웹페이지 url에서 도메인만 반환 (url > domain)


//html 요소 선택 방법
// = dom 요소 선택하기 (DOM API)

//      노드 객체 가져오기
//1. getElementById('아이디명')
//아이디는 유일하므로 속도가 가장 빠르다
//따라서 Elements가 아닌 Element
console.log(document.getElementById('first'));
console.log(document.getElementById('second'));

//2. getElementsByClassName('클래스명')
//클래스는 여러개이기 때문에 Elements
//대괄호로 호출하는 것을 알 수 있다.(배열)
console.log(document.getElementsByClassName('korean'));
console.log(document.getElementsByClassName('bunsik'));
//배열로 호출되기 때문에 인덱스 접근이 가능하다
console.log(document.getElementsByClassName('korean')[0]);

//3. getElementsByTagName('태그명')
console.log(document.getElementsByTagName('h1'));
console.log(document.getElementsByTagName('h2'));
console.log(document.getElementsByTagName('li'));
console.log(document.getElementsByTagName('li')[2]);




console.log('============================');
//CSS 선택자를 이용해 노드 객체 가져오기
//4. queryselector

//*querySelector('.선택')
//같은 클래스 중 첫 번째
console.log(document.querySelector('.korean'));
//korean 클래스는 두 개이나, 일치하는 첫 번째 코드만 가지고 온다.
console.log(document.querySelector('.bunsik'));

console.log(document.querySelector('input[name=userId'));



//5. querySelectorAll('.선택')
//선택하고자 하는 클래스 전부
console.log(document.querySelectorAll('.korean'));
//배열이기 때문에 인덱스 가능
console.log(document.querySelectorAll('.korean')[0]);
//클래스 안에서 아이디 선택하여 호출 가능
console.log(document.querySelectorAll('.lunch-list #third'));




//6. getElementsByName(name 속성값)
console.log(document.getElementsByName('userId'));
console.log(document.getElementsByName('userId')[0]);
console.log(document.getElementsByName('userId')[0].value);