document.getElementById('app-title').title = 'Shopping List'
document.getElementById('app-title').setAttribute('class', 'title');

const title = document.getElementById('app-title')

console.log(title);

// get/change content
console.log(title.textContent);
title.textContent = 'Hello World'