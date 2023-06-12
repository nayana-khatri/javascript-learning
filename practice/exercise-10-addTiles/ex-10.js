var addTileElement = document.getElementById("addTile");
addTileElement.addEventListener("click", addTilesOnClick);

function addTilesOnClick(event) {
    var div = document.createElement("div");
    div.setAttribute("class", "tile");
    document.querySelector(".tileWrapper").insertBefore(div, event.target.parentElement);
}