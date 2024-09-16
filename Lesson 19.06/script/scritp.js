// let month = 3

// if (month <= 2) {
//     console.log('зима');
// }else if(month <= 5){
//     console.log('весна');
// }else if(month <= 8){
//     console.log('лето');
// }else if(month <= 11){
//     console.log('осень');
// }else if(month === 12){
//     console.log('зима');
// }

// &&-и
// ||-или
// let month = 0

// if (month > 0 && month <=2 || month === 12) {
//     console.log('зима');
// } else if(month > 2 && month <=5){
//     console.log('весна');
// }

// else if (month > 5 && month <= 8){
//     console.log('лето')
// }
// else if (month > 8 && month <= 11){
//     console.log('осень')
// }
// else{
//     console.log('error')
// }
// ....................................................................

// let hours = 0

// if (hours >= 0 && hours <=6 ) {
//     console.log('ночь');
// } else if(hours > 6 && hours <= 12){
//     console.log('утро');
// }

// else if (hours > 12 && hours <= 18){
//     console.log('день')
// }
// else if (hours > 18 && hours <= 24){
//     console.log('вечер')
// }
// else{
//     console.log('error')
// }
// ..................................................................

// const num = [23, -45, 34, 23, -78, 45, -56, -78]
//             // 0   1   
// let stydent = ['andrey', 'ivan', 'anna', 'ilya']

// console.log(num);
// for(let i = 0; i < num.length; i++){
//     console.log(i);
//     console.log(num[i]);
// }
// console.log(num[0]);
// console.log(num[1]);
// console.log(num[2]);
// console.log(num[3]);
// console.log(num[4]);
// console.log(num[5]);
// console.log(num[6]);
// console.log(num[7]);

// ......................................................................

// const num = [23, -45, 34, 23, -78, 45, -56, -78]
//             // 0   1   


// for(let i = 0; i < num.length; i++){
//     if (num[i] > 0) {
//             -45
//         console.log(num[i]);
//                         -45
//     }   
// }
// // вывести в квадрат...................................

// for(let i = 0; i < num.length; i++){
//     console.log(num[i] **2); 
    
// } 


// ПРИМЕР БЕЗ ЦИКЛА!!!!!!
// if (num[0] > 0) {
//     console.log(num[0]);
// }   
// if (num[1] > 0) {
//     console.log(num[1]);
// }   
// if (num[2] > 0) {
//     console.log(num[2]);
// }   
// if (num[3] > 0) {
//     console.log(num[3]);
// }   
// if (num[4] > 0) {
//     console.log(num[4]);
// }   
// if (num[5] > 0) {
//     console.log(num[5]);
// }   
// if (num[6] > 0) {
//     console.log(num[6]);
// }   
// if (num[7] > 0) {
//     console.log(num[7]);
// }

//.................................................................

// const num = [23, -45, 34, 23, -78, 45, -56, -78]

// let sum = 0
//         //   23

// for(let i = 0; i < num.length; i++){
// sum = sum + num[i]
// // 23     23    0+23
// // let sum = 0
//     //   23
//     //  -22
//     //  12
//     //  35

// for(let i = 0; i < num.length; i++){
//     sum = sum + num[i]
//     console.log(sum);
//     // 0   =   0  + 23
//     // 23  =  23 + -45 
//     // -22 = -22 + 34
//     // 12  = 12  + 23
//     // 35  = 35 + -78

// }
// }
// console.log(sum)

// ............................................................
// Написать цикл, который выводит только четные числа
const num = [23, -45, 34, 23, -78, 45, -56, -78]

for(let i = 0; i < num.length; i++){
    if(num[i] % 2 === 0){
        console.log(num[i])
    }
}
// чтобы вернуть нечетные числа !==.................................