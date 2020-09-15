window.onload = function () {
  // Muda a cor do pixel selecionado
  function changeColor() {
    const pixel = event.target;
    for (let checker = 0; checker < document.getElementsByClassName('color').length; checker += 1) {
      for (let searcher = 0; searcher < document.getElementsByClassName('color')[checker].classList.length; searcher += 1) {
        if ((document.getElementsByClassName('color')[checker].classList[searcher]) === 'selected') {
          pixel.style.backgroundColor = document.getElementsByClassName('color')[checker].classList[1];
        }
      }
    }
  }

  // Cria o quadro de pixels
  function createBoard() {
    const boardSize = 25;
    for (let count = 0; count < boardSize; count += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      pixel.addEventListener('click', changeColor);
      document.getElementById('pixel-board').appendChild(pixel);
    }
  }

  createBoard();

  function selectedColor() {
    for (let checker = 0; checker < document.getElementsByClassName('color').length; checker += 1) {
      document.getElementsByClassName('color')[checker].classList.remove('selected');
    }
    const brush = event.target;
    brush.classList.add('selected');
  }

  for (let index = 0; index < document.getElementsByClassName('color').length; index += 1) {
    document.getElementsByClassName('color')[index].addEventListener('click', selectedColor);
  }
};
