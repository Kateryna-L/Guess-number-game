var yourGuessOk = document.getElementById("OK"),
  leftPupil = document.getElementById("left-pupil"),
  rightPupil = document.getElementById("right-pupil");

var myNumber = randomNumber(1, 100);
function randomNumber(min, max){
  var myNum = Math.floor(Math.random() * (max - min + 1)) + min;
  return myNum;
}
function result() {
  var myAnswer=document.getElementById("answer"),
  yourGuess=document.getElementById("put-number"),
  yourGuessValue = yourGuess.value;

  if (yourGuessValue == myNumber) {
     myAnswer.innerHTML = "Вгадав!";
  }
  else if (yourGuessValue > myNumber) {
    myAnswer.innerHTML = "Ні, моє число менше";
  }
  else if (yourGuessValue < myNumber) {
    myAnswer.innerHTML = "Ні, моє число більше";
  }
}

var playAgain=document.getElementById("play-again-btn");
playAgain.addEventListener("click", newGame);
function newGame() {
  location.reload()
}

function crossEyes(){
  leftPupil.style.margin = "auto 0 auto auto";
  rightPupil.style.margin = "0";
}

function normalEyes(){
  leftPupil.style.margin = "auto";
  rightPupil.style.margin = "auto";
}
