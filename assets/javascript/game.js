window.onload = function () {

  

    
    var wordbank = ["namib ","black rock", "atacama ", "sahara", "gobi ", "negev ", "mojave ", "antarctic ", "wildebeest", "sonoran ", "thar", "rub al khali"];
    var currentWord = "";
    var word = [];
    var blanks = 0;
    var blanksGuesses = [];
    var wrongGuesses = [];
    
    
    var wins = 0;
    var guesses = 9;
    
   
    
   
    
    function startGame () {
        currentWord = wordbank[Math.floor(Math.random() * wordbank.length)];
        word = currentWord.split("");
        blanks = word.length;
    
        
        guesses = 9;
        wrongGuesses = [];
        blanksGuesses = [];
    
    
        for (var i = 0; i < blanks; i++) {
            blanksGuesses.push("_");
            
        }
    
        
        document.getElementById("currentWord").innerHTML = blanksGuesses.join("  ");
        document.getElementById("guessesLeft").innerHTML = guesses;
        
        document.getElementById("wins").innerHTML = wins;
    
    }
    
    function checkLetters(letter) {
       
        var letterInWord = false;
    
        for (var i = 0; i < blanks; i++) {
            if(currentWord[i] == letter) {
                letterInWord = true;
              
            }
            
        }
      
        if(letterInWord) {
            for (var i = 0; i < blanks; i++) {
                if(currentWord[i] == letter) {
                    blanksGuesses[i] = letter;
                }
            }
        }
    
        else {
            wrongGuesses.push(letter);
            guesses--;
        }
    }

    
    
    function roundOver() {
    
        document.getElementById("guessesLeft").innerHTML = guesses;
        document.getElementById("currentWord").innerHTML = blanksGuesses.join("  ");
        document.getElementById("guessed").innerHTML = wrongGuesses.join("  ");
    
        if (word.toString() == blanksGuesses.toString()) {
            wins++;
            alert("You Win");
    
            document.getElementById("wins").innerHTML = wins;
            startGame()
        }
    
        else if (guesses === 0) {
            alert("No Bueno!");
            startGame();
        }
    }
    
    
    startGame ();
    
    
    document.onkeyup = function(event) {
        var letterGuessed = String.fromCharCode(event.keyCode).toLocaleLowerCase();
        checkLetters(letterGuessed);
        roundOver();


}


}









