var showProductsElement = document.getElementById("showProductList");
showProductsElement.addEventListener("click", openProductsList);

async function openProductsList() {
    var response = await fetch("https://fakestoreapi.com/products");
    var data = await response.json();
    var html = " ";

    for (i = 0; i < data.length; i++) {

        var htmlString = `  <div class="products">
         <div class="imageWrapper">
    <img src="${data[i].image}">
</div>
<div class="detailsWrapper">
    <div class="details">
        <h2 class="title">${data[i].title}</h2>
        <div class="rating">
            <span>Rating: </span>
            <span>${data[i].rating.rate}</span>
        </div>
        <p class="description">${data[i].description}</p>
    </div>
    <div class="actionWrapper">
        <div class="price">${data[i].price}</div>
        <div class="action">
            <button class="detailsBtn">Details</button>
            <button class="addToCart">Add To Cart</button>
        </div>
    </div>
    </div>
</div>`;

        html = html + htmlString;
    }
    console.log('Final Html', html);
    var productsListElements = document.getElementById("productsList");
    productsListElements.innerHTML = html;

    bindEventOnCart();
}