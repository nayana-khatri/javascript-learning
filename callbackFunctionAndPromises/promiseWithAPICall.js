function register(url) {
   return fetch(url);
}

//method-1:

// register("https://fakestoreapi.com/products")
//     .then(productsResponse => productsResponse.json())
//     .then(products => {
//         // products.forEach((product) => {
//         //     fetch(`https://fakestoreapi.com/products/${product.id}`);
//         // });

//         let allPromise = [];
        
//         products.forEach((product) => {
//             allPromise.push(
//                 fetch(`https://fakestoreapi.com/products/${product.id}`)
//             );
//         })

//         Promise.all(allPromise).then(() => {
//             alert("Done")
//         })
//         console.log(products);
//     })


// method-2:

register("https://fakestoreapi.com/products")
    .then(productsResponse => productsResponse.json())
    .then(products => {
        let sequentialPromise = Promise.resolve(true);

        products.forEach((product) => {
            sequentialPromise = sequentialPromise.then(() => {
                return fetch(`https://fakestoreapi.com/products/${product.id}`)
                    .then(productResponse => productResponse.json());
            });
        });

        return sequentialPromise;
    })
    .then(() => {
        alert('done')
    })


    // before Promise.resolve(true)

    // 1st iteration Promise.resolve(true).then()

    // 2nd Promise.resolve(true).then().then()




