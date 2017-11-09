var leftPupil = document.getElementById("left-pupil"),
  rightPupil = document.getElementById("right-pupil");

function crossEyes(){
  leftPupil.style.margin = "auto 0 auto auto";
  rightPupil.style.margin = "0";
}

function normalEyes(){
  leftPupil.style.margin = "auto";
  rightPupil.style.margin = "auto";
}

function youGuessEyes() {
  leftPupil.style.margin = "0";
  rightPupil.style.margin = "0";
}

function iGuessEyes() {
  leftPupil.style.margin = "auto 0 auto auto";
  rightPupil.style.margin = "auto 0 auto auto";
}