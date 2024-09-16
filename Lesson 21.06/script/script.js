// let result = prompt('enter your name');

// Задание: Написать программу, которая запрашивает у пользователя Имя, Фамилию, Возраст и выводит в консоль строку 
// “Hello, my name is UsernName UserSurname. I’m UserAge”. 
// Для вывода использовать два варианта: конкатенация и интерполяция.

// // Запрашиваем у пользователя имя, фамилию и возраст
// const firstName = prompt("Введите ваше имя:");
// const lastName = prompt("Введите вашу фамилию:");
// const age = prompt("Введите ваш возраст:");

// Вывод строки с использованием конкатенации
// console.log("Hello, my name is UsernName UserSurname. I'm UserAge." + firstName + " " + lastName + " and I am " + age + " years old.");

// // Вывод строки с использованием интерполяции (шаблонная строка)
// console.log(`Hello, my name is ${firstName} ${lastName} and I'm ${age} years old.`);

// /////////////////////////////////////////////////////////////////////////////////////////////////////

// // // Задание : Написать программу, которая считывает два числа (объявляем две переменные (a b) и записываем туда результат работы двух вызовов prompt) и выводит их разницу, сумму и произведение 
// (“Разность чисел a и b равна sub, сумма чисел a и b равна sum, произведение чисел a и b равно mult”)


// let a = +prompt('enter the farst number');
// let b = +prompt('enter the second number');



// // Вычисляем разность, сумму и произведение
// let SUB = a - b;
// let SUM = a + b;
// let MULT = a * b;

// // Выводим результаты
// console.log(`Разность чисел a и b равна ${SUB}`);
// console.log(`Сумма чисел a и b равна ${SUM}`);
// console.log(`Произведение чисел a и b равно ${MULT}`);


// ///////////////////////////////////////////////////////////////////////
// if()
// esle if()
// else()

// Если число положительное или делится на 3 без остатка, выводим 'true'
// Если нет выводим 'false'
// if()
// && and
// || or
// num % 3 == 0

// let num = prompt('введите число')

// if (num > 0 && num % 3 === 0) {
//     console.log('true');
// }
// else{
//     console.log('false');
// }
    // //////////////////////масив///////////////////////////////////////////////

// let array = ['value1', 'value2', 'value3'];
// console.log(array[0]);
// array.push('value4');
// array.pop();
// array.shift();
// array.unshift('value0');

// // ///////инкримент   дикремент//////////////////////////////////////////////////////////

// let i = 0;
// i=i+1
// i++
// ++
// i=i-1
// i--
// --


let fruits = ['Apple', 'Banana', 'Orange', 'Avocado', 'Pineapple'];
// console.log(fruits.length);
// console.log(fruits[1]); //Banana
// console.log(fruits[fruits.length-1]); //Pineapple
// fruits.push('Strawberry');
// fruits.pop();
// fruits.unshift('Mango');
// fruits.shift();
// splice(start, deleteCount, elem1, elem2);


// // Удалить 2 элемета из массива начиная со второго
// fruits.splice(1, 2);


// // Добаить Pear и Berries после первого элемента
// fruits.splice(1, 0, 'Pear', 'Berries');


// // Заменить первые два элемента на 'Mandarin', 'Orange'
// fruits.splice(0, 2, 'Mandarin', 'Orange');
// console.log(fruits);

// // Добавить три фрукта apple, kiwi, cocount после второго элемента
// // Удалить четвертый элемент
// // Заменить 3 и 4 элемент на Pomegrante, Lime

// // Добавляем три фрукта после второго элемента (индекс 1)
// fruits.splice(2, 0, "Apple", "Kiwi", "Coconut");
// console.log(fruits); // Для проверки промежуточного состояния

// // Удаляем четвертый элемент (индекс 3)
// fruits.splice(3, 1);
// console.log(fruits); // Для проверки промежуточного состояния

// // Заменяем третий и четвертый элемент на "Pomegrante" и "Lime"
// fruits.splice(2, 2, "Pomegrante", "Lime");
// console.log(fruits); // Финальный результат


// Вывести в консоль все фрукты из массива fruits
// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[3]);
// console.log(fruits[4]);
// for(let i = 0; i < fruits.length; i++){
//     console.log(fruits[i]);
// }
// ////////////////////////////////////////////////////////////////////////////////////////

// // Есть массив из чисел:
// let numbers = [1, 4, 2, 0, -12, 5, 23, -4, 0, -1, -6, 9];
// // Вывести только положительные числа массива

// for(let i = 0; i < numbers.length; i++){
//     if(numbers[i] > 0){
//         console.log(numbers[i]);
//     }
// }
// вывести отрицательные
// for(let i = 0; i < numbers.length; i++){
//     if(numbers[i] % 2 !== 0){
//         console.log(numbers[i]);
//     }
// }
/////////////////////////////////////////////////////////////////////////////////////

// Найти сумму всех элементов массива
// let sum = numbers[0] + numbers[1] + numbers[2] + numbers[3];
// let sum = 0;
// // sum = sum + numbers[0]; // 0 + 1
// // sum = sum + numbers[1]; // 1 + 4
// // sum = sum + numbers[2]; // 5 + 2
// for(let i = 0; i < numbers.length; i++){
//     sum = sum + numbers[i];
//     // console.log(sum);
// }
// console.log(sum);

// Найти сумму положительных чисел массива
let numbers = [1, 4, 2, 0, -12, 5, 23, -4, 0, -1, -6, 9];
let sum = 0;
for(let i = 0; i < numbers.length; i++){
    if(numbers[i] > 0){   
        sum = sum + numbers[i]  
    
    }
}

console.log(sum);