 var button = document.getElementById("sum");
 button.addEventListener("click", sumInputs);

function sumInputs() {
    
    var input1 = Number(document.getElementById("input1").value);
    var input2 = Number(document.getElementById("input2").value);
    var ans = input1 + input2 ;
    
    var result = document.getElementById("result");
    result.innerText = ans;
}
