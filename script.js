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
  const style = window.getComputedStyle(itemColor, 'background-color');

  colorSelected = style.backgroundColor;

}

function clearPixels(){
  for(let i=0; i < pixel.length; i += 1){
    pixel[i].style.backgroundColor = defaultColor;
  }
}

btnClear.addEventListener('click', clearPixels);
