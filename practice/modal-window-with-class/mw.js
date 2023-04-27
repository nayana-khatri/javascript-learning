var openModal = document.getElementsByClassName("openModal");
Array.from(openModal).forEach(element => element.addEventListener("click", modalWindowOpen));

function modalWindowOpen() {
    var modalWindow = document.getElementsByClassName("modalWindow");
    var backDrop = document.getElementsByClassName("backDrop");
    modalWindow[0].classList.add("show");
    backDrop[0].classList.add("show")
}

document.body.addEventListener("keydown", keyPress);

function keyPress(e) {
    if (e.key === "Escape") {
        closeModalWindow()
    }
}

var closeElement = document.getElementsByClassName("close");
Array.from(closeElement).forEach(element => element.addEventListener("click", closeModalWindow));

function closeModalWindow() {
    var backDrop = document.getElementsByClassName("backDrop");
    var modalWindow = document.getElementsByClassName("modalWindow");
    backDrop[0].classList.remove("show")
    modalWindow[0].classList.remove("show");
}