// Функция, которая возвращает наименьшее из двух чисел
function minNumber(a, b) {
    // return Math.min(a, b);
    if (a > b) {
        return b;
    } else {
        return a;
    }
}
console.log(minNumber('3', 5));

// Функция, которая выводит в консоль все четные числа от большего к меньшему
function printEvenNumbersDescending(a, b) {
    let start = Math.max(a, b);
    let end = minNumber(a, b);

    for (let i = start; i >= end; i--) {
        if (i % 2 == 0) {
            console.log(i);
        }
    }
}

// Функция power, которая возвращает число в указанной степени (по умолчанию 2)
function power(base, exponent = 2) {
    // return Math.pow(base, exponent);
    let result = 1;
    for (let i = 1; i <= exponent; i++) {
        result *= base;
    }
    return result;
}
console.log(power(5));
console.log(power(5, 1));
console.log(power(5, 3));

// Функция, которая считает сумму чисел от 1 до n
function sumFromOneToN(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}
console.log(sumFromOneToN(5));

// Функция, которая считает сумму четных и нечетных чисел от n до m
function sumEvenAndOddNumbers(n, m) {
    let sumEven = 0;
    let sumOdd = 0;

    for (let i = n; i <= m; i++) {
        if (i % 2 == 0) {
            sumEven += i;
        } else {
            sumOdd += i;
        }
    }

    console.log("Сумма четных чисел:", sumEven);
    console.log("Сумма нечетных чисел:", sumOdd);
}

// Функция, которая возвращает первый самый длинный элемент массива строк
function firstLongestElement(strings) {
    if (strings.length == 0) {
        return null;
    }

    let indexLongest = 0;
    for (let i = 1; i < strings.length; i++) {
        if (strings[i].length > strings[indexLongest].length) {
            indexLongest = i;
        }
    }
    return strings[indexLongest];
}

// Пример использования функции firstLongestElement
const strings = ['one', 'two', 'three', 'seven'];
console.log(firstLongestElement(strings));
