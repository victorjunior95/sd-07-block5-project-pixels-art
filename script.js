const clearButton = document.querySelector('#clear-board');
const coloredPixels = document.querySelectorAll('.pixel');
const pixelsBoard = document.querySelector('#pixel-board')
function clearBoard() {  
  pixelsBoard.style.backgroundColor = 'white';
}

clearButton.addEventListener('click', clearBoard);