//연산자
// - 대입: =
// - 비교: == != === !=== > >= < <=
// - 산술: + = * /
// - 논리: ! && !!


//대입 연산자
// =
// 좌측 변수에 우측 값을 할당(저장/대입)하겠다는 뜻.

//산술 연산자
// + - * /
console.log(1 + 2); //3
console.log(1 - 2); //-1
console.log(1 * 2); //2
console.log(1 / 2); //0.5
console.log(3 ** 2); //3의 2승 =9
console.log(2 ** 10); //2의 1승 =1024
console.log(10 % 4); //나머지 연산자 2




//함수
// : 특정 작업을 실행하기 위해 독립적으로 설계된 코드 집합
// - 2단계: 함수 정의(생성) -> 함수 호출(사용)

//함수 정의 (생성)
/*
function functionName() {
    do something
}
*/

//함수 호출 (사용)
/*
functionName();
*/

function helloWorld() {
    console.log('helloWorld!');
}
//호출
helloWorld();



const helloWorld2 = function () { //정의
    console.log('helloWorld22');
}
helloWorld2();



 //return: 반환값=함수 내부 코드의 최종결과값.
 //함수 내부 코드의 값을 저장하고 보관하려고 만든 키워드
function helloWorld3() {
    return "helloworld!!3";
}
console.log(helloWorld3());



const helloWorld4 = function () {
    return "helloworld!!4";
}
console.log(helloWorld4());



//다양한 함수 만들기
//case 1. 매개변수(인자) 1개
function hello1(text) { //'안녕!'
    return text; //return 안녕!
}
console.log(hello1('안녕!'));


//case 2. 매개변수(인자) 2개
function hello2(text, name) {
    let result = `${text} 나는 ${name}이야`;
    return result;
}
hello2('안녕?', 'ran')
console.log(hello2('안녕?', 'ran'));


//case3. return 없이 함수에서 바로 console.log()찍기
function hello3(text, name) {
    console.log(`${text} 나는 ${name}이야`);
}
hello3('안녕????', 'lily');



//case4. case2를 함수 표현식으로 바꾸기
const hello6 = function(text, name) {
    let result = `여긴 ${text}고, 여기는 ${name}이야.`;
    return result;
}
// hello6('hello6텍스트', 'hello6이름');    ->콘솔이 없어서 결과값을 가지고만 있음.
console.log(hello6('hello6텍스트', 'hello6이름1111'));



//case5. case3를 함수 표현식으로 바꾸기
const hello5 = function(text, name) {
    console.log(`여긴 ${text}고, 여기는 ${name}이야.`);
}
hello5('텍스트', '이름')

//하나의 js파일에서 새로운 함수를 정의할때 중복되지 않게 해야함.
//항상 정의를 먼저 하고 호출해야한다.


//--------------------------------------------------------------


function countNum() { //함수 정의
    let count = 7; //함수 안에서 변수 선언 + 할당
    console.log(`count 값: `, count); 
}
countNum(); //함수 호출

//지역 변수
//: 함수 안에서 선언한 변수는 함수 안에서만 유효하다.
//: 지역변수는 함수의 body를 벗어나면 접근할 수 없다.



let count2 = 0;
console.log(`count 값1: `, count2); //0
function countNum2() {
    count2 = 77;
    console.log(`count 값2: `, count2); //77
}
countNum2();
    console.log(`count 값3: `, count2); //77
// -> 만약 함수 안에서 사용되는 변수가 함수 바깥에서도 쓰인다면
// "전역변수"를 활용한다(함수 바깥에 있는 변수)


let color = 'red';
console.log(color); //red
function printColor() {
    let color = 'green' ; //green
    console.log(color);
}
printColor(color);
console.log(color); //red
//지역변수와 전역변수의 이름이 동일한 상황
//함수 안에서는 지역변수를 사용



let animal = 'dog';
function who() {
  let animal = 'cat';
  console.log(animal);  // cat
}
who();
console.log(animal);  // dog