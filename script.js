
let board = document.getElementById('pixel-board')
let amountOfSquares = 5;

for (counter = 0; counter < amountOfSquares;counter +=1){
    for (index = 0; index < amountOfSquares;index +=1){
        let square = document.createElement('div');
        square.className += 'pixel';
        board.appendChild(square)
    }
    board.innerHTML = board.innerHTML + '<br>'
}


