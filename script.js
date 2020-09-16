// Function to make background shine.
function changeBKGColor () {
  const body = document.getElementsByTagName('body')[0];
  const title = document.getElementsByTagName('h1')[0];
  const rColorRGB = Math.floor(Math.random()*255);
  const gColorRGB = Math.floor(Math.random()*255);
  const bColorRGB = Math.floor(Math.random()*255);
  body.style.backgroundColor='rgb(' + rColorRGB + ' , ' + gColorRGB + ' , ' + bColorRGB + ')';
  title.style.color='rgb(' + rColorRGB + 1 + ' , ' + gColorRGB + ' , ' + bColorRGB + 1 + ')';
}
// const time = setInterval (changeBKGColor, 500);
// Remove the bars fron the line above to see the efect.

const color01 = document.getElementById('color-01');
const color02 = document.getElementById('color-02');
const color03 = document.getElementById('color-03');
const color04 = document.getElementById('color-04');
const pixelSS = document.querySelectorAll('.pixel');
const clearBT = document.getElementById('clear-board');
let saveClass = 'color-01';

  document.querySelectorAll('.pixel').forEach(pixel => {
  pixel.className = 'pixel pixelBackG';
});

document.querySelectorAll('.pixel').forEach(item => {
  item.addEventListener('click', () => item.classList.add('color-01'))
});


// Function to clear all class color fron pixel itens.
clearBT.addEventListener('click', function () {
  for (let i = 0; i < pixelSS.length; i += 1) {
    pixelSS[i].classList.add('pixelBackG')
  }
});

// Function to add class 'selected' in palet itens, and add a class color of color selected.
const colorPalet = document.querySelectorAll('.color');
colorPalet.forEach(colorPalet => {
  colorPalet.addEventListener('click', event => {
    colorPalet.classList.add('selected');
  saveClass = colorPalet.classList[1];
  });
    pixelSS.forEach(pixelSS => {
      pixelSS.addEventListener('click', event => {
        pixelSS.className = 'pixel';
        pixelSS.classList.add(saveClass);
    });
  });
});

color01.addEventListener('click', function () {
  color02.className = 'color color-02';
  color03.className = 'color color-03';
  color04.className = 'color color-04';
})

color02.addEventListener('click', function () {
  color01.className = 'color color-01';
  color03.className = 'color color-03';
  color04.className = 'color color-04';
})

color03.addEventListener('click', function () {
  color01.className = 'color color-01';
  color02.className = 'color color-02';
  color04.className = 'color color-04';
})

color04.addEventListener('click', function () {
  color01.className = 'color color-01';
  color02.className = 'color color-02';
  color03.className = 'color color-03';
})

// function setBoardSize(numberLines) {
//   let teste = document.querySelector('#generate-board').value;
//   numberLines = teste;
//   let pixelBoard = document.getElementById('pixel-board');
//   pixelBoard.style.width = (numberLines * 40) +'px';
//   pixelBoard.style.height = (numberLines * 40) +'px';
//   let pixel = [];
//   let divSize = numberLines**2;
//   for (let count = 0; count < divSize; count += 1) {
//     pixel[count] = document.createElement('div');
//     pixel[count].className = 'pixel';
//       pixelBoard.appendChild(pixel[count]);
//     document.querySelector('#generate-board').value = '';
//     document.querySelector('#generate-board').focus();
//   }
// }
// const teste = document.getElementById('set-board-size');
// teste.addEventListener('click', setBoardSize);