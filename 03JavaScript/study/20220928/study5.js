//문자열 속성과 메서드(함수)
//: 자바스크립트에서 기본 제공하는
//문자열(string)에서 사용 가능한 편리한 기능

console.log('connected');


//속성
//length: 문자열 길이
var song = `strawberry moon`;
console.log(song.length); //15 = song변수의 문자열 길이(띄어쓰기,특수문자포함)

//xx.method() 형태 ->함수이므로 옆에 괄호()가 꼭 붙어야함
// - toUpperCase(): 대문자로 변경
// - toLowerCose(): 소문자로 변경
// - trim(): 양끝 공백 제거
var msg = `Happy BirthDay~`;
var userId = `        user123   `;

console.log(msg.toUpperCase()); //대문자로 바꿔줌
console.log(msg.toLocaleLowerCase()); //소문자로 바꿔줌
console.log(msg.length); //15
console.log(userId.trim());
console.log(userId.trim().length); //7 양끝 공백 제거
//참고: 연달아서 사용가능
var msg2 = ` Hello world!  !   `;
console.log(msg2.trim().toUpperCase());
//msg2변수의 양끝 공백 제거, 대문자로 변경


var msg3 = `     hello world!   `;
console.log(msg3.trim().toUpperCase().length);




//인덱싱(indexing)
// : string에서 한 글자를 선택
// 변수명[위치값]
//위치값: 숫자 0부터 시작
console.log(typeof(song));
console.log(song[0]);
console.log(song[1]);
console.log(song[2]);
console.log(song[3]);
console.log(song[4]);
console.log(song[5] + song[7]);
console.log(song[0].toUpperCase());

//퀴즈 sonny 단어 만들기
//strawberry moon
console.log(song[0].toUpperCase() + song[12] + song[14] + song[14] + song[9]);





//xx.method(arg) 형태
// - indexOf(): string에서 x가 나타내는 인덱스(위치값)를 반환
//              글자가 있는지 확인할때 사용. -1이 없으면 있는 것.
// - slice(): startindex부터 끝까지 문자열을 잘라내어 변환
// - replace(교체될 값, 교체되어 들어가는 값)
//              : 처음 발견한 값을 교체
// - replaceAll(교체될 값, 교체되어 들어가는 값)
//              : 발견한 값을 모두 찾아서 교체

var fruit = `applemango`;
var msg = `Wow~ It is so amazing~~~~!!`;

console.log(fruit.indexOf(`a`)); //0
console.log(fruit.indexOf(`l`)); //3
console.log(fruit.indexOf(`mango`)); //5 (m 인덱스 반환)
console.log(fruit.indexOf(`x`)); // -1 (x가 없다면 -1 반환)


console.log(fruit.slice(5)); //mango
console.log(fruit.slice(2)); //plemango
console.log(fruit.slice(-1)); //o (인덱스 번호는 음수도 가능)
console.log(fruit.slice(-5)); //mango
console.log(fruit.slice(-3)); //ngo -3 ~ -1


console.log(msg.replace(`Wow`, `Hey`)); 
console.log(msg.replace(`a`, `A`)); 


//퀴즈
let date = `2022.9.26`;
console.log(date.replaceAll(`.`, `-`)); //2022-9-26
console.log(date.slice(2).replaceAll(`.`, `-`)); //22-9-26

console.log(date.replace(`9`, `09`).replaceAll(`.`, `-`)); //2022-09-26
console.log(date.replace('9', `09`).replaceAll(`.`, `-`).slice(5)) //09-26

