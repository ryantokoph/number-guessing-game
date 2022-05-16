let message1 = document.getElementById("message1");
let message2 = document.getElementById("message2");
let message3 = document.getElementById("message3");
let input = document.getElementById("guess");

let generatedNum = Math.floor(Math.random() * 100) + 1;
let numOfGuesses = 0;
let guessedNums = [];

function play() {

    console.log(generatedNum);

    let userGuess = document.getElementById("guess").value;
    do {
        if(userGuess < 1 || userGuess > 100) {
            alert("Please choose a number between 1 and 100");
        }
        else{
            guessedNums.push(" " + userGuess);
            numOfGuesses += 1;

            if(userGuess < generatedNum) {
                message1.textContent = "Your guess is too low..."
                message2.textContent = "Number of guesses: " + numOfGuesses;
                message3.textContent = "You have guessed: " + guessedNums;
            }
            else if(userGuess > generatedNum) {
                message1.textContent = "Your guess is too high..."
                message2.textContent = "Number of guesses: " + numOfGuesses;
                message3.textContent = "You have guessed: " + guessedNums;
            }
            else if(userGuess == generatedNum) {
                message1.textContent = "You guessed correctly! Congrats!!!"
                message2.textContent = "The number was " + generatedNum;
                message3.textContent = "You guessed it in " + numOfGuesses + " tries!";
                document.getElementById("guess").value = null;
                document.getElementById("button1").disabled = true;
            }
        }
    }
    while (numOfGuesses >= 11);

    if(numOfGuesses == 10) {
        message1.textContent = "Sorry, better luck next time!";
        message2.textContent = null;
        message3.textContent = null;
        document.getElementById("guess").value = null;
        document.getElementById("button1").disabled = true;
    }

}



function resetButton() {
    generatedNum = Math.floor(Math.random() * 100) + 1;
    guessedNums = [];
    numOfGuesses = 0;
    message1.textContent = "Number of guesses: 0";
    message2.textContent = "Guessed numbers: ";
    message3.textContent = null;
    document.getElementById("guess").value = null;
    document.getElementById("button1").disabled = false;
}