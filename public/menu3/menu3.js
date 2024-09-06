function toggleContent(categoryId) {
    const categoryContents = document.querySelectorAll('.category-content');
    const selectedContent = document.querySelector(`#${categoryId}`);

    categoryContents.forEach(content => {
        content.style.display = 'none';
    });

    selectedContent.style.display = 'block';
}

/**/
function toggleContent(id) {
    // Скрыть все категории
    document.querySelectorAll('.category-content').forEach(function(content) {
        content.style.display = 'none';
    });

    // Показать выбранную категорию
    document.getElementById(id).style.display = 'block';

    // Убрать активный класс у всех категорий
    document.querySelectorAll('.menu-category').forEach(function(category) {
        category.classList.remove('active');
    });

    // Добавить активный класс к выбранной категории
    event.target.classList.add('active');
}

// По умолчанию открыть первую категорию
document.querySelector('.menu-category').click();
