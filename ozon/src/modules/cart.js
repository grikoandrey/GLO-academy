const Cart = () => {
    const cartBtn = document.getElementById('cart');
    const cartModal = document.querySelector('.cart');
    const cartCloseBtn = cartModal.querySelector('.cart-close');

    const openCart = () => {
        cartModal.style.display = 'flex';
    }

    const closenCart = () => {
        cartModal.style.display = 'none';
    }

    // cartBtn.onclick = openCart;
    cartBtn.addEventListener('click', openCart);
    cartCloseBtn.addEventListener('click', closenCart);
}

export default Cart;