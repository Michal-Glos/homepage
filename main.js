const firstName = 'Michał';
const age = 30;
const workTime = 2

console.log(firstName);
console.log(age)
console.log(`Nazywam się ${firstName} i mam ${age} lat.`);
console.log(`Cześć, miło Cię pzonać, jestem ${firstName} i mam ${age} lat.
Moim głównym zainteresowaniem to fotografia którą zajmuję się od ${workTime} lat.`)

if (2 == '2') {
    console.log('Java to nie Javascript')


}

const myNumber = 11;
switch (myNumber) {
    case 7:
        console.log('Jestem siódemką');
    break;
    case 9:
        console.log('Jestem dziewiątką');
    break;
    default:
        console.log('Jestem czymś innym');
}

if (32>20) {
    console.log('To prawda')        
} else {
    console.log('To nie prawda')
}

(32>20) ? console.log('to prawda'): console.log('to nie prawda');

const button = document.querySelector('.action--js')

console.log(button)

const myClick = () => {
    const heading = document.querySelector('.main-heading--js');

    heading.innerHTML = `Siema mordeczki, witam na mojej pro elo stronce`
}

button.addEventListener('click', () => {
    const heading = document.querySelector('.main-heading--js');
    heading.innerHTML = `Siema mordeczki, witam na mojej pro elo stronce`
    heading.classList.toggle('klasa-z-js')
    console.log(heading.classList.contains('main-heading'))
});

const hamburger = document.querySelector('.hamburger--js');

hamburger.addEventListener('click', () => {
    const nav = document.querySelector('.navigation--js');
    nav.classList.toggle('navigation--open');
})