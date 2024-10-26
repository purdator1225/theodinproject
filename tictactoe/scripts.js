//gameboard object 

const gameBoard = (function(){

    let board = [['','','',],['','',''],['','','']]


    let showBoard = ()=>{alert(board)}
    
    return {
        showBoard,board
    }
})()


//player object 

// function player(name, marker){

//     return {name,marker}

// }

// let player1 = player('brian','marker')

// console.log(player1.name)


//gamecontroller object 

function gameController(player1Name="brian", player2Name='computer'){

    let isGameOn = false


    //the hidden variables

    const players = [
        {name: player1Name,
        marker: 'X'
        },
        {
            name: player2Name,
            marker: 'O'
        }
    ]

    let activePlayer = players[0]

    
    const playRound = (gameBoard)=>{

        console.log(`${activePlayer.name}]'s turn`)

        let row = prompt('what is your row choice?')
        console.log(`row ${row} picked`)

        let col = prompt('what is your col choice?')
        console.log(`col ${col} picked`)


        //add the current players marker to the board
        gameBoard[row-1][col-1] = activePlayer.marker

        console.log('turn ends')

        //switch
         activePlayer = activePlayer === players[0] ? players[1] : players[0];

        console.log(`Currently active : ${activePlayer.name}`)


        
    }
}



    //get the coordinates of where to plot the marker 

    // const getPosition = (row,column){

    // }


    const checkWinner = (gameBoard, marker)=>{

        
        for(let rows of gameBoard){

             //horizontal win conditions

            if(rows[0] === marker &&  rows[1] === marker && rows[2] === marker){
                isWinner = true

                //get previous player

                activePlayer = activePlayer === players[0] ? players[1] : players[0];

                console.log(`winner is ${activePlayer}`)
 
            }

        }
            //vertical win conditions


        for (let col = 0; col < 3; col++) {
        // Check if all rows in the current column contain the same marker
        if (gameBoard[0][col] === marker && gameBoard[1][col] === marker && gameBoard[2][col] === marker) {
                 isWinner = true


                activePlayer = activePlayer === players[0] ? players[1] : players[0];

                console.log(`winner is ${activePlayer}`)


        }


    }

    
    return {isGameOn, playRound, checkWinner, activePlayer

    }

}
//changes turns of players 


//while gameOn, playMove and Switch Player and Check Winner, if winner found, end game and print last player


//i initiate the function, returning all the functions in global 

let controller = gameController()

let startGame = prompt('Type y to Start Game')

while(startGame === 'y' && !isWinner){

        controller.playRound(gameBoard.board)

        gameBoard.showBoard()

        controller.checkWinner(gameBoard.board)

    }





//asks player for choice 
//put choice in gameboard array 
//check if any win / tie conditions hit 
//

