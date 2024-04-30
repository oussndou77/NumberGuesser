let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => Math.floor(Math.random() * 9) + 1;

const compareGuesses = (humanGuess, computerGuess, targetNumber) => {
    if (Math.abs(humanGuess - targetNumber) <= Math.abs(computerGuess - targetNumber)) {
        return true;
    } else {
        return false;
    }
};

const updateScore = (stringWinner) => {
    if (stringWinner  === 'human') {
        humanScore++;
    } else {
        computerScore++;
    }
};

const advanceRound = () => currentRoundNumber++;