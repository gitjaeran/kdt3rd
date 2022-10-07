console.log('Prac 02');
console.log('-------------------');
//
//
console.log('1. if else')
// var walkCount = prompt('오늘 몇 보나 걸었나요?', '0');
// if(walkCount > 5000) {
//     alert('많이 걸으셨네요!');
// } else {
//     alert('좀 더 걸으세요!');
// }
console.log('-------------------');
//
//
//
//
console.log('1-2. 3의 배수')
function userNumber(x) {
    if(x % 3 === 0) {
        return `${x}은/는 3의 배수입니다`;
    } else {
        return `${x}은/는 3의 배수가 아닙니다`;
    }
}
console.log(userNumber(10));
console.log(userNumber(9));
console.log('-------------------');
