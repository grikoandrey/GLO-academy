let modal = document.querySelector('.search-model');
let modalBtn = document.querySelector('.icon_search');
let modalClose = modal.querySelector('.search-close-switch');
let modalSearch = modal.querySelector('#search-input');

modalBtn.addEventListener('click', () => {
    // console.log(('click'));
    modal.style.display = 'block';
})

modalClose.addEventListener('click', () => {
    modal.style.display = 'none';
})

// Обрабатываем событие input, которое срабатывает при каждом изменении в поле
modalSearch.addEventListener('input', function () {
    let currentText = modalSearch.value; // Получаем текущий текст
    console.log(currentText); // Выводим его в консоль
});