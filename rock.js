//T21-05-24 project started-> 02:01p.m
//project finished -> 03:55p.m

const choices = ['rock','paper','scissor'];
let result = "";

const playerChoice = document.getElementById("playerChoice");
const computerChoice = document.getElementById("computerChoice");
const resultGame = document.getElementById("resultGame");

const playerScore = document.getElementById("playerScore");
const computerScore = document.getElementById("computerScore");

let playerCount = 0;
let computerCount = 0;

function playGame(optionPlayer) {

    let computer = choices[Math.floor(Math.random()*3)];

    console.log(computer)

    if(optionPlayer === computer) {
        result = "You are TIE 🙄";
    }
    else{
        switch(optionPlayer){
            case "rock":
                result = (computer === "scissor") ? "YOU WIN! 🥳" : "YOU LOSE 😭";
                console.log(result);
                break;
            case "paper":
                result = (computer === "rock") ? "YOU WIN! 🥳" : "YOU LOSE 😭";
                break;
            case "scissor":
                result = (computer === "paper") ? "YOU WIN! 🥳" : "YOU LOSE 😭";
                break;
        }
    }

    playerChoice.textContent = `PLAYER: ${optionPlayer}`;
    computerChoice.textContent = `COMPUTER: ${computer}`;
    resultGame.textContent = `${result}`;

    resultGame.classList.remove("green","red");

    switch(result){
        case("YOU WIN! 🥳"):
            playerCount++;
            resultGame.classList.add("green");
            playerScore.textContent = `${playerCount}`;
            playerScore.classList.add("green");
            break;
        case("YOU LOSE 😭"):
            computerCount++;
            resultGame.classList.add("red");  
            computerScore.textContent = `${computerCount}`;
            computerScore.classList.add("red");
            break;   
    }

}