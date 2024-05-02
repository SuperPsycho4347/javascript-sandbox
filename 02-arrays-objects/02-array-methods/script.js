const arr = [34, 55, 85, 22];

// arr.push(100);

// arr.pop();

// arr.unshift(99);

// arr.shift();

// arr.reverse();

x = arr.includes(34);

x = arr.indexOf(85);

x = arr.slice(1, 3);

// x = arr.splice(1, 3);

// x = arr.splice(3, 1);

x = arr.splice(1, 3).reverse().toString().charAt(0);

console.log(x);