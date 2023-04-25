var tabs = document.getElementsByClassName("tab");
Array.from(tabs).forEach(element => element.addEventListener("click", addContent))
var tab1 = document.getElementsByClassName("tabContent");
Array.from(tab1).forEach(element => element.style.display = "none");
tabs[0].click();


function addContent(event) {
    var tab1 = document.getElementsByClassName("tabContent");
    Array.from(tab1).forEach(element => element.style.display = "none");
   // tab1[0].style.display = "block";
    var dataTab = event.target.getAttribute("data-tab");
    var dataTabId = document.querySelector(`[data-id="${dataTab}"]`);
    var activeLi =  document.querySelector(".tab.active");
    if(activeLi) {
        activeLi.classList.remove("active")
    }
    event.target.classList.add("active")
    dataTabId.style.display = "block";
}