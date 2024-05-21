// function add(a, b) {
//     return a + b;
// }

// Arrow Function Syntax
const add = (a, b) => {
    return a + b;
}

// Implicit Return
const subtract = (a, b) => a - b;

// Can leave off parenthesis with single param
const double = (a) => a * 2;

// Returning an object
const createObject = () => ({
    name: 'Brad'
});

const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function (n) {
    console.log(n);
});

console.log(add(2,1));
console.log(subtract(2,1));
console.log(double(20));
console.log(createObject());