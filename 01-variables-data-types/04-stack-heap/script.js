// Values stored on stack
const name = 'John';
const age = 30;

// Reference values stored in heap
const person = {
    name: 'Brad',
    age: 40,
};

let newName = name;
newName = 'Jonathan';

let newPerson = person;
newPerson.name = 'Bradely';

console.log(name, newName);
console.log(person, newPerson);