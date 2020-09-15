const colorDefined = document.getElementsByClassName('color');
const cleanTheBoard = document.querySelector('#clear-board');
let pixelElements = document.getElementsByClassName('pixel');
let firstMainColor = document.getElementsByClassName('selected');

function ClickPalette() {
  for (let index = 0; index < Object.keys(colorDefined).length; index += 1) {
    colorDefined[index].addEventListener('click', function () { 
      firstMainColor[0].classList.remove('selected');
      event.target.classList.add('selected');
      firstMainColor = document.getElementsByClassName('selected')
    });
  };
}

function ClickPixels() {
  pixelElements = document.getElementsByClassName('pixel');
  for (let index = 0; index < Object.keys(pixelElements).length; index += 1) {
    pixelElements[index].addEventListener('click', function () {
      firstMainColor = document.getElementsByClassName('selected');
      event.target.style.backgroundColor = firstMainColor[0].style.backgroundColor;
    });
  }
}
colorDefined[0].style.backgroundColor = 'black';
colorDefined[1].style.backgroundColor = 'red';
colorDefined[2].style.backgroundColor = 'green';
colorDefined[3].style.backgroundColor = 'blue';
ClickPalette();
ClickPixels();

cleanTheBoard.addEventListener('click', function ()  {
  for (let index = 0; index < Object.keys(pixelElements).length; index += 1) {
    pixelElements[index].style.backgroundColor = 'white';
  }
});





