const gameBoard = (function(){
    let board = [['','',''],['','',''],['','','']];

    const showBoard = ()=> console.log(board);

    return { board, showBoard };
})();


const gameController = function(player1Name = 'brian', player2Name = 'computer') {
    const players = [
        { name: player1Name, marker: 'X' },
        { name: player2Name, marker: 'O' }
    ];

    let playerTurn = players[0];

    const playRound = (gameBoard, row, col) => {
        if (gameBoard[row][col] === '') { // Only place marker if cell is empty
            gameBoard[row][col] = playerTurn.marker;

            // Switch turns after placing marker
            playerTurn = playerTurn === players[0] ? players[1] : players[0];
        } else {
            console.log("Spot is taken, choose another.");
        }
    };

    const checkWinner = (gameBoard) => {
        // Horizontal win conditions
        for (let i = 0; i < gameBoard.length; i++) {
            if (gameBoard[i][0] !== '' && gameBoard[i][0] === gameBoard[i][1] && gameBoard[i][1] === gameBoard[i][2]) {
                console.log(`Congrats! Winner is ${playerTurn.name}`);
                return gameBoard[i][0];
            }
        }

        // Vertical win conditions
        for (let i = 0; i < gameBoard.length; i++) {
            if (gameBoard[0][i] !== '' && gameBoard[0][i] === gameBoard[1][i] && gameBoard[1][i] === gameBoard[2][i]) {
                console.log(`Congrats! Winner is ${playerTurn.name}`);
                return gameBoard[0][i];
            }
        }

        // Diagonal win conditions
        if (gameBoard[0][0] !== '' && gameBoard[0][0] === gameBoard[1][1] && gameBoard[1][1] === gameBoard[2][2]) {
            console.log(`Congrats! Winner is ${playerTurn.name}`);
            return gameBoard[0][0];
        }

        if (gameBoard[0][2] !== '' && gameBoard[0][2] === gameBoard[1][1] && gameBoard[1][1] === gameBoard[2][0]) {
            console.log(`Congrats! Winner is ${playerTurn.name}`);
            return gameBoard[0][2];
        }

          const isTie = gameBoard.every(row => row.every(cell => cell !== ''));
        if (isTie) return 'tie';
    };

    return { playRound, checkWinner, getPlayerTurn: () => playerTurn };
};


const displayDOM = function() {
    let boardWrapper = document.querySelector('.board-holder');

    const displayBoard = (board) => {
        boardWrapper.innerHTML = ''; // Clear the board

        for (let row = 0; row < board.length; row++) {
            for (let col = 0; col < board[row].length; col++) {
                let cell = document.createElement('div');
                cell.classList.add('ttt-cell');

                cell.innerText = board[row][col];
                cell.setAttribute('data-row', row);  // Use zero-based indexing
                cell.setAttribute('data-col', col);

                boardWrapper.append(cell);
            }
        }
    };

    const displayMarker = (row, col, marker) => {
        const cell = boardWrapper.querySelector(`[data-row="${row}"][data-col="${col}"]`);
        if (cell) cell.innerText = marker;
    };

    const plotActivePlayer = (activePlayerName) => {
        let playerDiv = document.querySelector('.active-player-wrapper');
        playerDiv.innerText = `Active Player: ${activePlayerName}`;
    };

     const addClickListener = (clickHandler) => {
        boardWrapper.addEventListener('click', clickHandler);
    };

    return { displayBoard, plotActivePlayer, displayMarker, addClickListener };
};


const gameApp = (() => {
    let gameControllerInstance = gameController();
    let displayDOMInstance = displayDOM();

    const handleCellClick = (event) => {
        if (event.target.classList.contains('ttt-cell')) {
            const row = parseInt(event.target.getAttribute('data-row'));
            const col = parseInt(event.target.getAttribute('data-col'));

            const currentPlayer = gameControllerInstance.getPlayerTurn();

            

            if (gameBoard.board[row][col] === '') {
                gameControllerInstance.playRound(gameBoard.board, row, col);
                displayDOMInstance.displayMarker(row, col, currentPlayer.marker);


                 // Check for a winner after each move
         const result = gameControllerInstance.checkWinner(gameBoard.board);
            if (result === 'tie') {
                displayDOMInstance.plotActivePlayer("It's a tie!");
                displayDOMInstance.addClickListener(() => {}); // Disable further clicks
                return;
            } else if (result) {
                displayDOMInstance.plotActivePlayer(`Congrats! Winner is ${currentPlayer.name}`);
                displayDOMInstance.addClickListener(() => {}); // Disable further clicks
                return;
            }



                displayDOMInstance.plotActivePlayer(gameControllerInstance.getPlayerTurn().name);
            }
        }
    };

    const startGame = () => {
        displayDOMInstance.displayBoard(gameBoard.board);
        displayDOMInstance.plotActivePlayer(gameControllerInstance.getPlayerTurn().name);

        // Add event listener once for cell clicks
        displayDOMInstance.addClickListener(handleCellClick)
    };

    return { startGame };
})();

gameApp.startGame();
