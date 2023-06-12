var tabElement = document.getElementsByClassName("tab");
Array.from(tabElement).forEach(element => element.addEventListener("click", showActiveTabOnClick));

Array.from(document.querySelectorAll(`[data-active="true"]`)).forEach(element => element.click());

function showActiveTabOnClick(event) {
    var contentElement = event.target.parentElement.parentElement.getElementsByClassName("content");
    Array.from(contentElement).forEach(element => element.style.display = "none");

    var dataContentElement = event.target.getAttribute("data-content");
    var dataTabElement = event.target.parentElement.parentElement.querySelector(`[data-tab="${dataContentElement}"]`);
    var activeTabElement = event.target.parentElement.parentElement.querySelector(".tab.active");
    // var activeTabElement = event.target.closest(".tab.active");
    if(activeTabElement){
        activeTabElement.classList.remove("active");
    }
    event.target.classList.add("active");
    dataTabElement.style.display = "block"
}
