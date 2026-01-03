// Load cart count on page load
let cart = JSON.parse(localStorage.getItem("cart")) || [];
updateCartCount();

function addToCart(name, price) {
    cart.push({ name, price });
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    console.log(name + " added to cart!");
}

function updateCartCount() {
    document.getElementById("cart-count").innerText = cart.length;
}
