var cartoons = [
  "rugrats",
  "doug",
  "aaahhrealmonsters",
  "rockosmodernlife",
  "sailormoon",
  "gargoyles",
  "recess",
]


var randomW = "";
var lettersOfWord = []
var blankSpace = 0;
var blankCorrect = [];
var wins = 0;
var lettersGuessed = [];
var guessesLeft = 13;



randomW = cartoons[Math.floor(Math.random() * cartoons.length)];
//randomW = cartoons[0]; // TODO: static for testing
console.log(randomW)

lettersOfWord = randomW.split("");
console.log('letters-guessed', lettersOfWord);

blankSpace = lettersOfWord.length;
console.log('blankSpace', blankSpace);

for (var i = 0; i < blankSpace; i++) {
  blankCorrect.push("_");
}
console.log('blankCorrect', blankCorrect);

var r;
var heya
var doug;
var aaahrm;
var rockosml;
var sailorm;
var gargoyles;
var recess;
var couragetcd;
var looneyt;
var scoobydoo;


r = document.getElementById("rugrats");
doug = document.getElementById("doug");
aaahrm = document.getElementById("aaahrealmonsters");
rockosml = document.getElementById("rockosmodernlife");
sailorm = document.getElementById("sailormoon");
gargoyles = document.getElementById("gargoyles");
recess = document.getElementById("recess");
scoobydoo = document.getElementById("scoobydoo");

document.onkeyup = function (event) {

  document.getElementById("currentword").innerHTML = "  " + blankCorrect.join("  ");

  console.log(randomW);
  console.log(lettersOfWord);
  console.log(blankSpace);
  console.log(blankCorrect);

  var guessed = String.fromCharCode(event.keyCode).toLowerCase();
  checkLetters(guessed);

  complete();

  console.log(guessed);

  document.getElementById("letters-guessed").innerHTML = "  " + lettersGuessed.join(" ");

}

function reset() {
  guessesLeft = 14;
  lettersGuessed = [];
  blankCorrect = [];

  randomW = cartoons[Math.floor(Math.random() * cartoons.length)];
  blankSpace = lettersOfWord.length;
console.log('blankSpace', blankSpace);

lettersOfWord = randomW.split("");
console.log('letters-guessed', lettersOfWord);

blankSpace = lettersOfWord.length;
console.log('blankSpace', blankSpace);

for (var i = 0; i < blankSpace; i++) {
  blankCorrect.push("_");
  }
}

function checkLetters(letter) {
  var letterInWord = false;
  console.log('blankSpace', blankSpace);
  for (var i = 0; i < blankSpace; i++) {
    if (randomW[i] == letter) {
      letterInWord = true;
    }
  }


  if (letterInWord) {

    for (var i = 0; i < blankSpace; i++) {
      console.log('letters-guessed')
      console.log(letter);
      console.log(randomW[i]);
      if (randomW[i] == letter) {
        blankCorrect[i] = letter;
      }
    }
  }

  else {
    lettersGuessed.push(letter);
    guessesLeft--;
  }

  console.log(blankCorrect);

}

function complete() {
  console.log("wins:" + wins + "| letters-guessed:" + lettersGuessed + "| guesses-left:" + guessesLeft);


  if (lettersOfWord.toString() == blankCorrect.toString()) {
    wins++;
    aud();
    reset();

    document.getElementById("wins").innerHTML = " " + wins;

  } else if (guessesLeft === 0) {
    lettersGuessed++;
    reset();
    document.getElementById("letters-guessed").innerHTML = " " + lettersGuessed;
  }
  document.getElementById("currentword").innerHTML = "  " + blankCorrect.join(" ");
   document.getElementById("guesses-left").innerHTML = " " + guessesLeft;
    document.getElementById("wins").innerHTML = " " + wins;
}



function aud() {

    var ost = document.getElementById(randomW + "_ost")
    ost.play();
   // var titlePic = document.getElementById("titlePic")
   // titlePic.src("./assets/images/" + randomW + ".jpg");
}
 

if (navigator.platform.indexOf('Win') != -1) {
  window.document.getElementById("wrapper").setAttribute("class", "windows");
} else if (navigator.platform.indexOf('Mac') != -1) {
  window.document.getElementById("wrapper").setAttribute("class", "mac");
}