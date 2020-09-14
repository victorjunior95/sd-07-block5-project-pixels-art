window.onload = function () {
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
  const divColor = document.querySelectorAll('.color');

  for (let index = 0; index < divColor.length; index += 1) {
    divColor[index].style.backgroundColor = paletaCores[index];
    divColor[index].addEventListener('click', selectColor);
  }

  // criação do quadro de pixels
  const pixelBoard = document.querySelector('#pixel-board');
  for (let pixel = 0; pixel < 25; pixel += 1) {
    const board = document.createElement('div');
    board.className = 'pixel';
    board.addEventListener('click', changeBackgroundColor),
    pixelBoard.appendChild(board);
  }

  // limpa quadro de pixels
  const clearBoardButton = document.querySelector('#clear-board');
  clearBoardButton.addEventListener('click', function() {
    const pixels = document.querySelectorAll('.pixel');
    for (let index = 0; index < pixels.length; index += 1) {
      pixels[index].style.backgroundColor = 'white';
    }
  });
};
