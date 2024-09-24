// Функция для добавления слушателя на кнопку "Поделиться"
function addShareButtonListener() {
    const shareButton = document.getElementById('shareButton');
    if (shareButton) {
        shareButton.addEventListener('click', function() {
            let url = window.location.href; // Получаем URL текущей страницы

            // Если API "Поделиться" доступно в браузере
            if (navigator.share) {
                navigator.share({
                    title: 'Заголовок вашего сайта',
                    text: 'Описание вашего сайта',
                    url: url
                })
                    .then(() => console.log('Ресурс успешно поделен!'))
                    .catch((error) => console.error('Ошибка при попытке поделиться:', error));
            } else {
                // Если API "Поделиться" недоступно в браузере, открываем обычное окно для шаринга
                let shareUrl = 'https://example.com/share?url=' + encodeURIComponent(url);
                window.open(shareUrl, '_blank');
            }
        });
    }
}