let quantity = 1;
const quantityElement = document.getElementById('quantity');
const decreaseBtn = document.getElementById('decrease');
const increaseBtn = document.getElementById('increase');
const cartBtn = document.getElementById('addToCart');

decreaseBtn.addEventListener('click', () => {
    if (quantity > 1) {
        quantity--;
        quantityElement.textContent = quantity;
    }
});

increaseBtn.addEventListener('click', () => {
    if (quantity < 20) {
        quantity++;
        quantityElement.textContent = quantity;
    }
});

cartBtn.addEventListener('click', () => {
    cartBtn.classList.add('added-to-cart');
    setTimeout(() => {
        cartBtn.classList.remove('added-to-cart');
    }, 300);
});
