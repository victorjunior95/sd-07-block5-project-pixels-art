const clearButton = document.querySelector('#clear-board');
const coloredPixels = document.querySelectorAll('.pixel');
const pixelsBoard = document.querySelector('#pixel-board');

function clearBoard() {
  for (let i = 0; i < coloredPixels.length; i += 1){
    coloredPixels.style.backgroundColor = 'white';
  }
}

clearButton.addEventListener('click', clearBoard);
