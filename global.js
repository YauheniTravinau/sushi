document.addEventListener("DOMContentLoaded", function() {
    // Функция для загрузки HTML содержимого и вставки его в указанный элемент
    function loadHtml(url, elementId) {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then(data => {
                document.getElementById(elementId).innerHTML = data;
            })
            .catch(error => {
                console.error('There has been a problem with your fetch operation:', error);
            });
    }

    // Загрузка Header
    loadHtml('/public/header/header.html', 'header-placeholder');

    // Загрузка Menu (находится в подпапке Menu)
    loadHtml('/public/Menu/Menu.html', 'menu-placeholder');

    // Загрузка Footer
    loadHtml('/public/footer/footer.html', 'footer-placeholder');

    // Загрузка второго меню
    loadHtml('/public/menu2/menu2.html', 'menu2-placeholder');
});

/*бургер меню*/
function toggleMenu() {
    const menuBtn = document.querySelector('.menu-btn');
    const menuItems = document.querySelector('.menu-items');

    menuBtn.classList.toggle('open'); // Переключаем класс 'open' у .menu-btn
    menuItems.classList.toggle('open'); // Переключаем класс 'open' у .menu-items

    // Добавляем обработчик события на прокрутку страницы
    window.addEventListener('scroll', closeMenuIfScrolled);
}

function closeMenuIfScrolled() {
    const menuBtn = document.querySelector('.menu-btn');
    const menuItems = document.querySelector('.menu-items');

    // Проверяем, если меню открыто и пользователь прокрутил вниз страницы
    if (menuBtn.classList.contains('open') && window.scrollY > 0) {
        menuBtn.classList.remove('open');
        menuItems.classList.remove('open');
        window.removeEventListener('scroll', closeMenuIfScrolled); // Удаляем обработчик после закрытия меню
    }
}
