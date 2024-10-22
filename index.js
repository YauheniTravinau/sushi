document.addEventListener("DOMContentLoaded", function() {
    const enterButton = document.getElementById("enter-button");
    const video = document.querySelector('.background-video');

    // Функция для перехода по ссылке
    function redirectToMainPage() {
        window.location.href = enterButton.href; // Переход по ссылке кнопки
    }

    // Установка таймера на 20 секунд для автоматического перехода
    setTimeout(function() {
        redirectToMainPage(); // Вызов функции для автоматического перехода
    }, 20000); // 20 секунд (20000 миллисекунд)

    // Проверка состояния готовности видео и перенаправление через 5 секунд
    setTimeout(function() {
        if (video.readyState < 3) { // Если видео не готово к воспроизведению
            window.location.href = "/public/glowna/glowna.html"; // Переход на главную
        }
    }, 5000); // 5 секунд на загрузку видео
});
