// Function
// showMessage('Tom'); //Hello Tom
// showMessage(user_name); //Cannot access 'user_name' before initialization
// let user_name = 'John';
// // showMessage(user_name); //Hello John
// function showMessage(name){
//     console.log(`Hello ${name}`);
// }
// showMessage(user_name); //Hello John
//example 1
// function showMessage1(){
//     let first_name = 'Bob';
//     console.log(`Hello ${first_name}`);
// }
// showMessage1(); // Hello Bob

//example 2
// let first_name = 'Bob';
// function showMessage1(){
//     console.log(`Hello ${first_name}`);
// }
// showMessage1(); // Hello Bob (ГЛОБАЛЬНОЕ ВНЕ ФУНКЦИИ!!!!!!!!)
//example 3
// let first_name = 'Bob';
// function showMessage1(){
//     let first_name = 'Tom';
//     console.log(`Hello ${first_name}`);
// }
// showMessage1(); // Hello Tom  (ЛОКАЛЬНОЕ ВНУТРИ ФУНКЦИИ!!!!!)


// // // Написать функцию, которая принимает 2 числа и возвращает 1, 
// // если первое число больше, чем второе; -1, 
// // если первое число меньше, чем второе, и 0, если числа равны.

// function num (a, b){
//     if(a > b){
//         return 1;
//     } else if (a < b) {
//         return -1;
//     }else{
//         return 0;

//     }
// }
// console.log(num (5, 3));
// console.log(num (2, 4));
// console.log(num(7, 7));

// // В следующих задачах будет использоваться массив из объектов, каждый из которых описывает определенный товар. 
// // Пример массива
// let arr = [
//     {
//         id: 1,
//         title: "bicycle",
//         price: 45000,
//         discount: 10
//     },
//     {
//         id: 2,
//         title: "roller-skates",
//         price: 15000,
//         discount: 5
//     },
//     {
//         id: 3,
//         title: "Kick scooter",
//         price: 10000,
//         discount: 30
//     },
//     {
//         id: 4,
//         title: "skis",
//         price: 25000,
//         discount: 20
//     },
//     {
//         id: 5,
//         title: "skate",
//         price: 10000,
//         discount: 0
// }
// ];
// // Написать цикл, который выводит только названия товаров.
// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i].title);
// }

// Написать цикл, который выводит для каждого товара строку по маске “<название> (<цена>)”
// // bicycle (45000)
// console.log(`${arr[0].title} (${arr[0].price})`);

// for(let i = 0; i < arr.length; i++){
//     console.log(`${arr[i].title} (${arr[i].price})`);
//     // console.log(arr[i].title + ' (' + arr[i].price + ')');
// }

// // ///////////////////////////////////////////////////////////////////////////

// // Испольуя цикл вывести все однозначные положительные числа
// // 1-9(вкл.)

// for (let i = 1; i <= 9; i++) {
// console.log(i);
// }

// // /////////////////////////////////////////////////////////////////////

// // Вывести все двузначные положительные числа, которые делятся на 3 без остатка.
// 10-100(не вкл.)
// 12 15 18 21 24...99

// for (let i = 10; i < 100; i++) {

//     if (i % 3 === 0)
//     console.log(i);
//     }

    // // Есть массив:
// let numbers = [12, 0, -5, -23, 6, 34, 58, 2, 70, 0, -4, 7];
// Вывести из массива все положительные четные числа
// > 0 и  %2 ==0

// for ( let i = 0; i < numbers.length; i++){
//     if (numbers[i] > 0 && numbers[i] % 2 === 0) {
//         console.log(numbers[i]);
//     }
// }

// Дан массив numbers. Сформировать новый массив numbers_squared и передать в него 
// все элементы из массива numbers, возведенные в квадрат

// let numbers_squared = [144, 0, 25, ...];

// let numbers_squared = [];
// for (let i = 0; i < numbers.length; i++){
//     // console.log(numbers[i] ** 2);
//     numbers_squared.push(numbers[i]**2)
    
// }
// console.log(numbers_squared);

// Дан массив numbers. Сформировать новый массив even_numbers и передать 
// в него все четные элементы из массива numbers

// Массив чисел
const numbers = [10, -5, 0, 23, -1, 7, -9, 8];

// Новый массив для хранения четных чисел
const even_numbers = [];

// Цикл, который проходит по каждому числу и добавляет только четные числа в массив Even_Numbers
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        even_numbers.push(numbers[i]);
    }
}

// Выводим массив четных чисел
console.log(even_numbers);

// Написать функцию, получающую на вход два числа. 
// Если оба числа чётные - функция возвращает их произведение. 
// Если оба числа нечётные - функция возвращает их сумму. Если одно из чисел чётное, 
// а второе нечётное - функция возвращает это нечётное число.

// function numbers_Two(num1, num2) {
//     if (num1 % 2 == 0 && num2 % 2 == 0) {
//         return num1 * num2;
//     }
//     else if (num1 % 2 != 0 && num2 % 2 != 0) {
//         return num1 + num2;
//     }
    //    else if (num1%2==0 && num2%2!=0){
    //     return num2
    //    }
    //    else{
    //     return num1
    //    }
    //    v2
//     else {
//         if (num1 % 2 != 0) {
//             return num1
//         }
//         else {
//             return num2
//         }

//     }
// }
// let num1 = prompt('enter the number');
// let num2 = prompt('enter the number');
// console.log(numbers_Two(num1, num2));
//     console.log(numbers_Two(21, 33))

    // Напишите функцию, которая принимает массив чисел и возвращает новый массив, содержащий только числа больше определенного порога(15).
let numbers1 = [12, 0, -5, -23, 6, 34, 58, 2, 70, 0, -4, 7];
function getNewArray(numbers1){
    let new_array = [];
    for(let i = 0; i < numbers1.length; i++){
        if(numbers1[i]> 15) {
            new_array.push(numbers1[i])
        }
    }
    return new_array;
}
console.log(getNewArray(numbers1));