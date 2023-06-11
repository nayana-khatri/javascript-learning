var headingElement = document.getElementsByClassName("heading");
Array.from(headingElement).forEach(element => element.addEventListener("click", openContentPanelOnClick));

var contentPanelElement = document.querySelectorAll(".contentPanel");
Array.from(contentPanelElement).forEach(element => element.style.display = "none");

function openContentPanelOnClick(event) {
var contentPanelTarget = (event.target.closest(".collapsible").getElementsByClassName("contentPanel"))[0];

if (contentPanelTarget.style.display === "block") {
    contentPanelTarget.style.display = 'none';
    event.target.closest(".collapsible").getElementsByClassName("icon")[0].innerText = "+";
}
else {
    var accordionElenment = event.target.closest(".accordion");

    var allContentPanels = accordionElenment.getElementsByClassName("contentPanel");

    Array.from(allContentPanels).forEach((element) => {
        element.style.display = 'none';
        element.closest(".collapsible").getElementsByClassName("icon")[0].innerText = "+";
    });

    contentPanelTarget.style.display = 'block';
    event.target.closest(".collapsible").getElementsByClassName("icon")[0].innerText = "-";
}
}