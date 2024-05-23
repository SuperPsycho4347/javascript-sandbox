const colorObj = {
    color1: 'red',
    color2: 'blue',
    color3: 'orange',
    color4: 'green'
}

for (const key in colorObj) {
    console.log(key, colorObj[key]);
}

const bookArr = ['War And Peace', 'Anna Karenina', 'Hamlet']

for (const book in bookArr) {
    console.log(book, bookArr[book]);
}