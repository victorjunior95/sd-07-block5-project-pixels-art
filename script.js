// Solução do 'Using a loop' -> https://bit.ly/2FsVtoc
const colorPalette = document.querySelectorAll('.color');
const clearBoard = document.querySelector('#clear-board');
const generateNewBoard = document.querySelector('#generate-board');
const heigth = document.querySelector('.heigth');
const width = document.querySelector('.width');
let pixel = document.querySelectorAll('.pixel');
let selectedColor = '';

function removeSelected() {
  colorPalette.forEach((color) => {
    if (color.classList.contains('selected')) {
      color.classList.remove('selected');
    }
  });
}

function pixelEvent() {
  pixel.forEach((item) => {
    item.addEventListener('click', () => {
      if (selectedColor === '') {
        item.style.backgroundColor = 'black';
      } else {
        item.style.backgroundColor = selectedColor;
      }
    });
  });
}

function greaterOrLess(value) {
  if (value < 5 && value != '') {
    value = 5;
  } else if (value > 50) {
    value = 50;
  }
  return value;
}

pixelEvent();

colorPalette.forEach((color) => {
  color.addEventListener('click', () => {
    removeSelected();
    selectedColor = getComputedStyle(color).backgroundColor;
    color.classList.add('selected');
  });
});

clearBoard.addEventListener('click', () => {
  pixel.forEach((item) => {
    item.style.backgroundColor = 'white';
  });
});

generateNewBoard.addEventListener('click', () => {
  const table = document.querySelector('table');
  heigthQt = heigth.value;
  widthQt = width.value;

  if (heigthQt !== '' || widthQt !== '') {
    table.innerHTML = '';
    for (let i = 0; i < heigthQt; i += 1) {
      const heigthLines = document.createElement('tr');

      for (let i = 0; i < widthQt; i += 1) {
        const widthLines = document.createElement('td');

        widthLines.classList.add('pixel');
        heigthLines.appendChild(widthLines);
      }
      table.appendChild(heigthLines);
      pixel = document.querySelectorAll('.pixel');
      pixelEvent();
    }
  } else {
    alert('Board inválido!');
  }
});

width.addEventListener('blur', () => {
  width.value = greaterOrLess(width.value);
});

heigth.addEventListener('blur', () => {
  heigth.value = greaterOrLess(heigth.value);
});

// Soluções encontradas no seguintes links:
// Geração randomica: https://bit.ly/33GeGuV
// Pegar valor exato do array: https://bit.ly/3c9uHgS

window.addEventListener('load', () => {
  const random = ['red', 'green', 'grey', 'purple', 'yellow', 'ciano'];

  colorPalette.forEach((color) => {
    if (!color.classList.contains('black')) {
      const newColor = random[Math.floor(Math.random() * random.length)];
      let removeRepeat = random.indexOf(newColor);
      random.splice(removeRepeat, 1);
      color.classList.add(newColor);
    }
  });
});
