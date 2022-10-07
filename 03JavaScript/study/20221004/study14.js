console.log('JS DOM 이벤트')

console.log('!');

function addNode() {
	// alert('버튼을 클릭하셨군요!');
	let div = document.getElementById('div1');
	// 요소 생성하기
	// createElement()
	let p = document.createElement('p'); // p 태그 생성 // <p></p>
	p.innerText = '버튼을 눌러 만들어진 p 태그'; // <p>버튼을 눌러 만들어진 p 태그</p>
	p.style.fontWeight = '700';
	p.classList.add('append-p');
	
	// div.appendChild(p);
	// div.append('1번 추가')
	// div.append(p, '2번 추가');
	div.append(p);
}

function removeNode() {
	// alert('삭제 버튼 클릭!');
	let div = document.querySelector('#div1');
	let p = document.querySelector('#div1 > p');

	// div.removeChild(p);
  p.remove();
}

// 노드 생성/추가/삭제
// 1. 노드 생성
// createElement()

// 2. 노드 추가
// appendChild(): 노드 객체만 추가, 한 번에 한 개
// append(): 노드 객체 or 텍스트 추가, 한 번에 여러 개 가능

// 3. 노드 삭제
// - removeChild()
// 부모 노드.removeChild(자식 노드): 부모 요소의 자식 노드를 삭제
// - remove()
// 노드.remove(): "선택한 요소"를 삭제

//===========================================
let ul = document.querySelector('ul');
let li = document.createElement('li');
li.innerText = '오렌지';

ul.append(li);

//==============================================
// let container = document.querySelector('.container');
// let img = document.createElement('img');
// img.setAttribute('src', './member_1.png');
// img.setAttribute('alt', '포비');
// let title = document.createElement('div');
// title.innerText = '포비입니다.';

// container.append(img);
// container.append(title);


//연습
let box = document.querySelector('.box');
let img = document.createElement('img');
img.setAttribute('src', './beach1.jpg');
let title = document.createElement('div');
title.innerText = '바다입니다.';

img.style.width = '250px'

box.append(img);
box.append(title);
