// All consts
const colorPalet = document.getElementById('color-palette');
const draw = document.getElementById('pixel-board');
const btnCreate = document.querySelector('#generate-board');
const hexaDecimal = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
const clear = document.querySelector('#clear-board');

// Created pallet color
function createdPaleta () {
  for (let indice = 0; indice < 4 ; indice += 1) {
    let square = document.createElement('div');
    square.className = 'color';
    colorPalet.appendChild(square);
  };
}

// Color random
function colorRandom(){
  let color = "#";
  for (let index = 0; index < 6; index += 1) {
    color += hexaDecimal[Math.floor(Math.random() * 16)];
  }
  return color;
}

function boardConstructor (size){
  for (let index = 0; index < size ; index += 1) {
    // Criando Linha
    let line = document.createElement('div');
    line.className = 'line'
    // Inserindo linha a div container
    draw.appendChild(line);
  for(let indexY = 0; indexY < size; indexY += 1) {
    // Criando pixel
    let square = document.createElement('div');
    square.className = 'pixel';
    // Adcionando pixel a linha
    line.appendChild(square);
  }
  }
}

// Remove 
function remove() {
  let filho = draw.childNodes;
  for (let indice = filho.length - 1; indice >= 0; indice -= 1){
  draw.removeChild(filho[indice]);
  }
}

//Reload Board
function reload (line) {
  if(line === '' ){
    alert("Board inválido!");
  }else{
      if(line < 5 ) {
        line = 5;
      }else if (line > 50){
        line = 50;
      }
    remove()
    boardConstructor(line)
  }
}

createdPaleta();
boardConstructor(5);

// Condition
for (let cont = 0; cont < colorPalet.children.length; cont +=1){
  if(cont == 0){
  colorPalet.children[cont].style.backgroundColor = 'black';
  colorPalet.children[cont].className += ' selected';
  }else{
  colorPalet.children[cont].style.backgroundColor = colorRandom();
  }
}

// Events
btnCreate.addEventListener('click', function () {
  let line = document.querySelector('#board-size');
  line = line.value
  reload(line)
});

clear.addEventListener('click', function (){
   const pixel = document.querySelectorAll('.pixel');
   for (let indexPixel = 0; indexPixel < pixel.length; indexPixel += 1){
      pixel[indexPixel].style.backgroundColor = 'white';
   }
});
