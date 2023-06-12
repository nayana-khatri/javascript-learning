var tabElement = document.getElementsByClassName("tab");
Array.from(tabElement).forEach(element => element.addEventListener("click", showtabContentOnClick));

var contentElement = document.getElementsByClassName("content");
Array.from(contentElement).forEach(element => element.style.display = "none");
tabElement[0].click();


function showtabContentOnClick(event) {
    var contentElement = document.getElementsByClassName("content");
    Array.from(contentElement).forEach(element => element.style.display = "none");

    var dataTabElement = event.target.getAttribute("data-tab");
    var dataContentElement = document.querySelector(`[data-content= "${dataTabElement}"]`);

    var activeTabElement = document.querySelector(".tab.active");

    if (activeTabElement) {
        activeTabElement.classList.remove("active");
    }
    event.target.classList.add("active");
    
    dataContentElement.style.display = "block";

}