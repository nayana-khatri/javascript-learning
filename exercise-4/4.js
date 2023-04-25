var count = 0;

var plus = document.getElementById("plus");
plus.addEventListener("click", addItems);


function addItems() {
    
   count = count + 1;
   var addItems = document.getElementById("items");
   addItems.innerHTML = addItems.innerHTML + `<div class="addItems">Items ${count}</div>`

    //document.getElementById("items").innerHTML = document.getElementById("items").innerHTML + `<span id="item">Item ${count}</span>`

}