let colorOptions = document.querySelectorAll('.color');

let clearButton = document.querySelector('#clear-board');
let board = document.querySelector('#pixel-board');

for (let index = 0; index < colorOptions.length; index += 1) {
  colorOptions[index].addEventListener('click', function (event) {
    let selectedColor = document.querySelector('.selected');
    selectedColor.classList.remove('selected');
    event.target.classList.add('selected');
  });
} // Abstração facilitada pela resolução em grupo feita por parte da turma.

board.addEventListener('click', function (event) {
  let classSelected = document.querySelector('.selected');
  if (event.target.classList.contains('pixel')) {
    event.target.style.backgroundColor = window.getComputedStyle(classSelected).backgroundColor;
  }
});

clearButton.addEventListener('click', function () {
  let pixels = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'white';
  }
});

//requisitos bônus #VQV
function createBoard (input) {
  for (let index = 0; index < input; index += 1) {
    const linhas = document.createElement('div');  
    for (let index = 0; index < input; index += 1) {
      let pixel = document.createElement('div');
      pixel.className = 'pixel';
      linhas.appendChild(pixel);
    }
  board.appendChild(linhas);
  }
}
createBoard(5);

const vqvBtn = document.querySelector('#generate-board');
vqvBtn.addEventListener('click', function () {
  const boardSize = document.querySelector('#board-size');
  const board = document.querySelector('#pixel-board');
  board.innerHTML = '';
  if (boardSize.value === '') {
    alert('Board inválido!');
  } else if (boardSize.value < 5) {
    createBoard(5);
  } else if (boardSize.value > 50) {
    createBoard(50);
  } else { 
    createBoard(boardSize.value)
  }
});

for (let index = 1; index < 4; index += 1) {
  colorOptions[index].style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)} , ${Math.floor(Math.random() * 255)} )`;
}
