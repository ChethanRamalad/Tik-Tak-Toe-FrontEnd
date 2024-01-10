
let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

function handleClick(index) {
    
    if (board[index] === '' && gameActive) {
               
        board[index] = currentPlayer;

        renderBoard();
        
        if (checkWinner()) {
            document.getElementById('message').innerText = `Player ${currentPlayer} wins!`;            
            gameActive = false;
        } 
        else if (board.every(cell => cell !== '')) {
            document.getElementById('message').innerText = 'It\'s a draw!';
            gameActive = false;
        } 
        else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            document.getElementById('message').innerText = `Player ${currentPlayer}'s turn`;
        }
    }
}


function renderBoard() {
    for (let i = 0; i < 9; i++) {
        document.getElementsByClassName('cell')[i].innerText = board[i];
    }
}

function checkWinner() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
        [0, 4, 8], [2, 4, 6] // diagonals
    ];

    for (const pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return true;
        }
    }

    return false;
}

function resetGame() {
    currentPlayer = 'X';
    board = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;
    document.getElementById('message').innerText = `Player ${currentPlayer}'s turn`;
    renderBoard();
}

