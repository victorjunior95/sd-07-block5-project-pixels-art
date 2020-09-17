const black = document.getElementById('black');
const blue = document.getElementById('blue');
const green = document.getElementById('green');
const red = document.getElementById('red');
const pixels = document.getElementsByClassName('pixel');
const clear = document.getElementById('clear-board');
const board = document.getElementById('pixel-board');
const colums = document.getElementsByClassName('tr');
const inputNumber = document.getElementById('board-size');
const renderNewBoard = document.getElementById('generate-board');

function initialSizeBoard() {
  for (let i = 0; i < 5; i += 1) {
    const newLine = document.createElement('div');
    newLine.classList.add('tr');
    board.appendChild(newLine);
    for (let j = 0; j < 5; j += 1) {
      const newColum = document.createElement('div');
      newColum.className = 'td pixel initial';
      newLine.appendChild(newColum);
    }
  }
}

document.onload = initialSizeBoard();

function removeAll() {
  black.classList.remove('selected');
  blue.classList.remove('selected');
  green.classList.remove('selected');
  red.classList.remove('selected');
}

function selectColor(element, color) {
  removeAll();
  element.className = `color ${color} selected`;
}

blue.addEventListener('click', () => selectColor(blue, 'blue'));
black.addEventListener('click', () => selectColor(black, 'black'));
green.addEventListener('click', () => selectColor(green, 'green'));
red.addEventListener('click', () => selectColor(red, 'red'));

function getSelectedColor() {
  return document.getElementsByClassName('selected')[0].className.split(' ')[1];
}

for (let i = 0; i < pixels.length; i += 1) {
  pixels[i].addEventListener('click', () => {
    pixels[i].style.backgroundColor = getSelectedColor();
  });
}

function coloringPixels() {
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].addEventListener('click', () => {
      pixels[i].style.backgroundColor = getSelectedColor();
    });
  }
}

function hideInitialGrid() {
  const initialGrid = document.getElementsByClassName('initial');
  for (let i = 0; i < initialGrid.length; i += 1) {
    initialGrid[i].classList.toggle('display');
  }
}

function clearBoard() {
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = 'white';
  }
}

clear.addEventListener('click', clearBoard);

function addColums(number) {
  number = inputNumber.value;
  if (!number) {
    alert('Board inválido!');
  }
  if (number > colums.length && number <= 50) {
    for (let i = 0; i < number; i += 1) {
      const newLine = document.createElement('div');
      newLine.classList.add('tr');
      board.appendChild(newLine);
      for (let j = 0; j < number; j += 1) {
        const newColum = document.createElement('div');
        newColum.className = 'td pixel';
        newColum.style.backgroundColor = 'white';
        newLine.appendChild(newColum);
      }
    }
    coloringPixels();
    hideInitialGrid();
  }
}

renderNewBoard.addEventListener('click', addColums);
