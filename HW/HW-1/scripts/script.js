const pElem = document.querySelector("p")
console.log(pElem) // тип переменной pElem = Node(узел)
// querySelector находит первый элемент который соотвествует указателью
const pElems = document.querySelectorAll("p")
console.log(pElems) // NodeList // список узлов
// querySelectorAll находит все элементы которые соотвествуют указателью

for (let index = 0; index < pElems.length; index++) {
console.log(pElems[index])
}
// 1 - на NodeList не работают методы массивов из js (push, pop, shift, unshift, splice...)
// 2 - NodeList могут быть жывими. т.е. реагировать на изменения DOM дерева
// 3 - тип данных NodeList существует только в окружении браузера а типа данных Array(массив) 
//существует в самом javascript_е

// =============== innerText, innerHtml
const pElem_1 = document.querySelector(".p_1")
// innerText возвращает только текстовой контент
console.log(pElem_1.innerText)
// innerText возвращает весь контент этого элемента
console.log(pElem_1.innerHTML)

pElem_1.innerText = "Edit p from js"
console.log(pElem_1.innerText) // "Edit p from js"



//Написать программу, которая находит параграфы по классу и заменяет 
//в каждом из них текст на “привет”.
const helloPElems = document.querySelectorAll(".hello_p")
for (let i = 0; i < helloPElems.length; i++) {
helloPElems[i].innerText = "Привет"
}
//Найти элемент с идентификатором main и записать в него текст 
//“Я главный элемент”. 



const mainPElem = document.querySelector("#main")
 mainPElem.innerText = "Я главный элемент"
 console.log(mainPElem.innerText);

 // tag name => p, div, a
// class name => .my_class, .container
// id name => #id_name, #main

// Найти второй элемент параграфа внутри div с классом box_2 
//и записать в него текст "Второй параграф”.
// first-child
// last-child
// ntn-child (номер)
const secP = document.querySelector(".box_2 p:nth-child(2)")
secP.innerText = "Второй параграф"

// ================= attribute =================
const aElem = document.querySelector("a")
console.log(aElem.href)
// setAttribute(название аттрибута, новое значение)
// target="_blank"
aElem.setAttribute("href", "https://developer.mozilla.org/en-US/") // меняем значение уже существуюшего аттрибута
console.log(aElem.href)
aElem.setAttribute("target", "_blank") // Добавляем новый аттрибут
aElem.setAttribute("my-attribute", "test value") // создаем свой аттрибут

// Написать скрипт, который находит картинки в блоке с классом main и первым 5 картинкам меняет url на указанное значение.
// https://bairesdev.mo.cloudinary.net/blog/2023/08/How-to-Choose-the-Right-Programming-Language-for-a-New-Project.jpg?tx=w_1920,q_auto

const imgElems = document.querySelectorAll(".main img")
for (let i = 0; i < 5; i++) {
imgElems[i].setAttribute("src", "https://bairesdev.mo.cloudinary.net/blog/2023/08/How-to-Choose-the-Right-Programming-Language-for-a-New-Project.jpg?tx=w_1920,q_auto")
}

// const imgElems = document.querySelectorAll(".main img:nth-child(-n+5)")
// nth-child(-n+5) возвращает первые 5 картинки
// for (let i = 0; i < imgElems.length; i++) {
// imgElems[i].setAttribute("src", "https://bairesdev.mo.cloudinary.net/blog/2023/08/How-to-Choose-the-Right-Programming-Language-for-a-New-Project.jpg?tx=w_1920,q_auto")
// }