console.log('JS 표준 내장 객체');

//JS 표준 내장 객체
// 기본적으로 이미 가지고 있는 객체
// String, Number, Array, Date, Math...

//======================================================================

//Date 객체
//시간, 날짜에 대한 정보를 얻기 위함
let now = new Date();
console.log(now); //한국표준시 반환

//ms
//1970년 1월 1일 9시 0분 0초를 기준으로 
console.log(new Date(0)); //Thu Jan 01 1970 09:00:00 기준
//80000ms가 지났을때 날짜 반환
console.log(new Date(80000)); //Thu Jan 01 1970 09:01:20


//new Date(y, m, d, h, m, s, ms)
//year : 4자리
//month : 0(1월) ~ 11(12월)
//date : 1~31 -> 생략하면 1으로 처리
//hour, minutes, seconds, ms
console.log(new Date(2018, 2, 2));
console.log(new Date(2018, 2, 2, 18, 20, 30));

//오늘 날짜(9월이면 8로 입력; 0부터 세기때문)
console.log(new Date(2022, 8, 30, 10, 53)); //Fri Sep 30 2022 10:53:00


//Date 객체 메서드
//메서드를 이용해서 년, 일, 월, 일 등의 값을 얻기
console.log(now);

console.log(now.getFullYear()); //2022
console.log(now.getMonth()); //8 (9월)
console.log(now.getDate()); //30
console.log(now.getHours()); //10
console.log(now.getDay()); //0(일) ~ 6(토) ; 5(금)


// 퀴즈
// Date 객체를 이용해 오늘 요일을 얻고,
// switch-case문과 if문으로 오늘이 평일/주말 구별해보자
// if 문
console.log('-------------------');
console.log(now); //현재표준시
console.log(now.getDay()); //5(금)

//0 일 , 1 월, 2 화, 3 수, 4 목, 5 금, 6 토
//평일: 1~5
//주말: 0, 6

function isDate(now) {
    if (now == 0) {
        return '주말';
    } else if (now == 1) {
        return '주말';
    } else if (now > 1 && now <= 6) {
        return '평일';
    } else {
        return '잘못된 요일'
    }
} 
console.log(isDate(0));
console.log(isDate(1));
console.log(isDate(2));
console.log(isDate(3));
console.log(isDate(4));
console.log(isDate(5));
console.log(isDate(6));
console.log(isDate(7));



console.log('-------------------');
console.log(now);
console.log(now.getDay());

if (now.getDay() === 0 || now.getDay() === 6) {
	console.log('주말');
} else { // 1 ~ 5
	console.log('평일');
}






// switch
switch (now.getDay()) {
	case 1:
	case 2:
	case 3:
	case 4:
	case 5:
		console.log('평일');
		break;
	case 0:
	case 6:
		console.log('주말');
		break;
	default:
		console.log('알수 없음');
		break;
}



console.log('-------------------');
//Math 객체
//수학적인 상수와 함수를 위한 속성과 메서드

//속성
console.log(Math.E); //자연로그 밑
console.log(Math.PI); //파이
console.log(Math.SQRT2); //2의 제곱근

//메서드
console.log(Math.min(100, 200, 30, 7)); //최소값
console.log(Math.max(100, 200, 30, 7)); //최대값
console.log(Math.round(6.5)); //반올림
console.log(Math.round(6.3));
console.log(Math.floor(6.5)); //내림
console.log(Math.ceil(6.5)); //올림
console.log(Math.ceil(6.3));


console.log(Math.floor(Math.max(1.1, 2.2, 3.3, 4.4, 7.7))); //7
console.log(Math.floor(7.7)); //7
console.log(7); //7

console.log(Math.random()); //0 <= x < 1 범위의 난수


// 0 <= 10x < 10: from 0 to 9
console.log(Math.floor(Math.random() * 10)); 

// 퀴즈) Returns a random integer from 1 to 10:
console.log(Math.floor(Math.random() * 10) + 1); 

// 퀴즈) Returns a random integer from 1 to 100:
// 1 <= Math.random() * 100 +1 < 101
console.log(Math.floor(Math.random() * 100) + 1); 

// 퀴즈) Returns a random integer from 20 to 22:
// 20 <= Math.random() * 3 + 20 < 23
console.log(Math.floor(Math.random() * 3) + 20); 