const colorPalet = document.getElementById('color-palette');
window.onload = function () {
  for (let indice = 0; indice < 4 ; indice += 1) {
   let square = document.createElement('div');
   square.className = 'color';
    colorPalet.appendChild(square);
};

const draw = document.getElementById('pixel-board'); 
let size = document.querySelector('#linha');
let sizePixel = document.querySelector('#coluna');

window.onload = construtor(5, 5);

size.addEventListener('change', function() {
  size = size.value;
  console.log(size)

});
sizePixel.addEventListener('change', function() {
  sizePixel = sizePixel.value;
  console.log(sizePixel)
  construtor(size, sizePixel)
})
  

function construtor (size , sizePixel){
  for (let index = 0; index < size ; index += 1) {
    //Criando Linha
    let line = document.createElement('div'); 
    line.className = 'line'
    //Inserindo linha a div container
    draw.appendChild(line);
   for(let indexY = 0; indexY < sizePixel; indexY += 1) {
    //Criando pixel
    let square = document.createElement('div');
    square.className = 'pixel';
    //Adcionando pixel a linha
    line.appendChild(square);
   }
  }
}
  
}
