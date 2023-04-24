var showPosition = document.getElementsByClassName("showPosition");
// showPosition.addEventListener("click", buttonShow);

Array.from(showPosition).forEach(element => element.addEventListener("click", buttonShow))

function buttonShow(event) {
    
    var position = event.target.getAttribute("position");

    if(position === "center"){
        document.getElementById("body").style.justifyContent = "center";
    }

    else if(position === "topLeft"){
        document.getElementById("body").style.justifyContent = "start";
    }

    else if(position === "topRight"){
        document.getElementById("body").style.justifyContent = "end";
    }

    else if(position === "bottomLeft"){
        document.getElementById("body").style.justifyContent = "start";
        document.getElementById("body").style.alignItems = "end";

    }
    
    else{
        document.getElementById("body").style.justifyContent = "end";
        document.getElementById("body").style.alignItems = "end";
    }
}
