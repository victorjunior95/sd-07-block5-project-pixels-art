const colorsPallet = {
  color1: 'black',
  color2: 'red',
  color3: 'green',
  color4: 'blue',
}

let colorCurrent = colorsPallet.color1;

const colors = document.getElementsByClassName('color');

let selectedCurrent = document.getElementsByClassName('selected')[0];

function removeClassSelected() {
  let classes = selectedCurrent.className.split(' ');
  selectedCurrent.className = `${classes[0]} ${classes[1]}`;
}

function addClassSelected(colorButton) {
  colorButton.className += ' selected';
  colorCurrent = colorsPallet[`${colorButton.id}`];
  selectedCurrent = colorButton;
}

for (let index = 0; index < colors.length; index += 1) {
  colors[index].addEventListener('click', function (event) {
    if (selectedCurrent) removeClassSelected();
    addClassSelected(event.target);
  });
}

const pixels = document.getElementsByClassName('pixel');

for (let index = 0; index < pixels.length; index += 1) {
  pixels[index].addEventListener('click', function (event) {
    event.target.style.backgroundColor = colorCurrent;
  });
}

// limpar board
const clearBoard = document.getElementById('clear-board');
clearBoard.addEventListener('click', function(){
  for(let index = 0; index < pixels.length; index += 1){
    pixels[index].style.backgroundColor = 'white';
  }
})