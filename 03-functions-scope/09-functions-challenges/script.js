// Challenge 1
const getCelsius = (temp) => ((temp - 32) * 5 / 9);

console.log(`The temperature is ${getCelsius(32)} degree Celsius`);

// Challenge 2
function minMax(arr) {
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    return {
        min,
        max,
    };
}

const arr = [1, 2, 3, 4, 5];

console.log(minMax([1, 2, 3, 4, 5]));