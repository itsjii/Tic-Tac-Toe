function getComputerChoice() {
    var randomNumber = Math.random();
        if (randomNumber <= 0.33) {
            return 'Rock';
            }
        else if (randomNumber >= 0.34 && randomNumber <= 0.66) {
            return 'Paper';
            }
        else {
            return 'Scissor';
        }
}
//If number is .33 or less, return Rock
//If number is between .34 and .66 return Paper
//If number is between .67 and 1 return Scissor

console.log(getComputerChoice());

function getTardChoice() {
    var choice = window.prompt("Choose Rock, Paper, or Scissor");
    var convertedChoice = choice.toLowerCase();

        if (convertedChoice === 'rock') {
            return 'Rock';
        }
        else if (convertedChoice === 'paper') {
            return 'Paper';
        }
        else if (convertedChoice === 'scissor') {
            return 'Scissor';
        }
        else {
            console.log('learn to type pick rock, paper, or scissor');
            getTardChoice();
        }
}
console.log(getTardChoice());

//Get choice of Rock, Paper, or Scissor
//Save that choice
//Return that choice

    var tardScore = 0;
    var ComputerScore = 0;

