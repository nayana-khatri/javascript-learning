// var type = document.getElementById("type").innerHTML;
// document.getElementById("text").innerHTML = type;

//type.innerHTML = type.innerHTML + `<div id="text">${(text.style.display = "block")}</div>`;

var type = document.getElementById("type");
type.addEventListener("keypress", typeContent);

function typeContent(event) {

 document.getElementById("text").innerText  = event.target.value;
}