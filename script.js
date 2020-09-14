//Defining the colors
const black = document.querySelector('#black');
const red = document.querySelector('#red');
const green = document.querySelector('#green');
const blue = document.querySelector('#blue');

black.style.backgroundColor = 'black';
red.style.backgroundColor = 'red';
green.style.backgroundColor = 'green';
blue.style.backgroundColor = 'blue';

//Drawing the pixel board;
function initialPixelBoard() {
  let boardSize = 5;
  let pixelBoard = document.querySelector('.pixel-board');

  for (let rows = 0; rows < boardSize; rows += 1) {
    
    let pixelRow = document.createElement('div');
    pixelRow.classList.add('pixel-row');  
    
    for (let cells = 0; cells < boardSize; cells += 1) {
      
      let pixelCell = document.createElement('div');
      pixelCell.classList.add('pixel', 'border');
      pixelRow.appendChild(pixelCell)
    }
    
    pixelBoard.appendChild(pixelRow);
  }
}             

initialPixelBoard();