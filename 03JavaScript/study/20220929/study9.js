console.log('반복문 while')

// while 문
/*

while (조건식) {
	// 반복할 코드
}
=> 조건식 만족; 블럭({}) 내부 코드 실행
=> 내부 코드 실행 완료 -> 조건식으로 돌아가서 다시 반복 여부 결정
	- if문; 조건식 true; 블럭 내부 코드 "1번" 실행
	- while문; 조건식이 true; "계속" 반복 
=> 조건식 flase; 블럭을 빠져나옴 (= 반복 종료)

*/

// case1. 1~5 반복
var n = 1; 
while (n <= 5) { // n: 1 2 3 4 5 6(false)
	console.log(n); // n: 1 2 3 4 5
	n = n + 1; 
	// n = 1 + 1 = 2 
	// n = 2 + 1 = 3
	// n = 3 + 1 = 4
	// n = 4 + 1 = 5
	// n = 5 + 1 = 6
}
console.log('반복문 끝');

// 퀴즈) 
// case2. 9부터 4까지 while문으로 반복
n = 9; // 초기값
while (n >= 4) {
	console.log(n);
	n = n - 1;
}
console.log('반복문 끝');

// Case3. 1부터 10까지 짝수 출력
// ver1
n = 1; 
while (n <= 10) { // n: 1 ~ 10
	if (n % 2 == 0) {
		console.log(n);
	}
	n = n + 1;
}
console.log('반복문 끝');

// ver2
n = 2;
while (n <= 10) { // n: 2, 4, 6, 8, 10
	console.log(n);
	n = n + 2;
}
console.log('반복문 끝');





// Case4. 10부터 1까지 홀수 출력
// ver1
n = 10;
while (n >= 1) { // n: 10 ~ 1
	if (n % 2 === 1) {
		console.log(n);
	}
	n = n - 1;
}
console.log('반복문 끝');

// ver2
n = 9;
while (n >= 1) { // n: 9 7 5 3 1
	console.log(n);
	n = n - 2;
}
console.log('반복문 끝');


//-----------------------------
console.log('무한루프');
//반복문에서  조건식의 결과가 항상 참이 되어 반복문을 탈출하지 못하는 상태
//이를 활용해 의도적으로 무한루프를 만들어서
//특정 족ㄴ이 만족될 때까지 반복하여서 코드를 작성하기도 함

/*
while (true) {
    ...
    //탈출 조건 만들기
}
*/

//조건문 등을 이용해 탈출 조건을 만들어 주도
//break 키워드 -> 블록 탈출
//탈출 조건을 잘못 작성하면 탈출 못함!

// let go = confirm('계속 진행할까요?');
// console.log(go);
//확인을 누르면 true값이 콘솔에 뜬다.
//취소를 누르면 false값이 콘솔에 뜬다.


var count = 0;
while (true) {
    if (confirm("계속 진행하시겠습니까?") === true) {
        alert(`${count}번째 반복입니다!`);
        count = count + 1;
    } else {
      break;
    }
}
console.log('무한루프 탈출 성공!');