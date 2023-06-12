var count = 0;

function bindEventOnCart() {
    var addToCartElements = document.getElementsByClassName("addToCart");
    Array.from(addToCartElements).forEach(element => element.addEventListener("click", addToCart));
}

function addToCart() {
    count = count + 1;
    var cartItemElement = document.getElementById("cartItems");

    cartItemElement.innerHTML = `<span class="itemsCount">${count}</span>`;
}



