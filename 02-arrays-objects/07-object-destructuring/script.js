const firstName = 'John';
const lastName = 'Doe';
const age = 30;

const person = {
    firstName: firstName,
    lastName: lastName,
    age: age,
};

console.log(person.age);

// Destructuring

const toDo = {
    id: 1,
    title: 'Take trash out',
    user: {
        name: 'John',
    },
};

const {id: todoID, title, user: {name}} = toDo;

console.log({todoID});

// Destructure Arrays
const numbers = [23, 67, 82, 99];

const [first, second, ...rest] = numbers;

console.log(first, second, rest);