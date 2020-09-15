// All consts
const colorPalet = document.getElementById('color-palette');
const draw = document.getElementById('pixel-board');
const btnCreate = document.querySelector('#generate-board');
const hexaDecimal = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
const clear = document.querySelector('#clear-bord');

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

function boardConstructor (size , sizePixel){
  for (let index = 0; index < size ; index += 1) {
    // Criando Linha
    let line = document.createElement('div');
    line.className = 'line'
    // Inserindo linha a div container
    draw.appendChild(line);
  for(let indexY = 0; indexY < sizePixel; indexY += 1) {
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
function reload (line, colun) {
  if(line == 0 || colun == 0){
    alert("Board inválido!")
  }else{
    if(line < 5 && colun < 5 || line < 5 || colun < 5 ) {
      colun = 5;
      line = 5;
    }
    if(line > 50 && colun > 50 || line > 50 || colun > 50) {
      line = 50;
      colun = 50;
    }
    remove()
    boardConstructor(line, colun)
  }
  
}

createdPaleta();
boardConstructor(5,5);

// Condition
for (let cont = 0; cont < colorPalet.children.length; cont +=1){
  if(cont == 0){
  colorPalet.children[cont].style.backgroundColor = 'black';
}else{
  colorPalet.children[cont].style.backgroundColor = colorRandom();
}
}
// Events
btnCreate.addEventListener('click', function () {
  let line = document.querySelector('#board-size');
  let colun = document.querySelector('#coluna');
  line = line.value
  colun = colun.value
  reload(line, colun)
})

clear.addEventListener('click', function (){
   const pixel = document.querySelectorAll('.pixel');
   for (let indexPixel = 0; indexPixel < pixel.length; indexPixel += 1){
      pixel[indexPixel].style.backgroundColor = 'white';
   }
});
