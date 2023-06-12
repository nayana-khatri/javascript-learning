var deletedElement;

var addElement = document.getElementById("add");
addElement.addEventListener("click", addItemsToClickAdd);

var undoElement = document.getElementById("undo");
undoElement.addEventListener("click", undoItemToClickUndo);

function undoItemToClickUndo() {
    document.getElementById("items").appendChild(deletedElement);
}

function addItemsToClickAdd(event, item = '', isSaveRequired = true) {
    var inputElement = document.getElementById("inputText").value;

    if(inputElement === '') {
        inputElement = item;
    }

    var itemsElement = document.getElementById("items");
    itemsElement.innerHTML = itemsElement.innerHTML + `<span class="item">${inputElement}<span class="remove"> - </span></span>\n`

    if (!isSaveRequired) {
        return;
    }

    let getStoredItem = localStorage.getItem("MY_ITEM_LIST");
    if (!getStoredItem) {
        getStoredItem = '[]'
    }
    let getStoredItemConvert = JSON.parse(getStoredItem);
    getStoredItemConvert.push(`${inputElement}`);

    localStorage.setItem("MY_ITEM_LIST", JSON.stringify(getStoredItemConvert));
}


function delegate_event(event_type, ancestor_element, target_element_selector, listener_function) {
    ancestor_element.addEventListener(event_type, function (event) {
        if (event.target && event.target.matches && event.target.matches(target_element_selector)) {
            (listener_function)(event);
        }
    });
}

delegate_event('click', document, '.remove', your_function_here);

function your_function_here(event) {
    deletedElement = event.target.parentElement;
    deletedElement.remove();
}

function getLocalStorageItem() {
    let getStoredItem = localStorage.getItem("MY_ITEM_LIST");
    let getStoredItemConvert = JSON.parse(getStoredItem);

    console.log(getStoredItemConvert);

    getStoredItemConvert?.forEach(item => {
        addItemsToClickAdd(null, item, false);
    });
}

getLocalStorageItem();
