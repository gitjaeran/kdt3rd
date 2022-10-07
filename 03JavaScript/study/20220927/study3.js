//자료형
// - 데이터의 종류 (data type): 데이터가 어떤 종류인가?

//1. 기본형(Primitive)
// - string
// - number
// - boolean
// - null
// - undefinded

//2. 객체
// - 배열
// - 딕셔너리


//자바스크립트는 다른 언어와 달리 인터프리터(해석기)가
//알아서 변수의 타입을 파악한 후 저장하여
//변수의 타입을 따로 작성해주지 않아도 된다.
//var let const 3가지 키워드를 이용해 변수를 "선언"한다.



//* 기본형(Primitive)
// 1. string
// - 텍스트 정보, 문자열
// - 따옴표로 감싸야 함 ('', "" 둘 다 가능)
// - 숫자, 특수 문자도 따옴표 안에 있으면 문자열 취급함
// ex. "그가 '안녕'이라고 말했다."
// ex. '그가 "안녕"이라고 말했다.'
// ex. "I'm ran"

var text = '안녕하세요';
var text2 = '하이!';
var gender = '남자';
var address = '서울';

console.log(text); //console.log(text); = console.log(안녕하세요); 같음!
console.log(text2);
console.log(gender);
console.log(address);
console.log(text + text2); //공백없이 문자를 이어서 출력
console.log(text + ' 저는 홍길동입니다.'); //공백을 넣기위해 의도적으로 한번 띈것.
console.log(text + ' 저는 홍길동입니다. 저는' + gender + '이고, ' + address + '에 거주하고 있습니다.');

// console.log(); 값 여러개 찍기
console.log(text, text2); //사이에 공백이 생긴다

//템플릿 리터럴
// : string 내 변수와 상수를 간결하게 표현
// 백틱(`` ->숫자 1 왼쪽 기호) 기호과 $, {} 기호 사용
console.log(`${text} 저는 홍길동입니다. 저는 ${gender}이고, ${address}에 거주하고 있습니다.`);


//2. number
//숫자(정수,실수)
//연산 가능
var num = 100; //정수
var num2 = 0.12; //실수

var result = 100 - 2;
console.log(result);

var result = 'apple' - 3;
console.log(result); // NaN: Not a Number (숫자가 아님);
//숫자로 변환할 수 없는 것을 숫자로 바꾸려고 할때 NaN이 뜬다



//3. boolean
// true, false 둘 중 하나의 값을 갖는 논리 요소. 대문자 아님
var isWater = true;
var isApple = false;


//4. null
// - 빈 값.
// - null 타입으로 "타입"이 존재하지만 "값"이 없음
// - 값이 없다는 것을 의도적을 명시할 때 사용
var y = null;
console.log(y);

//5. undefined
// - 값, 타입 모두 없음(값도 없고, 타입도 지정되어 있지 않은 상태)
var x;
console.log(x);




//type of(): 자료형 확인
console.log(typeof('문자')); //string
console.log(typeof(245)); //number
console.log(typeof(true)); //boolean
console.log(typeof(null)); //object (원래 object로 출력되면 안되나 js측에서 공식적으로 인정한 오류임.)

console.log(typeof '문자'); //string *typeof 뒤에 괄호 말고 띄어쓰기로도 동일하게 사용 가능



//항변환
//1. 무엇인가를 문자로 바꾸려 할때.  ? -> 문자
var str1 = true; //boolean
var str2 = 123; //number
var str3 = null; //null

//string()
console.log(typeof String(str1)); //string
console.log(typeof String(str2)); //string
console.log(typeof String(str3)); //string

// toString()
console.log(typeof str1.toString());  // string
console.log(typeof str2.toString()); // string


//2.  ? -> 숫자
var n1 = true; //boolean
var n2 = false; //boolean
var n3 = 123; //number
var n4 = '123'; //string

console.log(typeof Number(n1)); //number
console.log(typeof Number(n2)); //number
console.log(typeof Number(n3)); //number
console.log(typeof Number(n4)); //number
console.log(typeof parseInt(n3)); //number
console.log(typeof parseInt(n4)); //number

console.log(Number(n1)); // 1
console.log(Number(n2)); // 0
console.log(Number(n3)); // 123
console.log(Number(n4)); // 123
console.log(parseInt(n3, 10)); //123
console.log(parseInt(n4, 10)); //123



//실습2
