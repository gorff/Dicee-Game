var randomNumber1;
randomNumber1 = Math.ceil(6*Math.random());
randomNumber2 = Math.ceil(6*Math.random());
document.getElementById("dice1").src = "./images/dice"+randomNumber1+".png";
document.getElementById("dice2").src = "./images/dice"+randomNumber2+".png";
if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
} else if (randomNumber2>randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
else{
  document.querySelector("h1").innerHTML = "Draw!";

}
