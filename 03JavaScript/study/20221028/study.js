// 1. setTimeout
// setTimeout(code, delay)
// : delay(ms)동안 기다리다가 code 함수를 실행

/*
console.log(1);
setTimeout(function () {
  console.log(2);
}, 2000);
console.log(3);
*/
// -> 1, 3, 2 순서로 뜬다.

//===============================================
// 2. 비동기 처리
// ex. 편의점에 들어가서 음료수를 사고 나오는 상황 가정
/*
function goMart() {
  console.log('마트에 가서 어떤 음료를 살지 고민한다.')
}

function pickDrink() {
  setTimeout(function () {
    console.log('고민 끝');
    product = '제로 콜라';
    price = 2000;
  }, 3000)
}

function pay(product, price) {
  console.log(`${product} 제품의 가격은 ${price}이다.`);
}

let product;
let price;
goMart();
pickDrink();
pay(product, price);
*/
//위처럼 쓰면 undefined 뜸. callback함수로 해결가능

// 3. callback 함수
// - 다른 함수의 실행이 끝난 뒤에 실행되는 함수
// js에서는 어떤 함수의 '매개변수' 쓰일 수 있음
// 위의 코드에서 undefined가 뜨지 않도록 해결해보자.
// 즉, 비동기 방식으로 작성된 코드를 '동기 처리'할 수 있도록
/*
function goMart() {
  console.log('마트에 가서 어떤 음료를 살지 고민한다.')
}

function pickDrink(callback) {
  setTimeout(function () {
    console.log('고민 끝');
    product = '제로 콜라';
    price = 2000;
    callback(product, price);
  }, 3000)
}

function pay(product, price) {
  console.log(`${product} 제품의 가격은 ${price}이다.`);
}

let product;
let price;
goMart();
pickDrink(pay);
*/


// 4. 콜백 지옥(callback Hell)
// : 콜백함수가 반복되어서 코드의 들여쓰기가 깊어짐
// -> 가독성과 유지보수성 하락
// red -> orange -> yellow -> green -> blue

// 1초 기다렸다가 body 배경색이 red로 변경되는 함수
//setTimeout(code, delay)
  
  setTimeout(function () {
    document.body.style.backgroundColor = 'red';
    setTimeout(function () {
      document.body.style.backgroundColor = 'orange';
      setTimeout(function () {
        document.body.style.backgroundColor = 'yellow';
        setTimeout(function () {
          document.body.style.backgroundColor = 'green';
          setTimeout(function(){
            document.body.style.backgroundColor = 'blue';
          }, 1000)
        }, 1000)
      }, 1000)
    }, 1000)
  }, 1000);