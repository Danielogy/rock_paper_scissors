let playerWins = 0;
let computerWins = 0;
let executeGameLogic = true;

const description = document.querySelector('.description');

const playerScore = document.querySelector('#player-score');
const playerInput = document.querySelector('#player-selection');

const computerScore = document.querySelector('#computer-score');
const computerInput = document.querySelector('#computer-selection');

const winner = document.querySelector('#announce-winner');
const playAgain = document.querySelector('.play-again');


//get Player Selection from button click & start Round.
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (executeGameLogic) {
            let playerChoice = '';
            playerChoice = getSelection(button);
            game(playerChoice);
        }
        else {
            if (button.id == 4)
                location.reload();
        }
    });
});

//game logic
function game(playerSelection) {
    let outcome;
    const computerSelection = computerPlay();

    outcome = playRound(playerSelection, computerSelection);

    if (outcome == 0) {
        playerWins++;
        playerScore.textContent = playerWins;
    }
    else if (outcome == 1) {
        computerWins++;
        computerScore.textContent = computerWins;
    }

    if (playerWins == 5) {
        winner.textContent = 'Congratulations! You have won!';
        executeGameLogic = false;
        showPlayAgain();
    }

    else if (computerWins == 5) {
        winner.textContent = 'Sorry, it looks like you have lost.';
        executeGameLogic = false;
        showPlayAgain();
    }
}

//play a single round of rock, paper, scissors
function playRound(playerSelection, compSelection) {
    //three possible solutions [Win, Lose, Tie]
    // 0 = win; lose = 1; 2 = tie;

    //player selection == Rock
    if (playerSelection == "ROCK" && compSelection == "ROCK") {
        description.textContent = 'Tie! Rock and Rock.';
        return 2;
    }
    else if (playerSelection == "ROCK" && compSelection == "PAPER") {
        description.textContent = 'You Lose! Paper beats Rock.';
        return 1;
    }
    else if (playerSelection == "ROCK" && compSelection == "SCISSORS") {
        description.textContent = 'You Win! Rock beats Scissors.';
        return 0;
    }

    //player selection == Paper
    else if (playerSelection == "PAPER" && compSelection == "ROCK") {
        description.textContent = 'You Win! Paper beats Rock.';
        return 0;
    }
    else if (playerSelection == "PAPER" && compSelection == "PAPER") {
        description.textContent = 'Tie! Paper & Paper.';
        return 2;
    }
    else if (playerSelection == "PAPER" && compSelection == "SCISSORS") {
        description.textContent = 'You Lose! Scissors beats Paper.';
        return 1;
    }

    //player selection == Scissors
    else if (playerSelection == "SCISSORS" && compSelection == "ROCK") {
        description.textContent = 'You Lose! Rock beats Scissors.';
        return 1;
    }
    else if (playerSelection == "SCISSORS" && compSelection == "PAPER") {
        description.textContent = 'You Win! Scissors beats Paper.';
        return 0;
    }
    else if (playerSelection == "SCISSORS" && compSelection == "SCISSORS") {
        description.textContent = 'Tie! Scissors and Scissors';
        return 2;
    }
}

function showPlayAgain() {
    playAgain.style.display = "";
}

//get Computer's selection
function computerPlay() {
    const selection = ['Rock', 'Paper', 'Scissors'];
    let num = Math.floor(Math.random() * Math.floor(selection.length));

    computerInput.textContent = selection[num];
    return selection[num].toUpperCase();
}

//return player's choice
function getSelection(button) {
    if (button.id == 1) {
        playerInput.textContent = 'Rock';
        return 'ROCK'
    }
    else if (button.id == 2) {
        playerInput.textContent = 'Paper';
        return 'PAPER'
    }
    else if (button.id == 3) {
        playerInput.textContent = 'Scissors';
        return 'SCISSORS'
    }
}