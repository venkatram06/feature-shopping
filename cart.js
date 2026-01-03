let cart = JSON.parse(localStorage.getItem("cart")) || [];
let cartItemsDiv = document.getElementById("cart-items");
let totalDiv = document.getElementById("total");

function displayCart() {
    cartItemsDiv.innerHTML = "";
    let total = 0;

    if (cart.length === 0) {
        cartItemsDiv.innerHTML = "<p style='text-align:center;'>Your cart is empty</p>";
        totalDiv.innerText = "";
        return;
    }

    cart.forEach((item, index) => {
        total += item.price;

        let itemDiv = document.createElement("div");
        itemDiv.className = "product";

        itemDiv.innerHTML = `
            <h3>${item.name}</h3>
            <p>₹${item.price}</p>
            <button onclick="removeItem(${index})">Remove</button>
        `;

        cartItemsDiv.appendChild(itemDiv);
    });

    totalDiv.innerText = "Total Amount: ₹" + total;
}

function removeItem(index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
}

displayCart();
