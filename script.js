window.onload = function () {

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
        document.getElementsByClassName('line')[boardColumn].appendChild(pixel)
      }
    }
  }

  createBoard();

}
