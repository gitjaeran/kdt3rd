// 클래스
// -객체를 생성하는 템플릿

// 클래스: 붕어빵 틀
// 객체: 붕어빵

class Cat {
  //생성자
  // this 이 클래스의 name 을 name으로 설정할거야
  // 고양이는 각각 고유한 객체, 각각의 이름있음, 클래스로 고양이를 찍어낼 때
  constructor(name, age) {
    // 속성
    this.name = name;
    this.age = age;
  }
  // 메서드
  mew() {
    return "야옹~";
  }
  eat() {
    return "밥먹자";
  }
}

let navi = new Cat("나비", 2);
let nyang = new Cat("냥이", 3);
console.log(navi.name);
console.log(navi.age);
console.log(navi.mew());
console.log(navi.eat());

console.log(nyang.name);
console.log(nyang.age);
console.log(nyang.mew());
console.log(nyang.eat());

// 연습
// Person 클래스
// 속성: 이름, 성별
// 메서드: study()

class Person {
  constructor(name, gender) {
    this.name = name;
    this.gender = gender;
  }
  study() {
    return "공부";
  }
}

let minji = new Person("minji", "F");
let minku = new Person("minku", "M");
console.log(minji.name);
console.log(minku.name);
console.log(minji.gender);
console.log(minku.gender);
console.log(minji.study());
console.log(minku.study());
