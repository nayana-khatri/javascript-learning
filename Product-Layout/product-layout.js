async function callApiForProduct() {
    var response = await fetch("https://fakestoreapi.com/products/1")
    var data = await response.json()
    var html = ``;
    var htmlString = `<div class="imageWrapper">
    <img src="${data.image}">
</div>
<div class="detailsWrapper">
    <div class="title">${data.title}</div>
    <div class="price">${data.price}</div>
    <div class="review">Review</div>
    <div class="category">${data.category}</div>
    <div class="descriptionWrapper">${data.description}</div>
    <div class="buttonWrapper">
            <button id="addToCart">Add To Cart</button>
            <button id="buyNow">Buy Now</button>
    </div>
</div>`

    html = html + htmlString;

    document.getElementById("productWrapper").innerHTML = html;

}
callApiForProduct()