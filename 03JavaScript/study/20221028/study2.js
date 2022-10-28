// #1 프로미스 (Promise)
// - 비동기 함수를 동기처리 하기 위해 만든 객체
// - 성공, 실패를 분리해서 반환
//  성공이든 실패든 무언가의 "최종 결과"
//  - fulfilled (resolve): 성공
//  - rejected (reject): 실패

// promise 객체를 반환하는 promise1 함수 정의
/*
function promise1(flag) {
  return new Promise(function (resolve, reject) {
    if (flag === true) {
      resolve(
        `⭕promise 상태는 fulfilled! then()으로 연결됩니다. \n 이때 flag가 ${flag} 입니다.`
      ); // true (성공)
      // resolve -> then으로 연결
    } else {
      reject(
        `❌promise 상태는 rejected! catch()으로 연결됩니다. \n 이때 flag가 ${flag} 입니다.`
      ); // false (실패)
      // reject -> catch로 연결
    }
  });
}

promise1(true) // true, false, 5>3
  .then(function (result) {
    console.log(result);
  })
  .catch(function (err) {
    console.log(err);
  });
*/

// #2 Promise 사용법
// index.js 에서 "콜백함수"를 이용해 동기처리한 것을
// "promise"를 이용해 동기처리 해보자!!!
function goMart() {
  console.log('마트에 가서 어떤 음료를 살지 고민한다.');
}

function pickDrink() {
  return new Promise(function (resolve, reject) {
    // setTimeout() 비동기 처리 -> 동기처리 하기 위해 promise로 감싸기
    setTimeout(function () {
      console.log('고민 끝!');
      product = '제로 콜라';
      price = 2000; // 2000, 4000
      resolve();

      // reject도 사용하려는 경우
      //   if (price <= 2000) {
      //     resolve();
      //   } else {
      //     reject();
      //   }
    }, 3000);
  });
}

function pay() {
  console.log(`${product} 제품의 가격은 ${price}이다.`);
}

// reject 도 사용하려는 경우
// function nopay() {
//   console.log(`${product} 제품의 가격은 ${price}이다. 비싸서 안삽니다.`);
// }

let product;
let price;
goMart();
pickDrink().then(pay);
// reject 도 사용하려는 경우
// pickDrink().then(pay).catch(nopay);