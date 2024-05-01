// My SOlution
let x = 'developer';

const y = x.substring(1);

x = x[0];

let str = x.toUpperCase(x);

str = str.concat(y);

console.log(str);

// Solution 1
const myString = 'developer';

let myNewString;

myNewString = myString.charAt(0).toUpperCase() + myString.substring(1);

console.log(myNewString);