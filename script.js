window.onload = function () {

  // Muda a cor do pixel selecionado
  function changeColor() {
    let pixel = event.target;
    for (checker = 0; checker < document.getElementsByClassName('color').length; checker +=1) {
      for (searcher =0; searcher < document.getElementsByClassName('color')[checker].classList.length; searcher +=1) {
        if ((document.getElementsByClassName('color')[checker].classList[searcher]) === 'selected') {
          pixel.classList.add(document.getElementsByClassName('color')[checker].classList[1])
        }
      }
    }
  }

  // Cria o quadro de pixels
  function createBoard() {
    const boardHeight = 5;
    for (let boardColumn = 0; boardColumn < boardHeight; boardColumn +=1) {
      let baseLine = document.createElement('div');
      baseLine.className = 'line';
      document.getElementById('pixel-board').appendChild(baseLine);
      for (let index = 0; index < boardHeight; index +=1) {
        let pixel = document.createElement('div');
        pixel.className = 'pixel';
        pixel.addEventListener('click', changeColor);
        document.getElementsByClassName('line')[boardColumn].appendChild(pixel)
      }
    }
  }

  createBoard();

  function selectedColor() {
    for (checker = 0; checker < document.getElementsByClassName('color').length; checker +=1) {
      document.getElementsByClassName('color')[checker].classList.remove('selected');
    }
    let brush = event.target;
    brush.classList.add('selected');
  }

  for (let index = 0; index < document.getElementsByClassName('color').length; index +=1) {
      document.getElementsByClassName('color')[index].addEventListener('click', selectedColor);
  }

}
