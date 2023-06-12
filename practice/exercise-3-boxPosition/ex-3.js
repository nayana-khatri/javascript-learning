var positionElement = document.getElementsByClassName("position");
Array.from(positionElement).forEach(element => element.addEventListener("click", boxPositionChange));

function boxPositionChange(event) {
var dataPositionElement = event.target.getAttribute("data-position");

if(dataPositionElement === "center"){
    document.getElementById("boxPosition").style.justifyContent = "center";
}
else if(dataPositionElement === "topLeft"){
    document.getElementById("boxPosition").style.justifyContent = "start";
}
else if(dataPositionElement === "topRight"){
    document.getElementById("boxPosition").style.justifyContent = "end";
}
else if(dataPositionElement === "bottomLeft"){
    document.getElementById("boxPosition").style.justifyContent = "start";
    document.getElementById("boxPosition").style.alignItems = "end";
}
else {
    document.getElementById("boxPosition").style.justifyContent = "end";
    document.getElementById("boxPosition").style.alignItems = "end";
}
}