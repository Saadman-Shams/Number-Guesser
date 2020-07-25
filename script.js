let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// generateTarget() generates a random integer between 0 and 9
const generateTarget = () => {
    return Math.floor(Math.random() * 10);
};

const compareGuesses = (humanGuess, computerGuess, secretGuess) => {
    const humanDiff = Math.abs(secretGuess - humanGuess)
    const computerDiff = Math.abs(secretGuess - computerGuess)
    return humanDiff <= computerDiff;
};

const updateScore = winner => {
    if (winner === 'human') {
        humanScore++;
    } else {
        computerScore++;
    }
}
;
const advanceRound = () => {
    currentRoundNumber++;
};


