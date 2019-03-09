var cartoons = [
    "rugrats",
    "heyarnold!",
    "Doug",
    "aaahhrealmonsters",
    "rockosmodernlife",
    "sailormoon",
    "gargoyles",
    "recess", 
    "couragethecowardlydog",
    "looneytunes",
    "scoobydoo,"
    
   ]
   
   
   var randomW = "";
   var lettersOfWord = []
   var blankSpace = 0;
   var blankCorrect = [];
   var wins = 0;
   var lettersGuessed = [];
   var guessesLeft = 13;
     

   
   randomW = cartoons[Math.floor(Math.random() * cartoons.length)];
   console.log(randomW)

   lettersOfWord = randomW.split("");

   blankSpace = lettersOfWord.length;
   
   for (var i = 0; i < blankSpace; i++) {
   blankCorrect.push ("_");

   }

   document.onkeyup = function(event) {

   
   
   document.getElementById("currentword").innerHTML = "  " + blankCorrect.join("  ");

   console.log(randomW);
   console.log(lettersOfWord);
   console.log(blankSpace);
   console.log(blankCorrect);

   
   
   var r = document.getElementById("rugrats");
   var heya = document.getElementById("heya");
   var doug = document.getElementById("doug");
   var aaahrm = document.getElementById("aaahrealmonsters");
   var rockosml = document.getElementById("rockosmodernlife");
   var sailorm = document.getElementById("sailormoon");
   var gargoyles = document.getElementById("gargoyles");
   var recess = document.getElementById("recess");
   var couragetcd = document.getElementById("couragetcd");
   var looneyt = document.getElementById("looneyt");
   var scoobydoo = document.getElementById("scoobydoo");

   

   function aud() {
    
    if (randomWord === words[0]) {
        scoobydoo.pause();
        looneyt.pause();
        couragetcd.pause();
        recess.pause();
        gargoyles.pause();
        sailorm.pause();
        rockosml.pause();
        aaahrm.pause();
        doug.pause();
        heya.pause();
        r.play();
        document.getElementById("image").src = "./assets/images/rugrats.gif";
 
    }

    else if (randomWord === words[1]) {
        scoobydoo.pause();
        looneyt.pause();
        couragetcd.pause();
        recess.pause();
        gargoyles.pause();
        sailorm.pause();
        rockosml.pause();
        aaahrm.pause();
        doug.pause();
        r.pause();
        heya.play();
        document.getElementById("image").src = "./assets/images/heya.gif";
 
    }

    else if (randomWord === words[2]) {
        scoobydoo.pause();
        looneyt.pause();
        couragetcd.pause();
        recess.pause();
        gargoyles.pause();
        sailorm.pause();
        rockosml.pause();
        aaahrm.pause();
        heya.pause();
        r.pause();
        doug.play();
        document.getElementById("image").src = "./assets/images/doug.gif";
 
    }


    else if (randomWord === words[3]) {
        scoobydoo.pause();
        looneyt.pause();
        couragetcd.pause();
        recess.pause();
        gargoyles.pause();
        sailorm.pause();
        rockosml.pause();
        doug.pause();
        heya.pause();
        r.pause();
        aaahrm.play();
        document.getElementById("image").src = "./assets/images/aaahhrm.gif";
 
    }

    else if (randomWord === words[4]) {
        scoobydoo.pause();
        looneyt.pause();
        couragetcd.pause();
        recess.pause();
        gargoyles.pause();
        sailorm.pause();
        aaahrm.pause();
        doug.pause();
        heya.pause();
        r.pause();
        rockosml.play();
        document.getElementById("image").src = "./assets/images/rocosml.gif";
 
    }

    else if (randomWord === words[5]) {
        scoobydoo.pause();
        looneyt.pause();
        couragetcd.pause();
        recess.pause();
        gargoyles.pause();
        rockosml.pause();
        aaahrm.pause();
        doug.pause();
        heya.pause();
        r.pause();
        sailorm.play();
        document.getElementById("image").src = "./assets/images/sailorm.gif";
 
    }

    
    else if (randomWord === words[6]) {
        scoobydoo.pause();
        looneyt.pause();
        couragetcd.pause();
        recess.pause();
        sailorm.pause();
        rockosml.pause();
        aaahrm.pause();
        doug.pause();
        heya.pause();
        r.pause();
        gargoyles.play();
        document.getElementById("image").src = "./assets/images/gargoyles.gif";
 
    }

    else if (randomWord === words[7]) {
        scoobydoo.pause();
        looneyt.pause();
        couragetcd.pause();
        gargoyles.pause();
        sailorm.pause();
        rockosml.pause();
        aaahrm.pause();
        doug.pause();
        heya.pause();
        r.pause();
        recess.play();
        document.getElementById("image").src = "./assets/images/recess.gif";
 
    }
    else if (randomWord === words[8]) {
        scoobydoo.pause();
        looneyt.pause();
        recess.pause();
        gargoyles.pause();
        sailorm.pause();
        rockosml.pause();
        aaahrm.pause();
        doug.pause();
        heya.pause();
        r.pause();
        couragetcd.play();
        document.getElementById("image").src = "./assets/images/couragetcd.gif";
 
    }

    else if (randomWord === words[9]) {
        scoobydoo.pause();
        couragetcd.pause();
        recess.pause();
        gargoyles.pause();
        sailorm.pause();
        rockosml.pause();
        aaahrm.pause();
        doug.pause();
        heya.pause();
        r.pause();
        looneyt.play();
        document.getElementById("image").src = "./assets/images/looneyt.gif";
 
    }

    else if (randomWord === words[10]) {
      looneyt.pause();
      couragetcd.pause();
      recess.pause();
      gargoyles.pause();
      sailorm.pause();
      rockosml.pause();
      aaahrm.pause();
      doug.pause();
      heya.pause();
      r.pause();
      scoobydoo.pause();
      document.getElementById("image").src = "./assets/images/scoobyd.gif";

  }

  function reset() {
    guessesLeft = 13;
    lettersGuessed = [];
    blankCorrect = [];
    Game()
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
    console.log('inside letter check')
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
  console.log("wins:" + wins + "| letters-guessed:" + lettersGuessed + "| guesses-left:" + guessesLeft)

 
  if (lettersOfWord.toString() == blankCorrect.toString()) {
      wins++;
      aud()
      reset()
    
      document.getElementById("winstracker").innerHTML = " " + wins;

    } else if (guessesLeft === 0) {
      lettersGuessed++;
      reset()
      document.getElementById("lettersguessed").innerHTML = " " + lettersGuessed;
  }
  document.getElementById("currentword").innerHTML = "  " + blankCorrect.join(" ");
  document.getElementById("guesses-left").innerHTML = " " + guessesLeft;
}

Game()


    var guessed = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(guessed);
 
    complete();
   
    console.log(guessed);

    document.getElementById("playerguesses").innerHTML = "  " + lettersGuessed.join(" ");


   }

  }







   
            
        


   
  if ( navigator.platform.indexOf('Win') != -1 ) {
    window.document.getElementById("wrapper").setAttribute("class", "windows");
  } else if ( navigator.platform.indexOf('Mac') != -1 ) {
    window.document.getElementById("wrapper").setAttribute("class", "mac");
  }