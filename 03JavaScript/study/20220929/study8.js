console.log('반복문 for');

//반복문
// - for문
// - while문

/*
for(초기값;조건식;증감값) {
    //조건식의 결과가 참일 경우 반복적으로 실행
    //반복할 코드들
}


for ( 초기값 ; 조건식 ; 증감값 ) {
    반복할 코드
}
*/

//후위연산자
//증감 < 후위
// n(변수)++
// n--

// n = 10일때,
// n++
// n = n+1  n은 11

// n--
// n=n-1    n은 9


//case1. 0~4출력
for (let i = 0; i < 5; i++) { //변수 i 첫 값은 0 -> 0출력 -> 증감값으로 +1시켜줌 -> 5는 false이므로 출력x
    console.log(i, 'case2-1 result');
}
console.log('반복문 끝');



console.log('--------------------------');
//case2-1. 1~5출력
for (let i = 1; i < 6; i++) { 
    console.log(i, 'case2-1 result');
}
console.log('반복문 끝');



//case2-2. 1~5출력
for (let i = 1; i <= 5; i++) { 
    console.log(i, 'case2-2 result');
}
console.log('반복문 끝');


//case2-3. 1~5출력
for (let i = 0; i < 5; i++) { 
    console.log(i + 1, 'case2-3 result');
}
console.log('반복문 끝');




console.log('--------------------------');
//case3. 5~1출력
// for (let i = 5; i > 0; i--) {
//     console.log(i, 'case3 result');
// }


//case3-1. 1~10출력(단, 짝수만)
//반복 1부터 10까지 + 2로 나눈 나머지가 0일때만 출력
//반복문 + 조건문
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i, 'case3-1 result');
    }
    
}
console.log('반복문 끝');


for (let i = 2; i <= 10; i = i + 2) {
    console.log(i, 'case3-2 result');
}



console.log('--------------------------');
// 퀴즈) 1부터 10까지 합 구하기
let sum = 0; // 합을 저장할 변수 생성
// for (let i = 1; i <= 5; i++) { // i: 1 2 3 4 5 6(false)
// 	sum = sum + i 
	// sum = 0 + 1 = 1
	// sum = 1 + 2 = 3
	// sum = 3 + 3 = 6
	// sum = 6 + 4 = 10
	// sum = 10 + 5 = 15
//}
// console.log(`1~10까지 모두 더한 값: ${sum}`); // 15


// 퀴즈) 1부터 10까지 짝수의 합 구하기
for (let i = 1; i <= 10; i++) { 
    if (i % 2 === 0) { 
        sum = sum + i
    }
}
console.log(sum); //30
console.log('--------------------------');

for (let i = 2; i <= 10; i = i + 2) { 
        sum = sum + i
}
console.log(sum); //30




