var buttonElement = document.getElementsByTagName("button");
Array.from(buttonElement).forEach(element => element.addEventListener("click", boxColorChange));

function boxColorChange(event) {
    var color = event.target.getAttribute("data-color");
    document.getElementById("box").style.backgroundColor = color;
}