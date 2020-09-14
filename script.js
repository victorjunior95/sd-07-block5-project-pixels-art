window.onload = function () {
  const divColor = document.querySelectorAll('.color');
  // aletera a classe selected conforme seleção da paleta de cores
  function selectColor() {
    for (let index = 0; index < divColor.length; index += 1) {
      divColor[index].className = 'color';
    }
    this.className = 'color selected';
  }

  // altera a cor do pixel selecionado no quadro de pixels
  function changeBackgroundColor() {
    const selectedColor = document.querySelector('.selected').style.backgroundColor;
    this.style.backgroundColor = selectedColor;
  }

  // criação da paleta de cores
  const paletaCores = ['black', 'red', 'green', 'blue'];

  for (let index = 0; index < divColor.length; index += 1) {
    divColor[index].style.backgroundColor = paletaCores[index];
    divColor[index].addEventListener('click', selectColor);
  }

  // criação do quadro de pixels
  const pixelBoard = document.querySelector('#pixel-board');
  for (let pixel = 0; pixel < 25; pixel += 1) {
    const board = document.createElement('div');
    board.className = 'pixel';
    board.addEventListener('click', changeBackgroundColor);
    pixelBoard.appendChild(board);
  }

  // limpa quadro de pixels
  const clearBoardButton = document.querySelector('#clear-board');
  clearBoardButton.addEventListener('click', function () {
    const pixels = document.querySelectorAll('.pixel');
    for (let index = 0; index < pixels.length; index += 1) {
      pixels[index].style.backgroundColor = 'white';
    }
  });

  // criação do quadro de pixel personalizado, entre 5 e 50 pixels
  function customPixelBoard() {
    const boardSizeInput = document.querySelector('#board-size').value;
    if (boardSizeInput === '') {
      alert('Board inválido!');
    } else if (boardSizeInput >= 5 && boardSizeInput <= 50) {
      pixelBoard.innerHTML = '';
      pixelBoard.style.maxWidth = (boardSizeInput * 40) + (boardSizeInput * 2) + 'px' ;
      for (let pixel = 0; pixel < Math.pow(boardSizeInput, 2); pixel += 1) {
        const board = document.createElement('div');
        board.className = 'pixel';
        board.addEventListener('click', changeBackgroundColor);
        pixelBoard.appendChild(board);
      }
    }
  };
  const generateBoardButton = document.querySelector('#generate-board');
  generateBoardButton.addEventListener('click', customPixelBoard);
};
