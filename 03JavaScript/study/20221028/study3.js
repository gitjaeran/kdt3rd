// #3 Promise 체이닝
// ex. 함수를 이용해 (4 + 3) * 2 - 1 = 13 연산을 해보자!
// add -> mul -> sub 순으로 연산 필요

/*
function add(n1, n2, callback) {
  setTimeout(function () {
    let result = n1 + n2; // 4 + 3 = 7
    callback(result); // callback(7)
  }, 1000);
}

function mul(n, callback) {
  setTimeout(function () {
    let result = n * 2; // 7 * 2 = 14
    callback(result); // callback(14)
  }, 700);
}

function sub(n, callback) {
  setTimeout(function () {
    let result = n - 1; // 14 - 1 = 13
    callback(result); // callback(13)
  }, 500);
}

add(4, 3, function (x) {
  // add 함수 정의부의 callback(result)
  console.log('1: ', x); // 7
  mul(x, function (y) {
    // mul 함수 정의부의 callback(result)
    console.log('2: ', y); // 14
    sub(y, function (z) {
      // sub 함수 정의부의 callback(result)
      console.log('3: ', z); // 13
    });
  });
});
*/

// step2. 프로미스 체이닝 사용
function add(n1, n2) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let result = n1 + n2;
      resolve(result); // resolve(7)
    }, 1000);
  });
}

function mul(n) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let result = n * 2;
      resolve(result);
    }, 700);
  });
}

function sub(n) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let result = n - 1;
      resolve(result);
      // *에러처리: 의도적으로 에러 일으킴
      //   reject(new Error('의도적으로 에러를 일으켜봤음!!'));
    }, 500);
  });
}

add(4, 3) // add(4, 3) -> resolve(7) - then(7)
  .then(function (result) {
    console.log('1: ', result); // 7
    return mul(result); // return mul(7) - resolve(14) -> then(14)
  })
  .then(function (result) {
    console.log('2: ', result); // 14
    return sub(result); // return sub(14) -> resolve(13) -> then(13)
  })
  .then(function (result) {
    console.log('3: ', result); // 13
  });

// *에러처리
// add(4, 3) // add(4, 3) -> resolve(7) - then(7)
//   .then(function (result) {
//     console.log('1: ', result); // 7
//     return mul(result); // return mul(7) - resolve(14) -> then(14)
//   })
//   .then(function (result) {
//     console.log('2: ', result); // 14
//     return sub(result); // return sub(14) -> resolve(13) -> then(13)
//   })
//   .then(function (result) {
//     console.log('3: ', result); // 13
//   })
//   .catch(function (err) {
//     console.log('실패!');
//     console.log(err);
//   });

