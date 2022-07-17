
game();

function getComputerChoice(){
    const choice = Math.floor(Math.random() * 3);
    console.log(choice);
    switch(choice){
        case 0:
            return "Rock";
            break;
        case 1:
            return "Paper";
            break;
        case 2:
            return "Scissors";
            break;
        default:
            return "error";
    }
}

function getPlayerChoice(){
    let playerSelection = prompt("Choose between rock, paper and scissors: ");
    playerSelection = playerSelection.substring(0,1).toUpperCase()+playerSelection.substring(1).toLowerCase();
    while(playerSelection!="Paper" && playerSelection!="Rock" && playerSelection!="Scissors"){
        playerSelection = prompt("Input error. Please choose between rock, paper and scissors: ");
        playerSelection = playerSelection.substring(0,1).toUpperCase()+playerSelection.substring(1).toLowerCase();
    }
    return playerSelection;
}

function playRound(playerChoice, computerChoice){
    if((playerChoice === "Paper" && computerChoice === "Rock") || 
    (playerChoice === "Scissors" && computerChoice === "Paper") ||
    (playerChoice === "Rock" && computerChoice === "Scissors")){
        return "You Win! "+playerChoice+" beats "+computerChoice;
    }
    else if((playerChoice === "Scissors" && computerChoice === "Rock") || 
    (playerChoice === "Rock" && computerChoice === "Paper") ||
    (playerChoice === "Paper" && computerChoice === "Scissors")){
        return "You Loose! "+computerChoice+" beats "+playerChoice;
    }
    else{
        return "Draw! You both picked "+playerChoice+".";
    }
}

function game(){
    for(let i=0; i<5; i++){
        console.log(playRound(getPlayerChoice(), getComputerChoice()));
    }
}