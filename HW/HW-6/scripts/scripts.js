// Цикл for, который выводит каждое второе число от 0 до 10
console.log("Каждое второе число от 0 до 10:");
for (let i = 0; i <= 10; i += 2) {
   console.log(i);
}

// Цикл for, который выводит все числа от 55 до 20
console.log("Все числа от 55 до 20:");
for (let i = 55; i >= 20; i--) {
   console.log(i);
}

// Массив numbers и вывод всех чисел из массива
const numbers = [3, 5, 11, 2, 8, 1, 6];
console.log("Числа из массива numbers:");
// for (let number of numbers) {
//    console.log(number);
// }
for (let i = 0; i < numbers.length; i++) {
   console.log(numbers[i]);
}


// Создание массива numbers_squared и передача в него квадратов чисел из массива numbers
let numbers_squared = [];
for (let number of numbers) {
    numbers_squared.push(number * number);
}
console.log("Массив numbers_squared:", numbers_squared);

// Переменная last_elem с последним элементом из массива numbers_squared
let last_elem = numbers_squared[numbers_squared.length - 1];
console.log("Последний элемент из массива numbers_squared:", last_elem);

// Формирование строки на основе данных из объекта user
const user = {
   first_name: 'ivan',
   last_name: 'ivanov',
   age: 20,
   salary: 500
};
let userString = `User's name is ${user.first_name.toLowerCase()} ${user.last_name.toLowerCase()}. He is ${user.age} years old.`;
console.log(userString);
