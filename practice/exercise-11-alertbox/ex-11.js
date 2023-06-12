var buttonElement =document.getElementsByClassName("btn");
Array.from(buttonElement).forEach(element => element.addEventListener("click", showAlertBox));

function showAlertBox(event) {
    var dataColorElement = event.target.getAttribute("data-color");

    if(dataColorElement === "info"){
        document.querySelector(".alertBox").innerHTML = document.querySelector(".alertBox").innerHTML + `<div class="alert alert-info">Alert !<span class=cross>X</span></div>`
    }
    
    if(dataColorElement === "warning"){
        document.querySelector(".alertBox").innerHTML = document.querySelector(".alertBox").innerHTML + `<div class="alert alert-warning">Alert !<span class=cross>X</span></div>`
    }

    if(dataColorElement === "sucess"){
        document.querySelector(".alertBox").innerHTML = document.querySelector(".alertBox").innerHTML + `<div class="alert alert-sucess">Alert !<span class=cross>X</span></div>`
    }
    
    if(dataColorElement === "error"){
        document.querySelector(".alertBox").innerHTML = document.querySelector(".alertBox").innerHTML + `<div class="alert alert-error">Alert !<span class=cross>X</span></div>`
    }
}
    function delegate_event(event_type, ancestor_element, target_element_selector, listener_function) {
        ancestor_element.addEventListener(event_type, function (event) {
            if (event.target && event.target.matches && event.target.matches(target_element_selector)) {
                (listener_function)(event);
            }
        });
    }
    delegate_event("click", document, ".cross", removeAlert);

    function removeAlert(event) {
        event.target.parentElement.remove();
    }
