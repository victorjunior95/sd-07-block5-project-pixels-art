let boardSizeLoaded =  5;

function removeBoard() {
  const pixelBoard = document.getElementsByClassName('pixel-board')[0];
  let boards = document.getElementsByClassName('pixel');

  for(let index = 0; index < boards.length; index += 1){
    pixelBoard.removeChild(boards[index]);
  }
}

// generate board
function generateBoard() {
  let boardSize = boardSizeLoaded * boardSizeLoaded;

  const pixelBoard = document.getElementsByClassName('pixel-board')[0];
  pixelBoard.style.width = `${40 * boardSizeLoaded}px`;
  pixelBoard.style.height = `${40 * boardSizeLoaded}px`;

  for(let index = 1; index <= boardSize; index += 1){
    let div = document.createElement('div');
    div.id = 'pixel';
    div.className = 'pixel';
    pixelBoard.appendChild(div);
  }
}

generateBoard();

const inputBoard = document.getElementById('board-size');
const btn = document.getElementById('generate-board');
btn.addEventListener('click', function(){
  boardSizeLoaded = inputBoard.value ? inputBoard.value : 5;
  removeBoard();
  generateBoard();
})


const colorsPallet = {
  color1: 'black',
  color2: 'red',
  color3: 'green',
  color4: 'blue',
}

let colorCurrent = colorsPallet.color1;

const colors = document.getElementsByClassName('color');

let selectedCurrent = document.getElementsByClassName('selected')[0];

function removeClassSelected() {
  let classes = selectedCurrent.className.split(' ');
  selectedCurrent.className = `${classes[0]} ${classes[1]}`;
}

function addClassSelected(colorButton) {
  colorButton.className += ' selected';
  colorCurrent = colorsPallet[`${colorButton.id}`];
  selectedCurrent = colorButton;
}

for (let index = 0; index < colors.length; index += 1) {
  colors[index].addEventListener('click', function (event) {
    if (selectedCurrent) removeClassSelected();
    addClassSelected(event.target);
  });
}

const pixels = document.getElementsByClassName('pixel');

for (let index = 0; index < pixels.length; index += 1) {
  pixels[index].addEventListener('click', function (event) {
    event.target.style.backgroundColor = colorCurrent;
  });
}

// limpar board
const clearBoard = document.getElementById('clear-board');
clearBoard.addEventListener('click', function(){
  for(let index = 0; index < pixels.length; index += 1){
    pixels[index].style.backgroundColor = 'white';
  }
})