console.log(`connected`);

//조건문
//어떤 조건에 따라 논리 구조를 분기(나눔)
//--> 조건에 따라 서로 다른 문장을 실행

//연산자
//동등 연산자: ==(같은지 물어보는것), !=(같지 않은지 물어보는것)
console.log(1 == 1); //true
console.log(1 == 2); //false
console.log(1 != 1); //false
console.log(1 != 2); //true

console.log(`1` == 1); //true
console.log(`2` != 1); //true
//==, != : 타입(자료형)이 달라도 괜찮음. 값만 비교함



console.log(`--------`)
console.log(1 === 1); //true
console.log(1 === 2); //false
console.log(1 !== 1); //false
console.log(1 !== 2); //true

console.log(`1` === 1); //false
console.log(`2` !== 1); //true
//===, !== : 타입(자료형)과 값을 모두 비교함




//비교 연산자
// > , < , >= , <=
console.log(`-------`);
console.log(2 > 1); //true
console.log(2 < 1); //false
console.log(1 >= 1); //true
console.log(1 <= 2); //true



//논리연산자
// && : and(둘 다 참이어야 함)
// || : or(둘 중 하나라도 참이면 참)
// ! : not(부정     참 -> 거짓 , 거짓 -> 참)
console.log(`-------`);
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);
console.log(!true);
console.log(!false);
console.log(!!false);



console.log(`-------`);
console.log((2 > 1) && (-2 < 1));
//           true   &&    true    //true

console.log(!(2 > 1));
//        부정  true    //false
console.log(((2 > 1) && (-2 < 1)) || (5 > 2));
//             true  &&    true  =true
//                                      true   //true




//----------------------------------------------------------
console.log(`----------------`);

//if 조건문
if (5 > 3) {
    console.log(`bigger!`);
}

//함수 안에서 조건문 사용
function isBig() {
    if (5 > 3) {
        return `bigger`;
    }
}
console.log(isBig());




//if else
if (5 < 3) {
    console.log(`bigger`);
} else {
    console.log(`smaller..`);
}


//if - else if
//else if 키워드는 여러개 만들수있음
if (5 < 3) {
    console.log(`smaller..!`);
} else if (5 > 3) {
    console.log(`bigger!`);
}

if (5 < 3) {
    console.log(`smaller..!`);
} else if (5 > 3) {
    console.log(`bigger!`);
} else if (5 == 3) { //else만 써도 같은 조건문임.
    console.log(`same`);
}



//퀴즈
// let score = 80;
// if (score >= 90) {
//     console.log(`A`);
// } else if (score >= 80) {
//     console.log(`B`);
// } else if (score >= 70) {
//     console.log(`C`);
// } else if (score >= 60) {
//     console.log(`D`);
// } else if (score < 60) {
//     console.log(`F`);
// }



// 퀴즈
let score = 80;
// 90이상 A
// 80이상 B
// 70이상 C
// 60이상 D
// 60미만 F

if (score >= 90) {
	console.log('A')
} else if (score >= 80) {
	console.log('B')
} else if (score >= 70) {
	console.log('C')
} else if (score >= 60) {
	console.log('D')
} else {
	console.log('F')
}



//조건문 중첩

//가입한 아이디, 비번
let usrId = 'user';
let usrPw = '1234';
//로그인할 때 입력한 아이디, 비번
let inputId = 'user';
let inputPw = '1234';

usrPw.length // 4

// 4 > 5
// usrRw.length > 5

//아이디가 일치
//          ㄴ비밀번호 일치 -> 인사
//          ㄴ비밀번호 불일치 -> 불일치
// 아이디가 불일치 -> 아이디 없음
if(useId == inputId) {
    if(usrPw == inputPw) {
        return 'Hi!'
    } else if(usrPw !== inputPw) {
        return "불일치"
    }
} else {
    return '아이디 없음'
}
