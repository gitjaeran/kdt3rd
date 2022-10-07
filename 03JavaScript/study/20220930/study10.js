console.log('JS 객체');

/*
자료형
- 기본형(Primitive)
- 객체(Object)
    -배열
    -객체 리터링(객체)
*/

// 1. 배열
// 원소는 0부터 센다.
const arr1 = ['red', 'orange', 'yellow', 1, 2, 3];  //배열생성방법1
const arr2 = new Array('red', 'orange', 'yellow', 1, 2, 3); //배열생성방법2
console.log(arr1);
console.log(typeof arr1); //object
console.log(typeof(arr1));

console.log(arr2);
console.log(typeof arr2); //object
console.log(typeof(arr2));

// 배열 원소(요소) 읽기
//index: 배열 원소 위치값
//숫자는 0부터 시작 주의
let str = 'Green';
console.log(str[0]); //G

console.log(arr1[0]); //red
console.log(arr1[5]); //3


//배열 원소값 변경
console.log(arr1); //(6) ['red', 'orange', 'yellow', 1, 2, 3]
arr1[2] = '따란';
console.log(arr1); //(6) ['red', 'orange', '따란', 1, 2, 3]
arr1[4] = 100;
console.log(arr1); //(6) ['red', 'orange', '따란', 1, 100, 3]


//원소 추가
arr1[6] = '추가'; 
console.log(arr1); //(7) ['red', 'orange', '따란', 1, 100, 3, '추가']
arr1[7] = '추추가';
console.log(arr1); //(8) ['red', 'orange', '따란', 1, 100, 3, '추가', '추추가']

// 동떨어진 인덱스 번호로 원소값 추가 -> 그 사이에 빈 값이 들어감
arr1[10] = '얍';
console.log(arr1); //(11) ['red', 'orange', '따란', 1, 100, 3, '추가', '추추가', empty × 2, '얍']
// 빈 값을 불러내면 undefined 출력
console.log(arr1[8]); //undefined
console.log(arr1[9]); //undefined



//배열에서 자주 사용되는 속성과 메서드
// 1. length 속성 : 배열 길이 = 요소(원소) 개수
console.log(arr2.length); //6

//배열에서 마지막 인덱스 번호 = 배열 길이 -1
console.log(arr2[arr2.length-1]); //배열의 마지막 원소 불러오기 ; 3


//2. push(x) : x를 맨 뒤에 추가
arr2.push(4);
arr2.push(5);
arr2.push(6);
arr2.push(7, 8, 9); //여러개 추가도 가능
console.log(arr2); //(12) ['red', 'orange', 'yellow', 1, 2, 3, 4, 5, 6, 7, 8, 9]


//3. pop() : 맨 뒤 요소 제거
arr2.pop();
console.log(arr2); //(11) ['red', 'orange', 'yellow', 1, 2, 3, 4, 5, 6, 7, 8]
arr2.pop();
console.log(arr2); //(10) ['red', 'orange', 'yellow', 1, 2, 3, 4, 5, 6, 7]
arr2.pop();
console.log(arr2); //(9) ['red', 'orange', 'yellow', 1, 2, 3, 4, 5, 6]


//4. unshift(x) : 맨 앞에 x를 추가
// * 추가하는것이지 맨 앞의 요소를 없애고 교체하는것이 아님
arr2.unshift('hi');
console.log(arr2); //(10) ['hi', 'red', 'orange', 'yellow', 1, 2, 3, 4, 5, 6]

arr2.unshift('a', 'b'); //한꺼번에 추가 가능
console.log(arr2); //(12) ['a', 'b', 'hi', 'red', 'orange', 'yellow', 1, 2, 3, 4, 5, 6]


//5. shift() : 맨 앞 요소 제거
arr2.shift();
console.log(arr2); //(11) ['b', 'hi', 'red', 'orange', 'yellow', 1, 2, 3, 4, 5, 6]
arr2.shift();
console.log(arr2); //(10) ['hi', 'red', 'orange', 'yellow', 1, 2, 3, 4, 5, 6]


//6. indexOf(x) : 배열 원소에 x가 있는지 찾음
console.log(arr2.indexOf('orange')); //2

//없는 원소를 넣을 경우
console.log(arr2.indexOf('xxx')); //없는 원소이므로 -1 반환



//응용 - 다차원 배열
//배열 안에 원소로 배열이 들어갈 수 있다.
const korean = [
    ['가', '나', '다'],
    ['라', '마', '바'],
    ['사', '아', '자'],
];
console.log(korean);
//(3) [Array(3), Array(3), Array(3)]

console.log(korean[0]); //(3) ['가', '나', '다']
console.log(korean[1]); //(3) ['라', '마', '바']
console.log(korean[2]); //(3) ['사', '아', '자']

console.log(korean[0][0]); //가
console.log(korean[1][0]); //라
console.log(korean[2][0]); //사


console.log('------------------');
// 퀴즈) 아래 배열에서 아이스크림 출력하기
const letters = [
    ['사', '스', '자', '크'], //index: 0
    ['진', '안', '리', '이'], //index: 1
    ['가', '수', '림', '나'], //index: 2
    ['아', '으', '차', '운'], //index: 3
  ];
console.log(letters[3][0]); //아
console.log(letters[1][3]); //이
console.log(letters[0][1]); //스
console.log(letters[0][3]); //크
console.log(letters[2][2]); //림



//3차원 배열
const nums = [
    [
        [1, 2, 3],
        [4, 5, 6],
    ],
    [
        [7, 8, 9],
        [10, 11, 12],
    ],
];
console.log(nums);

console.log(nums[1][0][1]); //8



//================================================================
//2. 객체 리터럴, 딕셔너리 (object)
// 배열: 순서가 없음
// 객체: 키-값 형태
// {}를 이용해 생성
// {key1: value1, key2: value2, key3: value3, ...}
console.log('객체 리터럴, 딕셔너리');

const cat = {
    name: '나비',
    age: 1,
    mew: function () {
        return '냐옹';
    },
};
console.log(cat);
//{name: '나비', age: 1, mew: ƒ}   => key값 알파벳 순서로 나옴!


//객체 접근하기
//1. 점 표기법(더 많이 사용함)
console.log(cat.name); //나비
console.log(cat.age); //1
console.log(cat.mew()); //냐옹

//value 변경하기
cat.age = 3;
console.log(cat); //{name: '나비', age: 3, mew: ƒ}
//key-value 추가하기
cat.gender = 'f';
console.log(cat); //{name: '나비', age: 3, gender: 'f', mew: ƒ}


//2. 대괄호 표기법
console.log(cat['name']); //나비
console.log(cat['gender']); //f
console.log(cat['mew']()); //냐옹

//value 변경하기
cat['age'] = 5;
console.log(cat); //{name: '나비', age: 5, gender: 'f', mew: ƒ}
cat['weight'] = 5;
console.log(cat); //{name: '나비', age: 5, gender: 'f', weight: 5, mew: ƒ}


// value값: boolean, array, number, string, object ...
const dog = {
    name: 'Coco',
    isPoodle: true,
    age: 3,
    sibling: ['Max', 'Lucy', 'Bella'],
};
console.log(dog);
console.log(dog.name);
console.log(dog.isPoodle);
console.log(dog.age)
console.log(dog.sibling);
console.log(dog.sibling[0]);
console.log(dog.sibling[1]);
console.log(dog.sibling[2]);

//객체 확인하기
console.log(typeof dog);
console.log(typeof(dog));