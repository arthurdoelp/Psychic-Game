// Creates an array that lists out all of the computer's options.
var computerChoices = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];

//sets the values of the scores and universal variables used in the game.
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var currentGuesses = [];

document.onkeyup = function(event) {

    // Determines which key was pressed.
    var userGuess = event.key.toLowerCase();


    // Randomly chooses a choice from the options array. This is the Computer's guess.
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    // This logic determines the outcome of the game (win/loss), and increments the appropriate number. if the user's guess is the same as the computer's guess, thats a win. 
    //Otherwise, push the user's guess to the currentGuesses array and store those in the array. Also incrementally reduce the guessesLeft down from 9. 
        if (userGuess === computerGuess) {
                wins++;
            } else {
                currentGuesses.push(userGuess);
                guessesLeft--;
            }

        //if the user's guesses left gets down to 0, then reset the values. so set the guessesLeft back to 9. increase the losses by 1 and reset the currentGuesses array so it is cleared.
        if (guessesLeft === 0) {
            guessesLeft = 9;
            losses++;
            currentGuesses = [];
        }
    
        document.querySelector("#wins-text").innerHTML = "wins: " + wins;
        document.querySelector("#losses-text").innerHTML = "losses: " + losses;
        document.querySelector("#guessesLeft-text").innerHTML = "guesses left: " + guessesLeft;
        document.querySelector("#currentGuesses-text").innerHTML = "current guesses: " + currentGuesses;

};
    
//One thing to note is that if you want to reload the game, you need to use the reload page button in the chrome browser. Do NOT use the a force reload keyboard shortcut. 
//It sets the user's first guess to "meta" because of using the "command" button when using the keyboard shortcut.