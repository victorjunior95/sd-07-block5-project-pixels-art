const colorDefined = document.getElementsByClassName('color');
const cleanTheBoard = document.querySelector('#clear-board');
let pixelElements = document.getElementsByClassName('pixel');
let firstMainColor = document.getElementsByClassName('selected');

function randomNumber(number) {
  return Math.round(Math.random() * number);
}

for (let index = 0; index < Object.keys(colorDefined).length; index += 1) {
  colorDefined[index].addEventListener('click', function () { 
    firstMainColor[0].classList.remove('selected');
    event.target.classList.add('selected');
    firstMainColor = document.getElementsByClassName('selected')
  });
};
pixelElements = document.getElementsByClassName('pixel');
for (let index = 0; index < Object.keys(pixelElements).length; index += 1) {
  pixelElements[index].addEventListener('click', function () {
    firstMainColor = document.getElementsByClassName('selected');
    event.target.style.backgroundColor = firstMainColor[0].style.backgroundColor;
  });
}
cleanTheBoard.addEventListener('click', function ()  {
  for (let index = 0; index < Object.keys(pixelElements).length; index += 1) {
    pixelElements[index].style.backgroundColor = 'white';
  }
});

colorDefined[0].style.backgroundColor = 'black'
colorDefined[1].style.backgroundColor = `rgb(${randomNumber(255)} , ${randomNumber(255)} , ${randomNumber(255)})`;
colorDefined[2].style.backgroundColor = `rgb(${randomNumber(255)} , ${randomNumber(255)} , ${randomNumber(255)})`;
colorDefined[3].style.backgroundColor = `rgb(${randomNumber(255)} , ${randomNumber(255)} , ${randomNumber(255)})`;





