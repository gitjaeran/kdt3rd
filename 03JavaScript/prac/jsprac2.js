console.log(`co`);

// step1. (조건문) 홀짝을 구별하는 조건문 생성
// - n 변수를 선언하고 6을 할당
// - num이 짝수라면 콘솔창에 "짝수" 출력
// - num이 홀수라면 콘솔창에 "홀수" 출력
// - 힌트) 짝수는 2로 나누어 떨어지는 수이다. 즉, 짝수는 2로 나눈 나머지가 0과 같다.
let n = 6;

if (n % 2 == 0) {
    console.log(`짝수`, 'step1 result');
} else if (n % 2 == 1) {
    console.log(`홀수`, 'step1 result');
}

// step2. (함수 + if-esle 조건문) 짝수인지 판별하는 함수 isEven() 정의하고 호출하기
// - isEven() 함수는 매개변수 x 를 가짐
// - 매개변수 x의 값이 짝수라면, true 반환
// - 매개변수 x의 값이 홀수라면, false 반환

function isEven(x) {
	if (x % 2 == 0) {
        return true;
    } else if (x % 2 == 1) {
        return false;
    }
}
console.log(isEven(8), '=step2 result'); // true
console.log(isEven(7), '=step2 result'); // false






// ======================================
// Q. (함수 + if-else if-else 조건문) 색상을 얻는 getColor() 함수 정의하고 호출하기
// - getColor() 함수는 매개변수 sign을 가짐
// - 매개변수 sign의 값이 'go'이면, 'green'을 반환
// - 매개변수 sign의 값이 'slow'이면, 'yellow'를 반환
// - 매개변수 sign의 값이 'stop'이면, 'red'를 반환
function getColor(sign) {
    if (sign == 'go') {
        return 'green';
    } else if (sign == 'slow') {
        return 'yellow';
    } else if (sign == 'stop') {
        return 'red';
    }
  }
  console.log(getColor('go')); // green
  console.log(getColor('slow')); // yellow
  console.log(getColor('stop')); // red
  
  
  // ======================================
  // (중첩 조건문)
  // Q.
  // - isValidate 함수는 비밀번호를 의미하는 pw1, pw2 두 개의 매개변수를 가짐
  // - pw1은 길이가 5 이상이라면,
  //      - pw1과 pw2가 같다면, ''비밀번호 일치~' 반환
  //      - pw1과 pw2가 같지 않다면, ''비밀번호 불일치..' 반환
  // - pw1의 길이가 5 미만이라면, '비밀번호는 5자리 이상!!!' 반환

//   const pw1 = 12345;
//   const pw2 = 12345;

  function isValidate(pw1, pw2) {
    if (pw1 >= 5) {
        if (pw1 == pw2) {
            return `비밀번호 일치!`;
        } else {
            return `비밀번호 불일치!`;
        }
    } else if (pw1 < 5) {
        return `비밀번호는 5자리 이상!`;
    }
}
//   브라우저 콘솔창 확인 결과
  console.log(isValidate('1234', '1234')); // '비밀번호는 5자리 이상!!!'
  console.log(isValidate('12345', '12345')); // '비밀번호 일치~'
  console.log(isValidate('12345', '12345!!')); // '비밀번호 불일치..'
  
  
  // ======================================
  // Q. 바로 위에 문제에서 조건 추가!!
  // 비밀번호 확인 조건이 추가되었습니다.
  // - pw1은 길이가 5 이상이고 8이 이하라면,
  //      - pw1과 pw2가 같다면, ''비밀번호 일치~' 반환
  //      - pw1과 pw2가 같지 않다면, ''비밀번호 불일치..' 반환
  // - pw1의 길이가 5 미만이거나 8 초과라면, '비밀번호는 5자리 이상 8자리 이하!!!' 반환
  function isValidate2() {
   // 함수 내부 채워주세요.
  }
  
  // 브라우저 콘솔창 확인 결과
  // isValidate2('1234', '1234'); // '비밀번호는 5~8자리만 가능!!!'
  // isValidate2('123456789', '123456789'); // '비밀번호는 5~8자리만 가능!!!'
  // isValidate2('12345', '12345'); // '비밀번호 일치~'
  // isValidate2('12345', '12345!!'); // '비밀번호 불일치..'