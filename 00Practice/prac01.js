console.log('Prac01');
console.log('-----------------------');
//
//
//
// 1. 나이 계산하기
// - 태어난 년도, 올해 연도, 계산한 나이를 저장한 변수 선언하기
// console.log('1. 나이 계산하기');
// function calc() {
//     var currentYear; //올해 연도를 저장할 변수
//     var birthYear; //태어난 연도를 저장할 변수
//     var age; //계산한 나이를 저장할 변수
// }

// - 변수에 값 저장하기
// function calc(currentYear, birthYear, age) {
//     var currentYear = 2022;
//     var birthYear = 1997;
//     var age;
//     age = currentYear - birthYear + 1;
//     //올해 연도에서 태어난 연도를 뺀 다음, 1을 더하여 age에 저장
// }
// console.log(age);


console.log('1. 나이 계산하기');
let currentYear = 2022;
let birthYear = 1997;
function calc(a, b) {
    age = a - b + 1;
    return age;
}
console.log(calc(currentYear, birthYear));
console.log('-----------------------');
//
//
//
//
console.log('2. 두 수를 더하는 함수 실행하기');
function addNumber(a, b) {
    var sum = a + b;
    return sum;
}
console.log(addNumber(2, 4));
console.log(addNumber(10, 40));
console.log('-----------------------');
//
//
//
//
console.log('3. 두 수를 빼는 함수 실행하기');
function subNumber(a, b) {
    var sum = a - b;
    return sum;
}
console.log(subNumber(10, 9));
console.log(subNumber(0, 9));
console.log('-----------------------');
//
//
function machine (a,b, c) {
    if(c === '더하기') {

    } else if (c === '빼기') {

    }
}


machine(1,5, '더하기');