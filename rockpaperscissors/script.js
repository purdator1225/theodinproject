console.log('hello world')

let choices = ['rock','paper','scissors']

let randomChoice= Math.floor((Math.random()*3)+1)

let humanScore = 0 

let computerScore = 0

let currentRound = 0 

let totalRounds = 5;

//i got a random number, bt I need to constrain the randomness in between 1 to 3 

function getComputerChoice(){
    return choices[randomChoice]

}


function getHumanChoice(){
    return prompt('Please enter your choice')
}


function playRound(humanChoice, computerChoice){

if (humanChoice.toLowerCase()=== computerChoice.toLowerCase()) {
    console.log('Its a tie')
}

else if (humanChoice.toLowerCase() === 'rock' && computerChoice.toLowerCase()==='scissors'){

    humanScore +=1;

    console.log(`You win! ${humanChoice} beats ${computerChoice} `)

   }

     else if (humanChoice.toLowerCase() === 'scissors' && computerChoice.toLowerCase()==='paper'){

    humanScore +=1;

    console.log(`You win! ${humanChoice} beats ${computerChoice} `)
}


     else if (humanChoice.toLowerCase() === 'paper' && computerChoice.toLowerCase()==='rock'){

    humanScore +=1;

    console.log(`You win! ${humanChoice} beats ${computerChoice} `)

   }

   if (computerChoice.toLowerCase() === 'rock' && humanChoice.toLowerCase()==='scissors'){

    computerScore +=1;

    console.log(`You lose! ${computerChoice} beats ${humanChoice} `)

   }

     else if (computerChoice.toLowerCase() === 'scissors' && humanChoice.toLowerCase()==='paper'){

    computerScore +=1;

    console.log(`You lose! ${computerChoice} beats ${humanChoice} `)
}


     else if (computerChoice.toLowerCase() === 'paper' && humanChoice.toLowerCase()==='rock'){

    computerScore +=1;

    console.log(`You lose! ${computerChoice} beats ${humanChoice} `)

   }


   let humanScoreSpan = document.querySelector('.human-score')
   let computerScoreSpan = document.querySelector('.computer-score')

   humanScoreSpan.innerText = humanScore.toString()
   computerScoreSpan.innerText = computerScore.toString()


}




function playGame(){
    while (currentRound < totalRounds){
        const humanSelection = getHumanChoice()
        const computerSelection = getComputerChoice()
        playRound(humanSelection, computerSelection);
        currentRound +=1;

        let roundSpan = document.querySelector('.round-number')

        roundSpan.innerText = currentRound.toString()
    }

}

playGame()