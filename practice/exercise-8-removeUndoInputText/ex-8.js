var deletedElement;

var addElement= document.getElementById("add");
addElement.addEventListener("click", addItemsToClickAdd);

var undoElement = document.getElementById("undo");
undoElement.addEventListener("click", undoItemToClickUndo);

function undoItemToClickUndo(){
    document.getElementById("items").appendChild(deletedElement);
}

function addItemsToClickAdd() {
var inputElement = document.getElementById("inputText").value;
var itemsElement = document.getElementById("items");
itemsElement.innerHTML = itemsElement.innerHTML + `<span class="item">${inputElement}<span class="remove"> - </span></span>\n`
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
   deletedElement = event.target.parentElement;
   deletedElement.remove();
}