const square = document.getElementById('square');
const changeButton = document.getElementById('changeButton');

changeButton.addEventListener('click', function() {
    square.style.backgroundColor = 'green';
    square.style.width = '100px';
    square.style.height = '100px';
});

const square1 = document.getElementById('square1');
const changeButton1 = document.getElementById('changeButton1');

changeButton1.addEventListener('click', function() {
    square1.style.backgroundColor = '#1f1fb8';
    console.log(`Updated color: ${square1.style.backgroundColor}`);
});


const square2 = document.querySelector('.square2');
const incButton = document.querySelector('#increaseButton2');

incButton.addEventListener('click', function() {
    const widthSq3 = square2.style.width;
    const heightSq3 = square2.style.height;
    console.log(square2)
    console.log(square2.style)
    console.log(widthSq3);
    console.log(heightSq3);

    console.log(`${parseInt(square2.style.width) + 20}px`);
    console.log(`${parseInt(square2.style.height) + 20}px`);
    square2.style.width = `${parseInt(widthSq3) + 20}px`;
    square2.style.height = `${parseInt(heightSq3) + 20}px`;
});

const addButton = document.getElementById('addButton');
const divRoot = document.querySelector('.root');

addButton.addEventListener('click', function() {
    const paragraph = document.createElement('p');
    paragraph.textContent = 'This is a blue paragraph.';
    paragraph.classList.add('blue');
    divRoot.appendChild(paragraph);
});


const addButton1 = document.getElementById('addButton1');
const root1 = document.querySelector('.root1');
let isBlue = true;

addButton1.addEventListener('click', function() {
    const paragraph = document.createElement('p');
    paragraph.textContent = isBlue ? 'This is a blue paragraph.' : 'This is a green paragraph.';
    paragraph.classList.add(isBlue ? 'blue' : 'green');
    root1.appendChild(paragraph);
    isBlue = !isBlue;
});