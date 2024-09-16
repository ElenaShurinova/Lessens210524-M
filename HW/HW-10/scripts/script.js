const userForm = document.getElementById('userForm');
const users = [];

// Обработчик события отправки формы
userForm.addEventListener('submit', function(e) {
    e.preventDefault();

    // Получаем значения из формы
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const age = parseInt(document.getElementById('age').value);

    // Создаем объект пользователя и добавляем его в массив пользователей
    const user = { firstName, lastName, age };
    users.push(user);

    // Выводим данные нового пользователя в консоль
    console.log('New user:', user);
    console.log('Users array:', users);

    // Вызываем функцию перерисовки
    rerender();
});

// Функция перерисовки карточек пользователей
function rerender() {
    const container = document.getElementById('userContainer');
    container.innerHTML = '';

    // Для каждого пользователя создаем карточку
    users.forEach((user, index) => {
        const card = document.createElement('div');
        card.textContent = `User ${index + 1}: ${user.firstName} ${user.lastName}, Age: ${user.age}`;

        // Обработчик двойного клика для удаления пользователя
        card.addEventListener('dblclick', function() {
            users.splice(index, 1);
            rerender();
        });

        container.appendChild(card);
    });
}