const firstName = 'Michał';
const age = 30;
const workTime = 2

console.log(firstName);
console.log(age)
console.log(`Nazywam się ${firstName} i mam ${age} lat.`);
console.log(`Cześć, miło Cię pzonać, jestem ${firstName} i mam ${age} lat.
Moim głównym zainteresowaniem to fotografia którą zajmuję się od ${workTime} lat.`)

const heading = document.querySelector('.main-heading--js');

heading.innerHTML = `Nazywam się ${firstName} i mam ${age} lat.`