var showBackdrop = document.getElementById("showBackdrop");
showBackdrop.addEventListener("click", backdropOn);

function backdropOn() {
    document.getElementById("backDrop").style.display = "block"
}

document.body.addEventListener("keydown", keyPress);

function keyPress (e) {
    if(e.key === "Escape") {

    document.getElementById("backDrop").style.display = "none"
        
    }
}