var myAnswer=document.getElementById("my-guess"),
  myNumber=document.getElementById("my-number"),
  less=document.getElementById("less"),
  more=document.getElementById("more"),
  right=document.getElementById("right"),
  leftPupil = document.getElementById("left-pupil"),
  rightPupil = document.getElementById("right-pupil");

right.addEventListener("click", win);
less.addEventListener("click", makeLess);
more.addEventListener("click", makeMore);

function win() {
    myAnswer.innerHTML="Ура!";
    myAnswer.style.fontSize = "30pt";
}

var num=50,
  highest=101,
  lowest=0;
myNumber.innerHTML=num;
function makeLess() {
  highest=num;
  var newNum=(highest-lowest)/2;
  num=num-newNum;
  num=Math.round(num);
  return myNumber.innerHTML=num;
}

function makeMore() {
  lowest=num;
  var newNum=(highest-lowest)/2;
  num=num+newNum;
  num=Math.round(num);
  console.log(num);
  return myNumber.innerHTML=num;
}

function crossEyes(){
  leftPupil.style.margin = "auto 0 auto auto";
  rightPupil.style.margin = "0";
}

function normalEyes(){
  leftPupil.style.margin = "auto";
  rightPupil.style.margin = "auto";
}
