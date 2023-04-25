var deletedElement;
var add = document.getElementById("add");
add.addEventListener("click", addItems);
var undoButton = document.getElementById("undo");
undoButton.addEventListener("click", undo)

function undo() {
    document.getElementById("items").appendChild(deletedElement);
}

function addItems() {
    document.getElementById("items").innerHTML = document.getElementById("items").innerHTML + ` <span class="item">${document.getElementById("inputText").value} 
    <span class="remove">-</span>
</span>` 
}


function delegate_event(event_type, ancestor_element, target_element_selector, listener_function)
{
    ancestor_element.addEventListener(event_type, function(event)
    {
        if (event.target && event.target.matches && event.target.matches(target_element_selector))
        {
            (listener_function)(event);
        }
    });
}

delegate_event('click', document, '.remove', your_function_here);

function your_function_here(event){
    // console.log(event);
   deletedElement = event.target.parentElement;
   deletedElement.remove();
}
