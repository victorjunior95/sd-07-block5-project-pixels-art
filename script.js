//Criando as cores da paleta
for (let i = 0; i < 4; i += 1) {
  let colorPalette = document.getElementById('color-palette');
  let colorDiv = document.createElement('div');
  
  colorPalette.appendChild(colorDiv);

  let arrayOfColors = ['black', 'salmon', 'green', 'blue'];
  for (let j = 0; j < arrayOfColors.length; j += 1) {
    if (i === j) {
      colorDiv.className = `color ${arrayOfColors[j]}`;
    }
    
    if (arrayOfColors[j] === 'black') {
      colorDiv.className = `color ${arrayOfColors[j]} selected`;
    }
  }
}

//Criando o quadro de pixels
window.onload = function() {

    function createBox() {
      let box = document.createElement('div');
      box.className = 'pixel';
      return box;
    }
  
  for (let i = 0; i < 5; i += 1) {
    let board = document.getElementById('pixel-board');
    let lineBoardBox = document.createElement('div');
    for (let j = 0; j < 5 ; j += 1) {
      lineBoardBox.appendChild(createBox());
    }
    board.appendChild(lineBoardBox).className = 'pixel-line';
  }
}
