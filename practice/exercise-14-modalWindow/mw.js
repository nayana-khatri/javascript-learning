let openModalElement = document.getElementById("openModal");
openModalElement.addEventListener("click", openModalWindowOnClick);

function openModalWindowOnClick() {
    let modalWindowElement = document.querySelector(".modalWindow");
    let backdropElement = document.querySelector("#backdrop");
    modalWindowElement.classList.add("show");
    backdropElement.classList.add("show");

    // var modalWindow = document.getElementsByClassName("modalWindow");
    // var backDrop = document.getElementById("backdrop");
    // modalWindow[0].classList.add("show");
    // backDrop.classList.add("show")
}

document.body.addEventListener("keydown", keyPress);
function keyPress(e) {
    if(e.key === "Escape"){
        closeModalWindowOnClick();
    }
}

let closeElement = document.getElementsByClassName("click", closeModalWindowOnClick);
function closeModalWindowOnClick() {
    let modalWindowElement = document.querySelector(".modalWindow");
    let backdropElement = document.querySelector("#backdrop");
    modalWindowElement.classList.remove("show");
    backdropElement.classList.remove("show");
}