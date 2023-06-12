var formElement = document.querySelector(".form");
formElement.addEventListener("submit", contentSubmit);

let alertElement = "";

function contentSubmit(event) {
    event.preventDefault();

    Array.from(document.querySelectorAll(`[data-required="true"]`)).forEach(element => {
        if (!element.value) {
            element.style.border = "1px solid red";
        }
    });

    let contactForm = {};

    Array.from(event.target.elements).forEach(element => {
        if (element.type === 'submit') {
            return;
        }

        let allalertElement = `${element.getAttribute("name")} : ${element.value} \n`;

        alertElement = alertElement + allalertElement;
        contactForm[element.getAttribute("name")] = element.value;
    });

    alert(alertElement);

    localStorage.setItem("CONTACT_FORM_DATA", JSON.stringify(contactForm));
}

function getLocalStorageItem() {
    let rawContactDataFromStorage = localStorage.getItem("CONTACT_FORM_DATA");
    let contactDataFromStorage = JSON.parse(rawContactDataFromStorage);

    console.log(contactDataFromStorage);

    Array.from(formElement).forEach(element =>{
        element.value = contactDataFromStorage[element.getAttribute('name')];
    });
        
}

getLocalStorageItem();
