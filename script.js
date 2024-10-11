let cart = [];
let total = 0;

function addToCart(id, name, price) {
    const item = { id, name, price };
    cart.push(item);
    total += price;
    updateCart();
}

function updateCart() {
    const cartCount = document.getElementById('cart-count');
    const cartDetails = document.getElementById('cart-details');
    const cartItems = document.getElementById('cart-items');
    const totalPrice = document.getElementById('total-price');

    cartCount.innerText = cart.length;
    
    // Update cart details
    cartItems.innerHTML = cart.map(item => `<p>${item.name} - $${item.price.toFixed(2)}</p>`).join('');
    totalPrice.innerText = `Total: $${total.toFixed(2)}`;

    // Show cart details if not empty
    cartDetails.style.display = cart.length > 0 ? 'block' : 'none';
}

function checkout() {
    alert(`Total amount to be paid: $${total.toFixed(2)}`);
    cart = [];
    total = 0;
    updateCart();
}
