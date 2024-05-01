let x;

const name = 'John';
const age = 30;

x = 'Hello, my name is ' + name + ' and I am ' + age;

// Template Literals
x = `Hello, my name is ${name} and my age is ${age}`;

// Properties & Methods
const s = new String('          Hello World');

x = typeof s;

x = s.length;

// Access value by index
x = s[0];

x = s.__proto__;

x = s.toUpperCase();
x - s.toLowerCase();

x = s.charAt(0);

x = s.indexOf('e');

x =s.substring(1, 5);

x =s.trim();

x = s.replace('World', 'John');

x = s.includes('Hello');

console.log(x);