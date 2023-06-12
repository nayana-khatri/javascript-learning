var count = 0;
var plusElement = document.getElementById("plus");
plusElement.addEventListener("click", addItemsOnClick);

function addItemsOnClick() {
count = count + 1;

document.getElementById("item").innerHTML = document.getElementById("item").innerHTML + `<div class=addItem>Item ${count}</div>`;
}


// function addItemsOnClick() {
//     count++;

//     var span = document.createElement("span");
//     span.setAttribute("class", "addItem");
//     span.innerText = `Items ${count} \n`;

//     document.getElementById("item").appendChild(span);
// }