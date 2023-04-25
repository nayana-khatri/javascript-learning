var tab = document.getElementsByClassName("tab");
Array.from(tab).forEach(element => element.addEventListener("click", clickOnTabs));

Array.from(document.querySelectorAll(`[data-active="true"]`)).forEach(element => element.click());

function clickOnTabs(event) {

  var content = event.target.parentElement.parentElement.getElementsByClassName("content");
  Array.from(content).forEach(element => element.style.display = "none");

  var dataContent = event.target.getAttribute("data-content");
  var dataTab = event.target.parentElement.parentElement.querySelector(`[data-tab="${dataContent}"]`);
  var activeLi = document.querySelector(".tab.active");
  if(activeLi){
    activeLi.classList.remove("active")
  }
  event.target.classList.add("active")
  dataTab.style.display = "block";
}