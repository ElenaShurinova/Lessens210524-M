// let a= 24
// a = 1

// const b = 'hhh'

// console.log(b, a)

// console.log(typeof(b));

// console.log(5<5)
// console.log(5>5)
// console.log(5==5)

// let num = prompt()


// if( num > 0) {
//     console.log('положительное')
// }

// if(age > 18) {
//     alert('вам доступ разрешен');
// } else {
//     alert('вам нет 18')
// }

// ...............................................................

// if(age < 12) {
//     console.log('price 100$');
// }else if(age < 18) {
//     console.log('price 200$');
// } else if(age > 18) {
//     console.log('price 500$');
// }

// ...............................................


// let num1 = 45


// let num2 = 46


// if (num1 > num2) {
//     maxNumber = num1;

// }
// else {
//     maxNumber = num2
// }

// console.log(maxNumber)

// .....................................................

// Запросить у пользователя первое число
// let num11 = prompt("Введите первое число:");

// // Преобразовать введенное значение в число
// num11 = Number(num11);

// // Запросить у пользователя второе число
// let num22 = prompt("Введите второе число:");

// // Преобразовать введенное значение в число
// num22 = Number(num22);

// // Определить наибольшее число
// let maxNumber;
// if (num11 > num22) {
//     maxNumber = num11;
// } else {
//     maxNumber = num22;
// }

// // Вывести наибольшее число в консоль
// console.log("Наибольшее число: " + maxNumber);

// ..........................................................


// Запросить у пользователя число
// let num = prompt("Введите число:");

// // Преобразовать введенное значение в число
// num = Number(num);

// // Проверить, является ли число положительным, отрицательным или равным нулю и вывести соответствующее сообщение
// if (num > 0) {
//     console.log("Число положительное");
// } else if (num < 0) {
//     console.log("Число отрицательное");
// } else {
//     console.log("Число равно нулю");
// }
// ........................................

// array(Массив)
// const array = [2, 5, 1, 9, 'text', true]
// //////////////0    1 2
// console.log(array);
// // присвоение нового значения
// array[1] = 'hello'
// console.log(array[1]);

// console.log(array);


// // ......................................

// const arrBascet = []
// console.log(arrBascet);

// arrBascet.push('milk') // добавляет элемент в конце
// arrBascet.push('coffe')
// arrBascet.push('bread')
// arrBascet.unshift('cola')//добавляет элемент в начале

// console.log(arrBascet);

// arrBascet.pop() // удаляет в конце
// arrBascet.pop()
// arrBascet.shift() // удаляет в начале

// console.log(arrBascet);

// ...................................................


// const arrBascet = []
// arrBascet.push(prompt('введите продукт'))
// arrBascet.push(prompt('введите продукт'))
// arrBascet.push(prompt('введите продукт'))

// console.log(arrBascet);   // первый вариант


// let prduct1 = prompt('введите продукт')
// let prduct2 = prompt('введите продукт')
// let prduct3 = prompt('введите продукт')

// arrBascet.push(prduct1, prduct2, prduct3)
// console.log(arrBascet);   // второй вариант


// Написать программу, в которой объявлен массив с 5 числовыми элементами. 
// Программа должна заполнить 
// новый пустой массив квадратами чисел из первого массива.

const array = [5, 2, 3, 4, 5]

const newArr = []

newArr.push(array[0] * array[0])
newArr.push(array[1] * array[1])
newArr.push(array[2] * array[2])
newArr.push(array[3] * array[3])
newArr.push(array[4] * array[4])

console.log(array);
console.log(newArr);

