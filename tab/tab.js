var tabs = document.getElementsByClassName("tab");

Array.from(tabs).forEach(loopTabs);

function loopTabs(element) {
    // element => element.addEventListener("click" , tabsHandler)
    element.addEventListener("click" , tabsHandler);
}

function tabsHandler(event) {

    var allContentPanels = document.getElementsByClassName("contentPanel");
    Array.from(allContentPanels).forEach(element => element.style.display = "none");

    var contentPanelId = event.target.getAttribute("data-contentPanel"); // "content-1"
   // console.log(contentPanelId)
    var  tabcontent = document.querySelector(`[data-id="${contentPanelId}"]`);
    // var  tabcontent = document.querySelectorAll(`[data-id="content-1"]`);
    console.log(tabcontent)

    var tabGet = document.getElementsByClassName("tab");
    Array.from(tabGet).forEach(element => element.style.backgroundColor = " #e1e3fa")
    console.log(tabGet)
    tabcontent.style.display = "block";
    event.target.style.backgroundColor = "white";
    
}