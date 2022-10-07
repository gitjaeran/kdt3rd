console.log('실습2');
//정수 n이 있을때 2 또는 3의 배수의 총합을 구하시오 //3317

let n = 0;

for (let i = 1; i > 0 && i < 100; i++) {
    if (i % 2 == 0 || i % 3 == 0) {
        n = n + i;
    }
}
console.log(n);






let x =2;
switch (x) {
    case 1:
    case 2:
        console.log('a');
        console.log('b');
    case 3:
        console.log('c');
        break;
    case 4:
        console.log('d');
        break;
    default:
        console.log('f');
}