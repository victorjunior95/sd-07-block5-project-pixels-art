const clearButton = document.querySelector('#clear-board');
const paletas = document.querySelectorAll('.color');
const boardSize = document.querySelector('#board-size');
const generateButton = document.querySelector('#generate-board');
const paintPixels = document.querySelectorAll('.pixel');
const fullBoard = document.querySelector('#pixel-board');
const eliminateBoard = document.querySelector('#eliminate-board');
let paletaID = 'black';

function checkSelected() {
  for (let i = 0; i < paletas.length; i += 1) {
    if (paletas[i].classList.contains('selected')) {
      paletas[i].classList.remove('selected');
    }
  }
}

function defineColor() {
  checkSelected();
  const paletaSelecionada = event.target;
  paletaID = paletaSelecionada.getAttribute('id');
  paletaSelecionada.classList.add('selected');
}

for (let k = 0; k < paletas.length; k += 1) {
  paletas[k].addEventListener('click', defineColor);
}

function paintBoard() {
  if (paletaID === 'red') {
    event.target.classList.remove('white');
    event.target.classList.add('red');
  } else if (paletaID === 'blue') {
    event.target.classList.remove('white');
    event.target.classList.add('blue');
  } else if (paletaID === 'green') {
    event.target.classList.remove('white');
    event.target.classList.add('green');
  } else {
    event.target.classList.remove('white');
    event.target.classList.add('black');
  }
}

for (let i = 0; i < paintPixels.length; i += 1) {
  paintPixels[i].addEventListener('click', paintBoard);
}

function verifyBoard() {
  let numberOfSquares = 0;
  const itsPossible = boardSize.value;
  if (itsPossible < 5) {
    numberOfSquares = 5;
  } else {
    numberOfSquares = boardSize.value;
  }
  return numberOfSquares;
}
function sizeBoard() {
  const columnsNumber = Math.sqrt(boardSize.value);
  const columnsIntNumber = parseInt(columnsNumber, 10);
  const heightAndWidth = columnsIntNumber * 40;
  if (columnsIntNumber < 50) {
    fullBoard.style.gridTemplateColumns = `repeat(${columnsIntNumber}, 1fr)`;
    fullBoard.style.maxHeight = `${heightAndWidth}px`;
    fullBoard.style.maxWidth = `${heightAndWidth}px`;
  } else {
    fullBoard.style.gridTemplateColumns = 'repeat(50, 1fr)';
    fullBoard.style.maxHeight = '2000px';
    fullBoard.style.maxWidth = '2000px';
  }
}

function generateAlert() {
  const emptyInput = boardSize.value;
  if (emptyInput === '') {
    alert('Board inválido!');
  }
}

function createNewBoard() {
  const coloredPixels = document.querySelectorAll('.pixel');
  for (let i = 0; i < coloredPixels.length; i += 1) {
    fullBoard.removeChild(coloredPixels[i]);
  }
}

function generateBoard() {
  generateAlert();
  createNewBoard();
  fullBoard.classList.remove('quadro-nativo');
  const number = verifyBoard();
  if (number <= 5) {
    numberOfPixels = 5;
  }
  numberOfPixels = boardSize.value;
  sizeBoard();
  for (let i = 0; i < number; i += 1) {
    const square = document.createElement('div');
    square.className = 'pixel white';
    square.addEventListener('click', paintBoard);
    fullBoard.appendChild(square);
  }
  boardSize.value = '';
  paletaID = 'black';
}

eliminateBoard.addEventListener('click', createNewBoard);

generateButton.addEventListener('click', generateBoard);

clearButton.addEventListener('click', function clearBoard() {
  const coloredPixels = document.querySelectorAll('.pixel');
  for (let i = 0; i < coloredPixels.length; i += 1) {
    coloredPixels[i].className = 'pixel white';
    paletaID = 'black';
  }
});
