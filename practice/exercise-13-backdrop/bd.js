let showBackdropElement = document.getElementById("showBackdrop");
showBackdropElement.addEventListener("click", showBackdropOnClick);

function showBackdropOnClick() {
    let backdropElement =   document.getElementById("backdrop");
    backdropElement.style.display = "block";
}

document.body.addEventListener("keydown", keyPress);

function keyPress(e) {
    if(e.key === "Escape"){
        document.getElementById("backdrop").style.display = "none";
    }
}