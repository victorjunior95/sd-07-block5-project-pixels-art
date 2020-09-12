const color1 = document.querySelector('#color-1');
const color2 = document.querySelector('#color-2');
const color3 = document.querySelector('#color-3');
const color4 = document.querySelector('#color-4');
const colorPalette = document.querySelector('#color-palette');
const pixelBoard = document.querySelector('#pixel-board');
let selectedColor = 'black';

function colorGeneration() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  const rgb = `rgb(${red}, ${green}, ${blue})`;
  return rgb;
}

function removeSelectedClass(stringClass) {
  const classArray = stringClass.split(' ');
  classArray.splice(2, 1);
  return classArray.join(' ');
}

color1.style.backgroundColor = 'black';
color2.style.backgroundColor = colorGeneration();
color3.style.backgroundColor = colorGeneration();
color4.style.backgroundColor = colorGeneration();

colorPalette.addEventListener('click', function (event) {
  if (event.target.className.includes('color')) {
    const oldSelectedElement = document.querySelector('.selected');
    const oldClassName = removeSelectedClass(oldSelectedElement.className);
    oldSelectedElement.className = oldClassName;
    event.target.className += ' selected';
    selectedColor = event.target.style.backgroundColor;
    console.log(selectedColor);
  }
});

pixelBoard.addEventListener('click', function (elementEvent) {
  elementEvent.target.style.backgroundColor = selectedColor;
})
