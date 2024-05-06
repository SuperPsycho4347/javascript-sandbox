// window.alert('Hello');
// console.log(window.innerWidth);

const x = 100;

console.log(x, 'in global');

function run() {
    console.log(window.innerHeight);
}

run();

if (true) {
    console.log(x, 'in block');
}

function add() {
    const y = 50;
    console.log(y);
}
