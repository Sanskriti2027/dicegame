
var randomNumber1 = Math.floor(Math.random()*6)+1;

var randomDiceImages = "dice" + randomNumber1 + ".png";

var randomImagesSource = "images/" + randomDiceImages;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImagesSource);

var randomNumber2 = Math.floor(Math.random()*6)+1;

var randomImagesSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImagesSource2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩Player 1 Wins!"
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!🚩"
}
else {
  document.querySelector("h1").innerHTML = "Draw!"
}
