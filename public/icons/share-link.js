document.addEventListener('DOMContentLoaded', function() {
    const shareButton = document.getElementById('share-link');
    const shareModal = document.getElementById('share-modal');
    const closeModal = document.querySelector('.close');

    if (shareButton && shareModal && closeModal) {
        shareButton.addEventListener('click', function() {
            shareModal.style.display = 'flex';
        });

        closeModal.addEventListener('click', function() {
            shareModal.style.display = 'none';
        });

        document.getElementById('copy-link').addEventListener('click', function() {
            navigator.clipboard.writeText(window.location.href).then(() => {
                alert('Ссылка скопирована в буфер обмена!');
            }).catch(() => {
                alert('Не удалось скопировать ссылку.');
            });
        });

        document.getElementById('share-whatsapp').addEventListener('click', function() {
            window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(window.location.href)}`, '_blank');
        });

        document.getElementById('share-telegram').addEventListener('click', function() {
            window.open(`https://t.me/share/url?url=${encodeURIComponent(window.location.href)}`, '_blank');
        });

        document.getElementById('share-facebook').addEventListener('click', function() {
            window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank');
        });

        document.getElementById('share-twitter').addEventListener('click', function() {
            window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=Посмотрите%20этот%20сайт!`, '_blank');
        });

        document.getElementById('share-instagram').addEventListener('click', function() {
            window.open(`https://www.instagram.com/direct/new/?text=${encodeURIComponent(window.location.href)}`, '_blank');
        });

        document.getElementById('share-sms').addEventListener('click', function() {
            window.open(`sms:?body=${encodeURIComponent(window.location.href)}`, '_blank');
        });
    }
});
