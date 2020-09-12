const clearButton = document.querySelector('#clear-board');
const coloredPixels = document.querySelectorAll('.pixel');
const pixelsBoard = document.querySelector('#pixel-board');
const paleta = document.querySelectorAll('.color');


function clearBoard() {
  for (let i = 0; i < coloredPixels.length; i += 1) {
    coloredPixels[i].classList.add('white');
  }
}

clearButton.addEventListener('click', clearBoard);
