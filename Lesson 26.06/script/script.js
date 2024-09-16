console.log(document.querySelector('h1'));
document.querySelector('p').innerText = 'i new text'


// // меняем текс и цвет в одном параграфе///////////////////////
// const pElem = document.querySelector('p')
// pElem.innerText = 'ich lebe in Berlin'
// pElem.style.color = 'blue'



// // меняем текс во всех параграфах //////////////////////
// const pElems = document.querySelectorAll('p')

// pElems[0].innerText = 'text'

// for (let i = 0; i < pElems.length; i=i+2) {
//     pElems[i].innerText = 'text'
    
// }

// const itemP = document.querySelector('#item')
// itemP.innerText = 'fffffffffffffffff'


// const elemP = document.querySelector('.elem')
// elemP.innerText = 'fffffffffffffffff'

// const image = document.querySelector('img')
// image.setAttribute('src','https://png.pngtree.com/thumb_back/fw800/background/20230612/pngtree-images-of-winter-and-white-background-wallpapers-free-download-image_2935697.jpg')
// image.setAttribute('width', '500px')
// image.setAttribute('alt', ' ich bin bild')


// console.log(image);

// let media = document.querySelectorAll('img')

// media[0].setAttribute('src', 'https://png.pngtree.com/thumb_back/fw800/background/20230612/pngtree-images-of-winter-and-white-background-wallpapers-free-download-image_2935697.jpg')

// for (let i = 0; i < 5; i++) {
//     media[i].setAttribute ('src', 'https://png.pngtree.com/thumb_back/fw800/background/20230612/pngtree-images-of-winter-and-white-background-wallpapers-free-download-image_2935697.jpg')
    
// }

// document.createElement(('p'))


// 1. Создаем элемент
let newElem = document.createElement('box')

// // 2. Добавляем контент
// newElem.innerText = 'i am new elem'

// // 3. Находим блок в который мы хотим добавить новый элемент
// let box = document.querySelector('.box')

// // 4. В найденый блок добавляем созданый элемент
// box.append(newElem)   //добавляет внутрь блока в конце списка
// box.prepend(newElem)   //добавляет внутрь блока в начале списка

// Создать множество параграфов с числами от 0 до 19.
const rootBox = document.querySelector('#root')

for (let i = 0; i < 20; i++) {
    let par = document.createElement ('p')
   par.innerText = i
   rootBox.append(par)
}

// Написать цикл, который проходится по массиву строк 
// и для каждого создает параграф и добавляет в #root.

const wordsArr = ['hello ', 'how ', 'are ', 'you ', 'i ', 'am ', 'fine']

for (let i = 0; i < wordsArr.length; i++) {
    let par = document.createElement ('p')
   par.innerText = wordsArr[i]
   rootBox.append(par)
}
