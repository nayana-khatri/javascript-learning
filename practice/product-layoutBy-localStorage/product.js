let buttonElement = document.querySelector(".btn");
buttonElement.addEventListener("click", showProductsList);

function showProductsList() {
    let response = localStorage.getItem("MY_PRODUCT_LIST")
    let responseConvert = JSON.parse(response);
    console.log(responseConvert);

    let html = '';

    responseConvert.forEach(product => {
        let producHTML = prepareProductHTML(product);
        html += producHTML; 
    });

    let productWrapper = document.querySelector(".productWrapper");
    productWrapper.innerHTML = html;

    bindAddToCartEvents();
}

function prepareProductHTML(product) {
    return `
    <div class="product">
        <div class="imageWrapper">
            <img src="${product.image}">
        </div>
        <div class="detailsWrapper">
            <div class="details">
                <h2 class="title">${product.title}</h2>
                <div class="rating">
                    <span>Rating: </span>
                    <span>${product.rating.rate}</span>
                </div>
                <p class="description">${product.description}</p>
            </div>
            <div class="actionsWrapper">
                <div class="price">${product.price}</div>
                <div class="actions">
                    <button class="detailsBtn">Details</button>
                    <button class="addToCart">Add To Cart</button>
                </div>
            </div>
        </div>
    </div>`;
}

var count = 0; 

function bindAddToCartEvents() {
    var  addToCartButtons = document.getElementsByClassName("addToCart"); 
    Array.from(addToCartButtons).forEach((element) => element.addEventListener("click", addToCart));
}

function addToCart() {
    
    count = count + 1 ;

    var cartItems = document.querySelector(".cartItem");

    cartItems.innerHTML = `<span class="itemCount">${count}</span>`;
}