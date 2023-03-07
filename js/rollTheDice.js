var diceValue1= Math.floor( (Math.random() * 6) +1 );
var diceValue2= Math.floor( (Math.random() * 6) +1 );

document.querySelector(".dice1 img").setAttribute("src", "images/dice" + diceValue1 + ".png");
document.querySelector(".dice2 img").setAttribute("src", "images/dice" + diceValue2 + ".png");

if(diceValue1 > diceValue2){
    document.querySelector("h1").innerHTML= "Player 1 Wins";
}
else if(diceValue1 < diceValue2){
    document.querySelector("h1").innerHTML= "Player 2 Wins";
}
else{
    document.querySelector("h1").innerHTML= "It's a Tie";
}