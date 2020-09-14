
// let n = 5;
// let lineIndex;
// let symbol = '*';
// let inputLine = '';

// for (lineIndex = 0; lineIndex < n; lineIndex += 1) {
//   inputLine = inputLine + symbol;
// };
// for (lineIndex = 0; lineIndex < n; lineIndex += 1) {
//   console.log(inputLine);
// };
let board = document.getElementById('pixel-board')
let amountOfSquares = 5;

for (counter = 0; counter < amountOfSquares;counter +=1){
    for (index = 0; index < amountOfSquares;index +=1){
        let square = document.createElement('div');
        square.className += 'pixel';
        board.appendChild(square)
    }
}


