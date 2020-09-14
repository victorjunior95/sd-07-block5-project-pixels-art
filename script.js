//  declarando variáveis
const pixelBoard = document.getElementById('pixel-board');
const colors = document.querySelectorAll('.color');
let numberOfLines = 5;
const clearButton = document.getElementById('clear-board');

//  evento de clique no quadro
function createEvent (pixelDiv) {
  pixelDiv.addEventListener('click', function () {
    const currentSelected = document.querySelector('.selected');
    pixelDiv.classList = currentSelected.classList;
  })
}

//  botão de limpar quadro
clearButton.addEventListener('click', function () {
  const allPixels = document.querySelectorAll('.board div');
  for (index = 0; index < allPixels.length; index += 1) {
    allPixels[index].classList = 'pixel white';
  }
});

//  função que enche a linha
function fillLine (line) {
  let pixelDiv = document.createElement('div');
  pixelDiv.classList.add('pixel', 'white');
  createEvent(pixelDiv);
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

//  função que remove cor selecionada
function clearSelected () {
  for (index = 0; index < colors.length; index += 1) {
    colors[index].classList.remove('selected');
  }
}

//  cria tabela inicial
createBoard(numberOfLines);

//  evento de clique na paleta de cores
for (index = 0; index < colors.length; index += 1) {
  colors[index].addEventListener('click', function (event) {
    clearSelected();
    event.target.classList.add('selected');
  });
}



