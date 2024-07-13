document.addEventListener("DOMContentLoaded", function() {
    const enterButton = document.getElementById("enter-button");

    // Функция для перехода по ссылке
    function redirectToMainPage() {
        window.location.href = enterButton.href; // Переход по ссылке кнопки
    }

    // Установка таймера на 20 секунд
    setTimeout(function() {
        redirectToMainPage(); // Вызов функции для автоматического перехода
    }, 20000); // 20 секунд (20000 миллисекунд)
});
