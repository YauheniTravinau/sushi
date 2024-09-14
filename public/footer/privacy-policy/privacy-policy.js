// Отображаем баннер, если пользователь не принял cookie
window.onload = function() {
    if (!localStorage.getItem('cookiesAccepted')) {
        document.getElementById('cookie-banner').style.display = 'block';
    }
};

// Принимаем cookie и скрываем баннер
document.getElementById('accept-cookies').addEventListener('click', function() {
    localStorage.setItem('cookiesAccepted', 'true');
    document.getElementById('cookie-banner').style.display = 'none';
    // Здесь можно добавить код для активации Google Analytics
});
