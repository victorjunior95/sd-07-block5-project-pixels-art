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

document.onload = newColors();

function getSelectedColor() {
  return document.getElementsByClassName('selected')[0].className.split(' ')[1];
}

function coloringPixels() {
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].addEventListener('click', () => {
      pixels[i].style.backgroundColor = getSelectedColor();
    });
  }
}

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
  coloringPixels();
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

function clearBoard() {
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = 'white';
  }
}

clear.addEventListener('click', clearBoard);

function createBoard(number) {
  board.innerHTML = '';
  for (let i = 0; i < number; i += 1) {
    const newLine = document.createElement('div');
    newLine.classList.add('tr');
    board.appendChild(newLine);
    for (let j = 0; j < number; j += 1) {
      const newColum = document.createElement('div');
      newColum.className = 'td pixel';
      newLine.appendChild(newColum);
    }
  }
}

function addColums(number) {
  number = inputNumber.value;
  if (!number) {
    alert('Board inválido!');
  }
  if (number > 50) {
    createBoard(50);
  } else if (number > 5) {
    createBoard(number);
    coloringPixels();
  }
}

renderNewBoard.addEventListener('click', addColums);

function generateColor() {
  const first = Math.floor(Math.random() * 256);
  const second = Math.floor(Math.random() * 256);
  const third = Math.floor(Math.random() * 256);
  return `rgb(${first} , ${second} , ${third})`;
}

function newColors() {
  blue.style.backgroundColor = generateColor();
  red.style.backgroundColor = generateColor();
  green.style.backgroundColor = generateColor();
}
