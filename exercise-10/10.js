var add = document.getElementById("addTile");
add.addEventListener("click", addMoreTile);

function addMoreTile(event) {
   // document.getElementsByClassName("tileWrapper")[0].innerHTML =  document.getElementsByClassName("tileWrapper")[0].innerHTML + `<div class="tile1"></div>`

   var div = document.createElement(`div`);
   div.setAttribute("class", `tile`);

   document.getElementsByClassName("tileWrapper")[0].insertBefore(div, event.target.parentElement);
}