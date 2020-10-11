const colors = document.querySelectorAll('.color');
colors[0].className = 'color selected';

const setColor = (thisColor) => {
  colors.forEach((element, index) => {
    if (index !== thisColor) {
      element.className = 'color';
    } else {
      element.className = 'color selected';
    }
  });
};

colors[0].addEventListener('click', () => setColor(0));
colors[1].addEventListener('click', () => setColor(1));
colors[2].addEventListener('click', () => setColor(2));
colors[3].addEventListener('click', () => setColor(3));

function actionPixels() {
  const pixels = document.querySelectorAll('.pixel');

  //  https://stackoverflow.com/questions/25238153/how-to-get-background-color-property-value-in-javascript
  pixels.forEach((eachPixel) => {
    eachPixel.addEventListener('click', () => {
      const selectedColor = window
        .getComputedStyle(document.querySelector('.selected'))
        .getPropertyValue('background-color');
      eachPixel.style.backgroundColor = selectedColor;
    });
  });

  const clearBtn = document.querySelector('#clear-board');

  clearBtn.addEventListener('click', () =>
    pixels.forEach((eachPixel) => {
      eachPixel.style.backgroundColor = 'white';
    }));
}

actionPixels();
const generateBoard = (size) => {
  const pixelBoard = document.querySelector('#pixel-board');
  pixelBoard.innerHTML = '';

  for (let columns = 0; columns < size; columns += 1) {
    const newLine = document.createElement('div');
    pixelBoard.appendChild(newLine);

    for (let addPixels = 0; addPixels < size; addPixels += 1) {
      const newPixel = document.createElement('div');
      newPixel.className = 'pixel';
      newLine.appendChild(newPixel);
      actionPixels();
    }
  }
};

const generateBoardBtn = document.querySelector('#generate-board');
generateBoardBtn.addEventListener('click', () => {
  const inputSize = document.querySelector('#board-size').value;
  if (inputSize !== '') {
    generateBoard(inputSize);
  } else {
    alert('Board inválido!');
  }
});
