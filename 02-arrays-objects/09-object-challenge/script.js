const library = [
    {
        title: 'Overcoming Gravity',
        author: 'Matt Striker',
        status: {
            own: true,
            reading: false,
            read: false,
        },
    },

    {
        title: 'Overcoming Isometrics',
        author: 'Jim Jones',
        status: {
            own: true,
            reading: false,
            read: false,
        },
    },

    {
        title: 'History Of Western Philosophy',
        author: 'Bertrand Russell',
        status: {
            own: true,
            reading: false,
            read: false,
        },
    },
];

library[0].read = true;
library[1].read = true;
library[2].read = true;

const { title: firstBook } = library[0]; 

console.log(firstBook);

const libraryJSON = JSON.stringify(library);

console.log(libraryJSON);