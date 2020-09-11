const clearButton = document.querySelector('#clear-board');
const coloredPixels = document.querySelectorAll('.pixel');
function clearBoard() {
  for (let i = 0; i < coloredPixels.length; i += 0) {
    coloredPixels.style.backgroundColor = 'white';
  }

}