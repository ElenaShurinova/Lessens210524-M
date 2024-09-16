// 1. Создание параграфов с каждым десятым числом в промежутке от 100 до 50
let numbersDiv = document.querySelector('.numbers');

for (let i = 100; i >= 50; i -= 10) {
    let paragraph = document.createElement('p');
    paragraph.textContent = i;
    numbersDiv.appendChild(paragraph);
}

// 2. Создание параграфов для каждой строки из массива и добавление их в div с классом strings_container
let stringsDiv = document.querySelector('.strings_container');
const stringsArray = ['Lorem', 'ipsum', 'dolor', 'sit', 'amet'];

for (let str of stringsArray) {
    let paragraph = document.createElement('p');
    paragraph.textContent = str;
    stringsDiv.appendChild(paragraph);
}

// 3. Создание карточек только для совершеннолетних пользователей и добавление их в div с классом users_container
let usersDiv = document.querySelector('.users_container');
const usersArray = [
    { first_name: 'John', last_name: 'Doe', age: 25 },
    { first_name: 'Jane', last_name: 'Smith', age: 18 },
    { first_name: 'Mike', last_name: 'Johnson', age: 16 }
];

for (let user of usersArray) {
    if (user.age >= 18) {
        let card = document.createElement('div');
        card.classList.add('user_card');
        
        let nameParagraph = document.createElement('p');
        nameParagraph.textContent = `Name: ${user.first_name} ${user.last_name}`;
        card.appendChild(nameParagraph);
        
        let ageParagraph = document.createElement('p');
        ageParagraph.textContent = `Age: ${user.age}`;
        card.appendChild(ageParagraph);

        usersDiv.appendChild(card);
    }
}
