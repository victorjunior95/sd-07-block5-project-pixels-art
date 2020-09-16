const black = document.getElementById('black');
const blue = document.getElementById('blue');
const green = document.getElementById('green');
const red = document.getElementById('red');
const pixels = document.getElementsByClassName('pixel');
const clear = document.getElementById('clear-board');
const generateBoard = document.getElementById('generate-board');
const inputGenerateBoard = document.getElementById('board-size');

// document.onload = newColors();

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

function clearBoard() {
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = 'white';
  }
}

clear.addEventListener('click', clearBoard);

function generateBoardWithSize() {
  if (!inputGenerateBoard.value) {
    alert('Board inválido!');
  }
}

generateBoard.addEventListener('click', generateBoardWithSize);
