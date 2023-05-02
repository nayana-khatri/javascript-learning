var buttonElement = document.getElementsByClassName("btn");
Array.from(buttonElement).forEach(element => element.addEventListener("click", showAlertErrorBox));

function showAlertErrorBox(event) {
    var dataColor = event.target.getAttribute("data-color");

    if (dataColor == "info") {
        document.querySelector(".alertshow").innerHTML = document.querySelector(".alertshow").innerHTML + `<div class="alert alert-info">Alert !
            <span class="cross">X</span>
        </div>`
    }

    if (dataColor == "warning") {
        document.querySelector(".alertshow").innerHTML = document.querySelector(".alertshow").innerHTML + `<div class="alert alert-warning">Alert !
            <span class="cross">X</span>
        </div>`
    }

    if (dataColor == "success") {
        document.querySelector(".alertshow").innerHTML = document.querySelector(".alertshow").innerHTML + `<div class="alert alert-success">Alert !
            <span class="cross">X</span>
        </div>`
    }

    if (dataColor == "error") {
        document.querySelector(".alertshow").innerHTML = document.querySelector(".alertshow").innerHTML + `<div class="alert alert-error">Alert !
            <span class="cross">X</span>
        </div>`
    }
}

function delegate_event(event_type, ancestor_element, target_element_selector, listener_function) {
    ancestor_element.addEventListener(event_type, function (event) {
        if (event.target && event.target.matches && event.target.matches(target_element_selector)) {
            (listener_function)(event);
        }
    });
}

delegate_event('click', document, '.cross', closeAlert);

function closeAlert(event) {
    event.target.parentElement.remove();
}