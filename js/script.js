// Ждем загрузки страницы
document.addEventListener('DOMContentLoaded', function () {
    // Находим кнопку и текстовый элемент
    const demoButton = document.getElementById('demoButton');
    const demoText = document.getElementById('demoText');

    // Проверяем, есть ли они на странице (кнопка только на главной)
    if (demoButton && demoText) {
        // Добавляем обработчик клика
        demoButton.addEventListener('click', function () {
            demoText.textContent = 'Поздравляю! Вы активировали JavaScript!';
            demoText.style.color = '#e8491d';
            demoText.style.fontWeight = 'bold';

            // Меняем цвет кнопки
            this.style.background = '#35424a';
            this.textContent = 'Активировано!';
        });
    }

    // Простая функция для всех страниц
    console.log('Сайт успешно загружен!');
});