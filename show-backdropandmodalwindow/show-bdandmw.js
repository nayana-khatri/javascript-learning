var openModal = document.getElementById("openModal");
openModal.addEventListener("click", modalWindowOpen);

function modalWindowOpen() {
    document.getElementById("backDrop").style.display = "block";
    document.getElementById("modalWindow").style.display = "block";
}

document.body.addEventListener("keydown", keyPress);

function keyPress (e) {
    if(e.key === "Escape") {
        closeModalWindow()
    }
}

var closeElement = document.getElementsByClassName("close");
Array.from(closeElement).forEach(element => element.addEventListener("click",  closeModalWindow))

function closeModalWindow() {
    document.getElementById("backDrop").style.display = "none";
    document.getElementById("modalWindow").style.display = "none";
}