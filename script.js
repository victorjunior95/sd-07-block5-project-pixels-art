const palette = document.querySelector('#color-palette');
const colors = document.querySelectorAll('.color');
const generateBoard = document.querySelector('#generate-board');
const clearBoard = document.querySelector('#clear-board');
const board = document.querySelector('#pixel-board');
const options = ['red', 'blue', 'green', 'aliceblue', 'brown', 'purple', 'gray', 'violet', 'pink', 'yellow', 'coral', 'orange', 'gold', 'darkkhaki', 'peachpuff', 'springgreen', 'mediumspringgreen', 'cyan', 'teal', 'slateblue', 'indigo', 'deeppink', 'seagreen', 'seashell', 'darkslategray', 'sandybrown', 'chocolate', 'peru', 'wheat', 'blueviolet', 'magenta'];
const randoms = [];
let number = 0;

function PixelClick() {
  const fields = document.querySelectorAll('.pixel');
  for (let i = 0; i < fields.length; i += 1) {
    fields[i].addEventListener('click', () => {
        const colorSelected = document.querySelector('.selected').style.backgroundColor;
        fields[i].style.backgroundColor = colorSelected;
      });
  }
}

for (let i = 0; i < 5; i += 1) {
  const div = document.createElement('div');
  for (let j = 0; j < 5; j += 1) {
    const pixel = document.createElement('div');
      pixel.classList.add('pixel');
      div.appendChild(pixel);
    }
  board.appendChild(div);
}

palette.addEventListener('click', (event) => {
  let selected = document.querySelector('.selected');
  selected.classList.remove('selected');
  color = event.target;
  color.classList.add('selected');
});

for (let i = 1; i < colors.length; i += 1) {
  number = Math.floor(Math.random() * options.length) + 1;
  while (randoms.indexOf(number) !== -1) {
    number = Math.floor(Math.random() * options.length) + 1;
  }
  randoms.push(number);
  colors[i].style.backgroundColor = options[number];
}


clearBoard.addEventListener('click', () => {
  const fields = document.querySelectorAll('.pixel');
  for (let i = 0; i < fields.length; i += 1) {
    fields[i].style.backgroundColor = 'rgb(255, 255, 255)';
  }
});

generateBoard.addEventListener('click', () => {
  let boardSize = parseInt(document.querySelector('#board-size').value);
  if (boardSize < 5) {
    boardSize = 5;
  } else if (boardSize > 50) {
    boardSize = 50;
  } else if (boardSize === NaN) {
    alert('Board inválido!');
  }
  board.innerHTML = '';
  for (let i = 0; i < boardSize; i += 1) {
      const div = document.createElement('div');
      for (let j = 0; j < boardSize; j++) {
        const pixel = document.createElement('div');
        pixel.classList.add('pixel');
        div.appendChild(pixel);
      }
    board.appendChild(div);
  }
  PixelClick();
});

PixelClick();
