// const pElem = document.querySelector('.one')
// console.log(pElem);

// const rootP = document.querySelectorAll('#root p')
// console.log(rootP[0]);

// let media = document.createElement('img')

// const root = document.querySelector('#root')

// media.setAttribute('src', 'https://img.goodfon.ru/wallpaper/big/a/69/kartinka-3d-dikaya-koshka.jpg')



// root.append(media)
// //////////////////////////////////////////////////////////////////////////////////////////////////////////
// Написать программу, которая запрашивает у пользователя картинку и ссылку
//  на статью (любую) и формирует в интерфейсе картинку 
// и внизу ссылку, указанную пользователем.

// function createCard(mediaLink, articleLink) {
//     let container = document.createElement('div')
//     let image = document.createElement('img')
//     let a = document.createElement('a')
//     image.setAttribute('src', mediaLink)
//     a.setAttribute('href', articleLink)
//     a.innerText = 'Ссылка на статью'
//     container.append(image, a)
//     document.body.append(container)
// }
// let linkPhoto = 'https://img.goodfon.ru/wallpaper/big/a/69/kartinka-3d-dikaya-koshka.jpg'
// let linkArticle = 'https://www.goodfon.ru/rendering/wallpaper-kartinka-3d-dikaya-koshka.html'
// createCard(linkPhoto, linkArticle)

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Массив из объектов со свойствами link и title. Свойства хранят в себе 
// ссылку на страницу и название страницы соответственно. Напишите цикл, который 
// создаст для каждого объекта ссылку и добавит в #root.

// const arr = [
//     {link: 'https://www.apple.com/', title: 'Apple'},
//     {link: 'https://www.samsung.com/ru/', title: ' Samsung'},
//     {link: 'https://www.mi.com/ru/', title: ' Xiaomi'}
// ]


// for (let i = 0; i < arr.length; i++) {
//     let link = document.createElement('a')
//     link.innerText = arr[i].title
//     link.setAttribute('href', arr[i].link)
    
//     document.body.append(link)
// }

// Создать множество карточек с товарами (на основе массива с объектами. У объекта свойства title, unit_price, count)
// Массив объектов со свойствами title, unitPrice и count
// const card = [
//     {
//         title: 'Milk',
//         unit_price: 50,
//         count: 3
//     },
//     {
//         title: 'ice cream',
//         unit_price: 30,
//         count: 2
//     },
//     { 
//         title: 'chocolate',
//         unit_price: 20,
//         count: 5
//     },
// ]


// //////////////////////////////////////////////////////////////////////////////////////

//   for (let i = 0; i < card.length; i++) {
//     let container = document.createElement('div')

//     container.style = 'border: 2px solid; width: 400px; height: 400px;'

//     let nameProd = document.createElement('h2')

//     nameProd.innerText = 'Название : ' + card[i].title

//     let price = document.createElement('p')

//     price.innerText = 'Цена :' + card[i].unit_price

//     let countProd = document.createElement('p')

//     countProd.innerText = 'Количество: ' + card[i].count


//     container.append(nameProd, price, countProd)
//     document.body.append(container)
// }

// /////////////////////////////////////////////////////////////////////////////////////

// События !!!!

// function click() {
//     alert('hello')
// }

// const  btn1 = document.querySelector('button')

// btn.addEventListener('click',func )
// function func(){
//     console.log('hello');
// }

// const btn1 = document.querySelector('button')
// const count1 = document.querySelector('p')
// let num1 = 0

// btn.addEventListener('click', function() {
//     num = num +1
//    count.innerText = num
// })


// // Слушатель события и функция при наведении
// btn.addEventListener('click', function () {
//     console.log('By')
// })

const btn = document.querySelector('.plus')
const btn1 = document.querySelector('.minus')
const count = document.querySelector('p')
let num = 0

btn1.addEventListener('click', function() {
    num = num -1
   count.innerText = num
})

btn.addEventListener('click', function() {
    num = num +1
   count.innerText = num
})

// Написать программу, которая формирует на основе массива строк множество параграфов и выводит их в интерфейс. При клике на парагараф текст должен меняться на звездочки
const wordsArr = ['hello ', 'how ', 'are ', 'you ', 'i ', 'am ', 'fine']
for (let i = 0; i < wordsArr.length; i++) {
    let p = document.createElement('p')
    p.innerText = wordsArr[i]
    p.addEventListener('click',function (){
        p.innerText = '*'
    })


  
    
    document.body.append(p)
}



