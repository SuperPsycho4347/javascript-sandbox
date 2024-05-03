let x;

const toDo = new Object();

toDo.id = 1;
toDo.name = 'Buy milk';
toDo.completed = 'false';

x = toDo;

const person = {
    address: {
        coords: {
            lat: 42.984,
            lng: -56.66,
        },
    },
};

x = person.address.coords.lat;

const obj1 = {
    a: 1,
    b: 2,
};

const onj2 = {
    c: 3,
    d: 4,
};

const obj3 = {...obj1, ...onj2};
const obj4 = Object.assign({}, obj1, onj2);

const toDo1 = [
    {id: 1, name: 'Buy Milk'},
    {id: 2, name: 'Work out'},
    {id: 3, name: 'Take out trash'},
];

x = toDo1[0].name;

x = Object.keys(toDo);

x = Object.keys(toDo).length;

x = Object.values(toDo);

x = Object.entries(toDo);

x = toDo.hasOwnProperty('name');

console.log(x);