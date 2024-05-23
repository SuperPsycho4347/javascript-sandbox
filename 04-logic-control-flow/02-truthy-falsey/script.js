const  x = {}

if(x) {
    console.log('This is truthy');
} else {
    console.log('This is falsey');
}

console.log(Boolean(x));

// Caveats
const children = 0

if (children) {
    console.log(`You have ${children} children`);
} else {
    console.log('Please enter number of children');
}

// Checking for empty arrays
const posts = []

if (posts.length > 0) {
    console.log('List Posts');
} else {
    console.log('No Posts to list');
}

// Checking for empty objects
const user = {
    name: 'Brad'
}

if (Object.keys(user).length > 0) {
    console.log('List User');
} else {
    console.log('No User');
}

// Loose Equality
console.log(false === 0);