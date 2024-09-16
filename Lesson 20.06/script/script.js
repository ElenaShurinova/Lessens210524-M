
// вывести в квадрат числа из первого масива  в новый..................
// const arr = [1, 5, 3, 7, 9]

// const newArr = []

// for (let i =0; i < arr.length; i++){
//     newArr.push(arr[i]**2)

// console.log(newArr);

// }

// // вывести только положительные значения.................

// const elem = [-2, 34, -6, -7, 23, 4, 6, -45, 9]

// for (let i =0; i < elem.length; i++){
//     if(elem[i] % 2 === 0){
//         console.log(elem[i])
//     }

// }
// расклад цикла ..........................
// if (elem[0] > 0) {
    // console.log(elem[0]);{}

// if (elem[1] > 0) {
//     console.log(elem[1]);
// }
// if (elem[2] > 0) {
//     console.log(elem[2]);
// }
// if (elem[3] > 0) {
//     console.log(elem[3]);
// }
// if (elem[4] > 0) {
//     console.log(elem[4]);
// }
// if (elem[5] > 0) {
//     console.log(elem[5]);
// }
// if (elem[6] > 0) {
//     console.log(elem[6]);
// }
// if (elem[7] > 0) {
//     console.log(elem[7]);
// }
// if (elem[8] > 0) {
//     console.log(elem[8]);
// }

// ......................................................

// const elem = [3, 5, 2, 56, 34, 12, 45]
//         //    0  1  2  3   4   5   6
// // Написать цикл, который выводит только четные числа 
// let sum = 0 
// for (let i = 0; i < elem.length; i++) {
//     if (elem[i] % 2 === 0) {
//         sum = sum + elem[i]
//         // 0   = 0 + 2
//         // 2 = 2 + 56
//         // 58 = 58 + 34
//         // 92 = 92 + 12
//         // 104
//         console.log(sum);// 2 58 92 104
//     }
    
// }
// ........................................................................

const elem = [3, 5, 2, 56, 34, 12, 45]
        //    0  1  2  3   4   5   6
// Написать цикл, который выводит только четные числа 
let even = 0 
let odd = 0
for (let i = 0; i < elem.length; i++) {
    if (elem[i] % 2 === 0) {
        even = even + elem[i]
    } else if(elem[i] % 2 !== 0){
        odd = odd + elem[i]
    }
    
}
console.log('Сумма не четных чисел ' + odd);
console.log('Сумма четных чисел ' + even);

if(even > odd){
    console.log(even-odd);
} else{
    console.log(odd-even)
}

// ОБЬЕКТЫ ////////////////////////////////////////////

// const arr = ['ovasapyan', 'vacho', 25]
// console.log(arr);

// const object = {
//     lastName: 'ovasapyan',
//     firstName: 'vacho',
//     age:25
// }
// object.gender = 'men'
// object.age = 34
// console.log (object)

// Создать объект с названием и ценой 
// продукта и выведите данные в консоль.

// const product = ['Phone', 'Kiwi', 599]


// const object = {
//     Name: 'Phone',
//     prise: 599,
//     Brend:'Kiwi'
// }
// console.log(object)

// ////////////////////////////////////////////////////////////

const products = [
    {
        productName: 'Millk',
        price: 24
    },
    {
        productName: 'Bread',
        price: 12
    },
    {
        productName: 'coffe',
        price: 54
    },
    {
        productName: 'chocolate',
        price: 45
    }
]
// console.log(products[1].productName);

// let sum = 0
// for (let i = 0; i < products.length; i++) {
//     // console.log(products[i].price);
//     sum = sum + products[i].price
// }

// console.log(sum);

// вывести список цикл с ценной///////////////////////////////////////////////////////////
// console.log(products[0].productName + '('+ products[0].price + ')');

for (let i = 0; i < products.length; i++) {
    console.log(`${products[i].productName} (${products[i].price})`);
}


// вывести название товаров, которые дороже 25//////////////

for (let i = 0; i < products.length; i++){
    if (products[i].price > 25){
        console.log(products[i].productName);
    }
}

for (let i = 0; i < products.length; i++) {
    if (products[i].price > 25) {
         console.log(`Название прродукта: ${products[i].productName} Цена:( ${products[i].price} )`);
    }
}
