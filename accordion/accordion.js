var headings = document.getElementsByClassName("heading");

Array.from(headings).forEach((element) => element.addEventListener("click", collapsible2));


var contentPanels = document.getElementsByClassName("contentPanel");
Array.from(contentPanels).forEach((element) => element.style.display = "none");

// function collapsible(event) {
//     var contentPanel = (event.target.parentElement.getElementsByClassName("contentPanel"))[0];

//     if (contentPanel.style.display === "block") {
//         contentPanel.style.display = 'none';
//         (event.target.getElementsByClassName("icon"))[0].innerText = "+";
//     }
//     else {
//         contentPanel.style.display = 'block';
//         (event.target.getElementsByClassName("icon"))[0].innerText = "-";
//     }
// }


function collapsible2(event) {
    var contentPanel = (event.target.parentElement.getElementsByClassName("contentPanel"))[0];
    var accordionElenment = event.target.parentElement.parentElement;
    var allContentPanels = accordionElenment.getElementsByClassName("contentPanel");

    if (contentPanel.style.display === "block") {
        contentPanel.style.display = 'none';
        (event.target.getElementsByClassName("icon"))[0].innerText = "+";
    }
    else {
        Array.from(allContentPanels).forEach((element) => {
            (element.parentElement.getElementsByClassName("icon"))[0].innerText = "+";
            element.style.display = 'none';
        });

        contentPanel.style.display = 'block';
        (event.target.getElementsByClassName("icon"))[0].innerText = "-";
    }  
}