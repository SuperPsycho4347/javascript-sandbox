// document.getELementById()

console.log(document.getElementById('app-title'));
console.log(document.getElementById('app-title').getAttribute('id'));

// set attributes
document.getElementById('app-title').title = "Shopping List"
document.getElementById('app-title').setAttribute('class', 'title')

const title = document.getElementById('app-title')

// get/change content
console.log(title.textContent);
title.textContent = 'Hello World'
title.innerText = 'Hello Again'
title.innerHTML = '<strong>Shopping List</strong>'

// change styles
title.style.color = 'red'
title.style.backgroundColor = 'black'
title.style.padding = '10px'
title.style.borderRadius = '10px'

// document.query.selector()
console.log(document.querySelector('h1'));
console.log(document.querySelector('#app-title'));
console.log(document.querySelector('.container'));