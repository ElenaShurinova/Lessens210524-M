// Запрашиваем число через prompt и выводим 10% от числа
let userInput = prompt("Введите число:");
let number = parseFloat(userInput);

if (!isNaN(number)) {
    let tenPercent = number * 0.1;
    console.log("10% от введенного числа:", tenPercent);
} else {
    console.log("Вы ввели не число.");
}

// Получаем два числа и выводим наименьшее из них
let firstNumber = parseFloat(prompt("Введите первое число:"));
let secondNumber = parseFloat(prompt("Введите второе число:"));

if (!isNaN(firstNumber) && !isNaN(secondNumber)) {
    let minNumber = Math.min(firstNumber, secondNumber);
    console.log("Наименьшее число:", minNumber);
} else {
    console.log("Вы ввели не числа.");
}

// Считываем число с помощью prompt
let userInput1 = prompt("Введите число:");

// Преобразуем введенную строку в число
let number1 = parseFloat(userInput1);

// Проверяем, является ли введенное значение числом
if (!isNaN(number1)) {
    // Проверяем условие и выводим соответствующее сообщение
    if (number1 < 100) {
        console.log("Число меньше 100.");
    } else if (number1 > 100) {
        console.log("Число больше 100.");
    } else {
        console.log("Число равно 100.");
    }
} else {
    // Если введенное значение не является числом, выводим сообщение об ошибке
    console.log("Вы ввели не число.");
}

// Запрашиваем у пользователя его имя и возраст и выводим соответствующее приветствие
let userName = prompt("Введите ваше имя:");
let userAge = parseInt(prompt("Введите ваш возраст в годах:"));

if (!isNaN(userAge)) {
    if (userAge >= 18) {
        console.log("HELLO", userName);
    } else {
        console.log("HI", userName);
    }
} else {
    console.log("Вы ввели некорректный возраст.");
}