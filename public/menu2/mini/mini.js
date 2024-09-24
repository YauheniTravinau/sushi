/*мини меню*/
document.addEventListener('DOMContentLoaded', () => {
    const menuWrapper = document.querySelector('.mini-menu-wrapper');
    const menuToggle = document.querySelector('.mini-menu-toggle');

    menuToggle.addEventListener('click', () => {
        menuWrapper.classList.toggle('active');
    });
});