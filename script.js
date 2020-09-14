const pixelBoard = document.getElementById('pixel-board');
const inputBoardSize = document.getElementById('board-size');
const buttonBlack = document.querySelector('.black');
const buttonRed = document.querySelector('.red');
const buttonGreen = document.querySelector('.green');
const buttonBlue = document.querySelector('.blue');
const buttonColor = document.getElementsByClassName('color');
const buttonClear = document.getElementById('clear-board');
const buttonCreateBoard = document.getElementById('generate-board');
let firstTime = true;
let currentColor = 'black';

function selectColor(event) {
  for (const element of buttonColor) {
    if (element.classList[2] === 'selected') {
      element.classList.toggle('selected');
    }
  }
  event.target.classList.toggle('selected');
  currentColor = event.target.classList[1];
}

function fillColor(event) {
  event.target.style.backgroundColor = currentColor;
}

function addClickListener() {
  const div = document.querySelectorAll('.pixel');
  for (const element of div) {
    element.addEventListener('click', fillColor);
  }
}

function clearBoard() {
  const div = document.querySelectorAll('.pixel');
  for (const element of div) {
    element.style.backgroundColor = 'white';
  }
}

function createBoard(numberOfLines) {
  if (isEmpty()) {
    pixelBoard.innerHTML = '';
    for (let line = 0; line < numberOfLines; line += 1) {
      const divLine = document.createElement('div');
      divLine.className = 'pixel-line';
      pixelBoard.appendChild(divLine);

      for (let column = 0; column < numberOfLines; column += 1) {
        const divColumn = document.createElement('div');
        divColumn.className = 'pixel';
        divLine.appendChild(divColumn);
      }
    }
    addClickListener();
    firstTime = false;
  }
}

function isEmpty() {
  if (firstTime) return true;
  if (inputBoardSize.value.length === 0) return alert('Board inválido!');
  return true;
}

buttonBlack.addEventListener('click', selectColor);
buttonRed.addEventListener('click', selectColor);
buttonGreen.addEventListener('click', selectColor);
buttonBlue.addEventListener('click', selectColor);
buttonClear.addEventListener('click', clearBoard);
buttonCreateBoard.addEventListener('click', () => createBoard(Number(inputBoardSize.value)));
addClickListener();
createBoard(5);
