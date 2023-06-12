var applyElement = document.getElementById("apply");
applyElement.addEventListener("click", actionOnBoxApply);

function actionOnBoxApply() {
    var colorCode = document.getElementById("colorCode").value; 
    var borderRadius = document.getElementById("borderRadius").value; 
    var borderWidth = document.getElementById("borderWidth").value; 
    var borderColor = document.getElementById("borderColor").value; 
    var borderStyle = document.getElementById("borderStyle").value; 
    var boxHeight = document.getElementById("boxHeight").value; 
    var boxWidth = document.getElementById("boxWidth").value; 
    var boxElement = document.getElementById("box");

    if(colorCode){
        boxElement.style.backgroundColor = colorCode;
    }
    if(borderRadius){
        boxElement.style.borderRadius = borderRadius;
    }
    if(borderWidth){
        boxElement.style.borderWidth = borderWidth;
    }
    if(borderColor){
        boxElement.style.borderColor = borderColor;
    }
    if(borderStyle){
        boxElement.style.borderStyle = borderStyle;
    }
    if(boxHeight){
        boxElement.style.height = boxHeight;
    }
    if(boxWidth){
        boxElement.style.width = boxWidth;
    }
}