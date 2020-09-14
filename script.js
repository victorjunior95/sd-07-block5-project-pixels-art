let palette = document.getElementsByClassName('color');
let pixel = document.getElementsByClassName('pixel');
let colorSelected = 'rgb(0, 0, 0)';
let btnClear = document.getElementById('clear-board');

const defaultColor =  'rgb(255, 255, 255)';

for(let i=0; i < pixel.length; i += 1){
  pixel[i].addEventListener('click', changeColor);
}

for(let i=0; i < palette.length; i += 1){
  palette[i].addEventListener('click', addColor);
}

function changeColor(e){
  let itemToChange = document.getElementById(e.srcElement.id);

  itemToChange.style.backgroundColor = colorSelected;
}

function addColor(e){
  let itemColor = document.getElementById(e.srcElement.id);
  let itemColorId = itemColor.id;
  const style = window.getComputedStyle(itemColor, 'background-color');

  colorSelected = style.backgroundColor;

  let itemSelectedPrevious = document.querySelector('.selected');
  itemSelectedPrevious.classList.remove('selected');

  let itemSelected = document.querySelector(`#${itemColorId}`);
  itemSelected.classList.add('selected');

}

function clearPixels(){
  for(let i=0; i < pixel.length; i += 1){
    pixel[i].style.backgroundColor = defaultColor;
  }
}

function getNumber(number){
  return Math.floor(Math.random() * Math.floor(number));
}

function createPalletes(){
  let palette = document.querySelectorAll('.color');
  let colorArray = [colorSelected];

  for(let i = 0; i < 3; i += 1){
    let value = `rgb(${getNumber(255)} , ${getNumber(255)}, ${getNumber(255)})`;

    colorArray.push(value);
  }

  for(let i = 0; i < palette.length; i += 1){
    palette[i].style.backgroundColor = colorArray[i];
  }

}

btnClear.addEventListener('click', clearPixels);

window.onload = createPalletes;
