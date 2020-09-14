//  declarando variáveis
const pixelBoard = document.getElementById('pixel-board');
const colors = document.querySelectorAll('.color');
let numberOfLines = 5;

//  função que enche a linha
function fillLine (line) {
  let pixelDiv = document.createElement('div');
  pixelDiv.classList.add('pixel');
  line.appendChild(pixelDiv);
}

//  função que cria linha
function createLine (numberOfLines) {
  let line = document.createElement('div');
  for (column = 0; column < numberOfLines; column += 1) {
    fillLine (line);
  }
  pixelBoard.appendChild(line);
}

//  função que cria tabela
function createBoard (numberOfLines) {
  for (lineNumber = 0; lineNumber < numberOfLines; lineNumber += 1) {
    createLine(numberOfLines);
  }
}

createBoard(numberOfLines);