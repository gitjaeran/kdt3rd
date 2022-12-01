console.log("hello");
// 터미널에서 직접실행 node index.js nodemon index.js도 가능
// 구조 분해 할당
// 변수의 순서와 요소의 순서가 일치해야 함
// 없는 값은 undefined
// 기본 값 설정 가능

// 1. 배열 구조 분해
const lists = ["apple", "grape"];
[item2, item1, item3 = "peach"] = lists;
console.log("item1: ", item1);
console.log("item2: ", item2);
console.log("item3: ", item3);

// Swap: 두 변수의 값 교환
let x = 1,
  y = 2;
[x, y] = [y, x];
console.log("x ", x);
console.log("y", y);

// 2. 객체 구조 분해
// 키 값과 변수명 일치해야 함
// 없는 키값을 변수로 받으면 undefined
const obj = {
  key1: "one",
  key2: "two",
};
const { key1, newKey1, key2, key3 = "three" } = obj;
console.log(key1);
console.log(newKey1);
console.log(key2);
console.log(key3);

const { a, b } = { a: 10, b: 20 };
console.log(a);
console.log(b);

const arr = ["a", "b", "c"];
// [Before]
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);

// [After]
const [one, two, three] = arr;

console.log(one);
console.log(two);
console.log(three);

// [After]
const [one2, two2, three2, four2 = "hello"] = arr;

console.log(one);
console.log(two);
console.log(three);
console.log(four2);

const Tv = {
  name: "samsung tv",
  price: 300,
  size: "76inch",
  store: "samsung",
};

// [Before]
// ver1. 점 연산자
console.log(Tv.name);
console.log(Tv.price);
console.log(Tv.size);
console.log(Tv.store);
// ver2. 대괄호 표기법
console.log(Tv["name"]);
console.log(Tv["price"]);
console.log(Tv["size"]);
console.log(Tv["store"]);

// [After]
// key: 변수명 => 새로운 변수명을 "키 "로 사용
// key="value" ->새로운 키에 대한 값을 설정
let { price: pricePrice, size, store, name, owner = "Sean" } = Tv;
console.log(name);
console.log(pricePrice);
console.log(size);
console.log(store);
console.log(owner);

// spread 연산자
// 값을 펼치는 연산자

// object

const defaultInfo = {
  price: 2000,
  store: "ceo",
};
const chocoIcecream = {
  ...defaultInfo,
  flaver: "choco",
};
const strawberryIcecream = {
  ...defaultInfo,
  flaver: "strawberry",
};
const mangoIcecream = {
  ...defaultInfo,
  flaver: "mango",
};
// array

console.log(chocoIcecream, strawberryIcecream, mangoIcecream);

// array
const num1 = ["one", "two", "three"];
const num2 = ["four", "five", "six"];

const nums = [...num1, "seven", ...num2];
console.log(nums);
