var sumElement = document.getElementById("sum");
sumElement.addEventListener("click", sumOfInputs);

function sumOfInputs() {
    document.getElementById("ans").innerText = (Number(document.getElementById("input1").value)) + (Number(document.getElementById("input2").value));
}
