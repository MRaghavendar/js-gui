function calculation(){
    var firstNumber =  Number(document.getElementById("one").value);
    var secondNumber = Number(document.getElementById("two").value);
  
   document.getElementById("result").innerHTML = Math.max(firstNumber, secondNumber );
}