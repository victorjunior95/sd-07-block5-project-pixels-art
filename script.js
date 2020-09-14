
const colorPalet = document.getElementById('color-palette');
window.onload = function () {
  for (let indice = 0; indice < 4 ; indice += 1) {
   let square = document.createElement('div');
   square.className = 'color';
    colorPalet.appendChild(square);
};

const draw = document.getElementById('pixel-board'); 

let size = document.getElementsByName('size');

  //Adcionando valor padrão
  if (size.value == undefined){
   size = 5;
  ;}
  for (let index = 0; index < size ; index += 1) {
    //Criando Linha
    let line = document.createElement('div'); 
    line.className = 'line'
    //Inserindo linha a div container
    draw.appendChild(line);
   for(let indexY = 0; indexY < size; indexY += 1) {
    //Criando pixel
    let square = document.createElement('div');
    square.className = 'pixel';
    //Adcionando pixel a linha
    line.appendChild(square);
   }
  }
}
