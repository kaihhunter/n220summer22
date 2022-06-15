<!DOCTYPE html>
<html>
<head>
   <meta charset="utf-8">
   <title>Guessing Game (Numeric Value 1-10)</title>
   <style>
   body {
   width: 50%;
   max-width: 800px;
   min-width: 480px;
   margin: 0 auto;
   }
   </style>
</head>

<body>
<h1>Guess The Number</h1>

<p>Here random number between 1 - 10 is Generated so Guess Now </p>

<div class="form">
   <label>Enter a guess: </label>
   <input type = "text" id = "guessField" class = "guessField">
   <input type = "submit" value = "Submit guess"
       class = "guessSubmit" id = "submitguess">
</div>
<script type = "text/javascript">
   var y = Math.floor(Math.random() * 10 + 1); //here random number from 1 to 10 is generated
   var guess = 1; //initilize value start with guess 1 with start
   document.getElementById("submitguess").onclick = function(){
var x = document.getElementById("guessField").value;
if(x == y)
{     
   alert("Suceessfully Guess!!! YOU GUESSED IT RIGHT IN "+ guess + " GUESS ");
}
else if(x > y) /* if guessed number is greater
               than actual number*/
{     
   guess++;
   alert("Entered Number is smaller then You Entered");
}
else
{
   guess++;
   alert("Enter Number is Greater then You entered")
}
}
</script>
</body>
</html>