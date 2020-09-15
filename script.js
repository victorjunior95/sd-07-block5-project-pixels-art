const colorPalet = document.getElementById('color-palette');
const draw = document.getElementById('pixel-board'); 
const btnCreate = document.querySelector('#btn-create');

window.onload = function () {
  for (let indice = 0; indice < 4 ; indice += 1) {
   let square = document.createElement('div');
   square.className = 'color';
    colorPalet.appendChild(square);
  };

  if(draw.childElementCount == 0 ){
   construtor(5, 5);
  }

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
  
colorPalet.children[0].style.backgroundColor = 'black';
}

btnCreate.addEventListener('click', function () {
  let line = document.querySelector('#linha');
  let colun = document.querySelector('#coluna');
  line = line.value
  colun = colun.value
  reload(line, colun)
})

function reload (line, colun) {
  remove()
  for (let index = 0; index < line ; index += 1) {
    //Criando Linha
    let line = document.createElement('div'); 
    line.className = 'line'
    //Inserindo linha a div container
    draw.appendChild(line);
  for(let indexY = 0; indexY < colun; indexY += 1) {
    //Criando pixel
    let square = document.createElement('div');
    square.className = 'pixel';
    //Adcionando pixel a linha
    line.appendChild(square);
  }
  }

}

function remove() {
  let filho = draw.childNodes;
  for (let indice = filho.length - 1; indice >= 0; indice -= 1){
  draw.removeChild(filho[indice]);
  }
}



