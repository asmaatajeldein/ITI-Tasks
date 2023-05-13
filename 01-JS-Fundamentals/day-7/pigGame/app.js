/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


// PLAYER 1 //////////////////////////////////////
var player1Panel = document.querySelector(".player-0-panel");
var player1Current = document.getElementById("current-0");
var player1Score = document.getElementById("score-0");

// PLAYER 2 /////////////////////////////////////
var player2Panel = document.querySelector(".player-1-panel");
var player2Current = document.getElementById("current-1");
var player1Score = document.getElementById("score-1");

// BUTTONS //////////////////////////////////////
var newButton = document.querySelector(".btn-new");
var rollButton = document.querySelector(".btn-roll");
var holdButton = document.querySelector(".btn-hold");

// EVENTLISTENERS ////////////////////////////////
newButton.addEventListener("click", resetGame);
rollButton.addEventListener("click", function (event) {

    // In case there is a winner prevent event
    var winner = document.querySelector(".winner");
    if(winner) {
        event.preventDefault();
        return;
    }

    rollDice();


});
holdButton.addEventListener("click", function(event) {
    // In case there is a winner prevent event
    var winner = document.querySelector(".winner");
    if(winner) {
        event.preventDefault();
        return;
    }

    holdScore();
});

// FUNCTIONS /////////////////////////////////////
function rollDice() {
    var activePlayerCurrent = document.querySelector(".active .player-current-score");

    var randomDiceNumber = parseInt(Math.random() * 6) + 1;

    if (randomDiceNumber === 1) {
        activePlayerCurrent.innerHTML = "0";
        switchPlayer();
        return;
    }
    
    // Update Dice Image
    var diceImage = document.getElementsByClassName("dice")[0];

    if(diceImage.style.display === "") {
        diceImage.style.display = "block";
    }
    
    diceImage.src = `dice-${randomDiceNumber}.png`;

    // Update Current for Active Player
    var current = Number(activePlayerCurrent.innerHTML) + randomDiceNumber;
    activePlayerCurrent.innerHTML = current;
}

function switchPlayer() {

    var activePlayerPanel = document.querySelector(".active");

    if (activePlayerPanel === player1Panel) {
        player1Panel.classList.remove("active");
        player2Panel.classList.add("active");
    } else {
        player2Panel.classList.remove("active");
        player1Panel.classList.add("active");
    }

}

function holdScore() {
    var activePlayerPanel = document.querySelector(".active");
    var activePlayerScore = document.querySelector(".active .player-score");
    var activePlayerCurrent = document.querySelector(".active .player-current-score");
    
    var playerScore = Number(activePlayerScore.innerHTML);
    playerScore += Number(activePlayerCurrent.innerHTML);

    activePlayerScore.innerHTML = playerScore;
    activePlayerCurrent.innerHTML = "0";

    if (!(playerScore >= 100)) {
        switchPlayer();
    } else {
        activePlayerPanel.classList.remove("active");
        activePlayerPanel.classList.add("winner");
        document.querySelector(".winner .player-name").innerHTML = "Winner!"
    }
}

function resetGame() {
    location.reload();
}