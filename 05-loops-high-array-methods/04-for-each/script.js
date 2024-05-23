const socials = ['Twitter', 'LinkedIn', 'Facebook', 'Instagram']

// console.log(socials.__proto__);

// socials.forEach(function(social) {
//     console.log(social);
// })

socials.forEach((social, index, arr) => console.log(`${index} - ${social}`))