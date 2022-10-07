const no_1 = 1;
const no_2 = 2;
const no_3 = 3;

console.log(no_1);
console.log(no_2);
console.log(no_3);
console.log(no_1, no_2, no_3);
console.log(no_1 + no_2 + no_3);


function add(a, b, c) {
    const result = a + b + c;
    return (
        console.log(result),
        alert(result)
        );
}

function sub(a, b) {
    const result = a - b;
    return (
        console.log(result),
        alert(result)
    );
}

function divide(a, b) {
    const result = a / b;
    return (
        console.log(result),
        alert(result)
    );
}

function multiply(a, b) {
    const result = a * b;
    return (
        console.log(result),
        alert(result)
    );
}


add(no_1, no_2, no_3);

sub(no_1, no_2);

divide(no_1, no_2);

multiply(no_1, no_2);