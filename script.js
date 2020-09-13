// Color variables
const colorPalette = document.getElementsByClassName('color');
let colorPixels = document.getElementsByClassName('pixel');
let selectedColor = document.getElementsByClassName('selected');

// Resize/Reset variables
const inputColumns = document.getElementById('columns');
const inputLines = document.getElementById('lines');
const resizeReset = document.getElementById('resize-reset');
const pixelBoard = document.getElementById('pixel-board');
let numberOfColumns = 5;
let numberOfLines = 5;

// Functions: Resize/Reset
function pixelBoardReset() {
  pixelBoard.innerHTML = '';
}

//  Functions: Color


function getColorFromPalette() {
  selectedColor[0].classList.remove('selected');
  event.target.classList.add('selected');
  selectedColor = document.getElementsByClassName('selected');
}

function changePixelColor() {
  selectedColor = document.getElementsByClassName('selected');
  event.target.style.backgroundColor = selectedColor[0].style.backgroundColor;
}

//  Functions: addEventListener to objects

function eventListenerToColors() {
  for (let index = 0; index < Object.keys(colorPalette).length; index += 1) {
    colorPalette[index].addEventListener('click', getColorFromPalette);
  }
}

function eventListenerToPixels() {
  colorPixels = document.getElementsByClassName('pixel');
  for (let index = 0; index < Object.keys(colorPixels).length; index += 1) {
    colorPixels[index].addEventListener('click', changePixelColor);
  }
}

function boardCreator() {
  pixelBoardReset();
  for (let line = 0; line < numberOfLines; line += 1) {
    let elementCreator = document.createElement('tr');
    elementCreator.className = 'line';
    pixelBoard.appendChild(elementCreator);
    for (let column = 0; column < numberOfColumns; column += 1) {
      elementCreator = document.createElement('td');
      elementCreator.className = 'pixel';
      document.getElementsByClassName('line')[line].appendChild(elementCreator);
    }
  }
}

function assignSize() {
  numberOfColumns = inputColumns.value;
  numberOfLines = inputLines.value;
  boardCreator();
  eventListenerToPixels();
}

eventListenerToColors();
eventListenerToPixels();

resizeReset.addEventListener('click', assignSize);

colorPalette[0].style.backgroundColor = 'black';
colorPalette[1].style.backgroundColor = 'red';
colorPalette[2].style.backgroundColor = 'green';
colorPalette[3].style.backgroundColor = 'blue';
