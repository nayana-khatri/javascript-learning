function fetchProducts(url) {
    return fetch(url); // Returns a fetch promise
  }

  const apiUrl = "https://fakestoreapi.com/products";

  fetchProducts(apiUrl)
  .then(productsResponse => productsResponse.json())
  .then(productsData => {
    // Iterate over the products
    productsData.forEach(product => {
      // Access individual product properties
      const productId = product.id;
      const productName = product.name;
      const productPrice = product.price;
      // ...
      // Do something with the product data
      console.log(productId, productName, productPrice)
    });
  })
  .catch(error => {
    // Handle any errors
  });
