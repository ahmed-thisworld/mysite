const products = [
    { id: 1, name: 'T-Shirt', price: 15 },
    { id: 2, name: 'Jeans', price: 40 },
    { id: 3, name: 'Jacket', price: 60 },
    { id: 4, name: 'Sneakers', price: 50 },
    { id: 5, name: 'Cap', price: 10 }
];

let cart = [];

document.addEventListener('DOMContentLoaded', () => {
    displayProducts();
    displayCart();
});

function displayProducts() {
    const productList = document.querySelector('.product-list');
    productList.innerHTML = '';
    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.classList.add('product-item');
        productItem.innerHTML = `
            <h3>${product.name}</h3>
            <p>Price: $${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productList.appendChild(productItem);
    });
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const cartItem = cart.find(item => item.id === productId);
    if (cartItem) {
        cartItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    displayCart();
}

function displayCart() {
    const cartItems = document.querySelector('.cart-items');
    const totalPrice = document.getElementById('total-price');
    cartItems.innerHTML = '';

    let total = 0;

    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price} x ${item.quantity}`;
        cartItems.appendChild(li);

        total += item.price * item.quantity;
    });

    totalPrice.textContent = `$${total}`;
}

function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    alert('Thank you for your purchase!');
    cart = [];
    displayCart();
}
