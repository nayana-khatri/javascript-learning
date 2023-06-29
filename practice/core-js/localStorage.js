// let products = [
//     {
//         id: 1,
//         title: "red bag",
//         price: 100,
//     },
//     {
//         id: 2,
//         title: "blue bag",
//         price: 300,
//     },
//         {
//         id: 3,
//         title: "black bag",
//         price: 500,
//     }
// ]

// localStorage.setItem("MY_PRODUCT_LIST", JSON.stringify(products));

// let store = localStorage.getItem("MY_PRODUCT_LIST");
// let convertInObject = JSON.parse(store);

// console.log(convertInObject);


// convertInObject.forEach(product => console.log(product.id));


var count = 0;

var plus = document.getElementById("plus");
plus.addEventListener("click", addItems);


function addItems(isSaveRequired = true) {
    
   count = count + 1;
   var addItems = document.getElementById("items");
   addItems.innerHTML = addItems.innerHTML + `<div class="addItems">Item ${count}</div>`
   
   if(!isSaveRequired) {
    return;
   }

   let storeItem = localStorage.getItem("MY_ITEMS");

   if(!storeItem) {
    storeItem = '[]';
   }

   let convertInObject = JSON.parse(storeItem);

   convertInObject.push(`Item ${count}`);

localStorage.setItem("MY_ITEMS", JSON.stringify(convertInObject));

}

 let storeItem = localStorage.getItem("MY_ITEMS");
 let convertInObject = JSON.parse(storeItem);
 
 console.log(convertInObject);

 convertInObject.forEach(item => {
    addItems(false);
 });
   
//  let a = [1, 2, 3, 4, 5];
//  console.log(a.slice(2,4));