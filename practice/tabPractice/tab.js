var tabElements = document.getElementsByClassName("tab");
Array.from(tabElements).forEach(element => element.addEventListener("click", openContentPanelonClick));


var contentPanelElement = document.getElementsByClassName("contentPanel");
Array.from(contentPanelElement).forEach(element => element.style.display = "none"); 

function openContentPanelonClick(event) {

    var contentPanelElement = document.getElementsByClassName("contentPanel");
    Array.from(contentPanelElement).forEach(element => element.style.display = "none");

    var dataContentPanelElement = event.target.getAttribute("data-contentPanel");
    var dataContentPanelElementId = document.querySelector(`[data-id="${dataContentPanelElement}"]`);
    dataContentPanelElementId.style.display = "block";

    var tabElements = document.getElementsByClassName("tab");
    Array.from(tabElements).forEach(element => element.style.backgroundColor = "grey");

    event.target.style.backgroundColor = "white";

}