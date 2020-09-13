window.onload = function () {

  // criação da paleta de cores
  let paletaCores = ['black', 'red', 'green', 'blue'];

  const divColor = document.querySelectorAll('.color');

  for (let index = 0; index < divColor.length; index += 1) {
    divColor[index].style.backgroundColor = paletaCores[index];
  }

  // criação do quadro de pixels
  let pixelBoard = document.querySelector('#pixel-board');
  for (let pixel = 0; pixel < 25; pixel += 1) {
    const board = document.createElement('div');
    board.className = 'pixel';
    pixelBoard.appendChild(board);
  }
}
  