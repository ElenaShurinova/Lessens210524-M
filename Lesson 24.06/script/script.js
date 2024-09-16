// function func() {
//     console.log('hi');
// }
// func()

// function sqrt(){
//     console.log(prompt() **2);
// }
// sqrt()

// Объявить функцию, которая считывает значение через prompt и 
// выводит “ДА” если число четное и “НЕТ” в ином случае.


// function sqrt(){
//     console.log(prompt() **2);
// }

// func()

// function oddOrEven() {
//     if (prompt() % 2 === 0) {
//         console.log('да');
//     } else {
//         console.log('нет');
//     }
// }
// // ///////////////////////////////////////////////////////////////////////////

// oddOrEven()

// function func(a, b) {
//     console.log(a ** b);
    
// }
// func(5, 3)

// func(2, 9)

// Создать функцию, которая в качестве аргументов 
// получает два числа и выводит в консоль наибольшее.

findLargestNumber(9, 10)

function findLargestNumber(num1, num2) {
    if (num1 > num2) {
        console.log(`${num1} Больше` );
    } else {
        console.log(`${num2} Больше` );
    }
}



findLargestNumber(56, 10)
findLargestNumber(23, 10)
findLargestNumber(9, 4546)


// ///////////////////////////////////////////////////////////////////////////



// Описать функцию, которая получает число и 
// возвращает true, если число четное и false в ином случае.

// function func(num) {
//     if (num  % 2 === 0) { 
//         return true


//     } else {
//         return false
//     }
       
// }


// let res = func(6)
// console.log(res);

// // Описать функцию, которая получает в качестве аргумента число и возвращает 
// // массив из чисел от 0 до указанного числа.

// function func(num) {
//     let arr = [];
//     for (let i = 0; i <= num; i++){
//         arr.push (i)
//     }
//     return arr


    
// }

// console.log(func(100));
// console.log(func(3));

// // //////////////////////////////////////////////////////////////////////

// // область видимости 

// let array = [1, 3, 6, 36]
// let sum = 0
// for (let i = 0; i < array.length; i++) {
//     sum = sum + array[i]
//     console.log(sum);
// }
 


// let global = 'глобальная область видимости'
// let a = 0
// console.log(a);
// function name() {
//     a = 10
//     // let a = 15

//     // локальная область видимости
//     console.log(a);
// }

// name()

// for (let i = 0; i < 5; i++) {
//     let a = 10
//     // локальная область видимости
//     console.log(a);
// }

// if (2 < 5) {
//     let a = 5
//     console.log(a);
//     // локальная область видимости
// }
// // let a = 0

// console.log(a);


// function declaration /////////////////////////////////

// function declaration

// function func(a, b) {
//     let res = a + b
//     return res
// }
// console.log(func(1, 6));

// // Function Expression
// let func2 = function (a, b) {
//     let res = a + b
//     return res
// }
// console.log(func2(4, 8));

// // arrow function
// let func3 = (a, b) => {
//     let res = a + b
//     return res
// }

// let func4 = (a, b) => a + b
    


// console.log(func4(5, 4));

// Напишите функцию, которая в качестве аргументов получает два 
// числа и возвращает 
// массив чисел со значениями от меньшего числа к большему.

function func(a, b) {
    let arr = [] // обЪявлен массив
    let start // меньшее 
    let end // большее
    if (a > b) { // если а больше b то b будет началом а "а" будет концом
        start = b
        end = a
    } else { 
        start = a
        end = b
    }

    for (let i = start; i < end; i++) {
            arr.push(i)
    }
    for (let i = start; i < end; i++) {
        arr.push(i)
}
    return arr
}


let res = func(4, 23)

console.log(res);

// ////////////////////////////////////////////////////////////////////////

function func(a, b) {
    let arr = [] // обЪявлен массив
    let start // меньшее 
    let end // большее
    if (a > b) { // если а больше b то b будет началом а "а" будет концом
        start = b
        end = a
    } else { 
        start = a
        end = b
    }
    for (let i = end; i > start; i--) {
                    //   23 > 4
                    //   22 > 4
                    //   ...
                    //   5 > 4
                    //   4 > 4
        arr.push(i)
}
    return arr
}

// 1) Сделай функцию, которая принимает массив любых целых чисел, 
// которая возращает истинну, если все элементы четные, 
// если бы хотя бы один элемент не четный, то false.