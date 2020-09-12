const clearButton = document.querySelector('#clear-board');
const coloredPixels = document.querySelectorAll('.pixel');
const pixelsBoard = document.querySelector('#pixel-board');
const paleta = document.querySelectorAll('.color');


function clearBoard() {
  pixelsBoard.classList.add('white');  
}

clearButton.addEventListener('click', clearBoard);
