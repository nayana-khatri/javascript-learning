var textAreaElement = document.getElementById("textArea");
textAreaElement.addEventListener("keypress", showTheText);

function showTheText(event){
    document.getElementById("text").innerText = event.target.value;
}