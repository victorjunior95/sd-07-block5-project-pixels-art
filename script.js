const colorPalet = document.getElementById('color-palette');
const draw = document.getElementById('pixel-board');
const btnCreate = document.querySelector('#generate-board');
const hexaDecimal = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];

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

function colorRandom(){
  let color = "#";
  for (let index = 0; index < 6; index += 1) {
    color += hexaDecimal[Math.floor(Math.random() * 16)];
  }
  return color;
}

for (let cont = 0; cont < colorPalet.children.length; cont +=1){
  console.log(colorPalet.children[cont])
  if(cont == 0){
    colorPalet.children[cont].style.backgroundColor = 'black';
  }else{
    colorPalet.children[cont].style.backgroundColor = colorRandom();
  }
}

}

btnCreate.addEventListener('click', function () {
  let line = document.querySelector('#board-size');
  let colun = document.querySelector('#coluna');
  line = line.value
  colun = colun.value
  reload(line, colun)
})

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
    }
    remove()
  for (let index = 0; index < line ; index += 1) {
    let line = document.createElement('div'); 
    line.className = 'line'
    draw.appendChild(line);
  for(let indexY = 0; indexY < colun; indexY += 1){
    let square = document.createElement('div');
    square.className = 'pixel';
    line.appendChild(square);
  }
  }
  }
  
}

function remove() {
  let filho = draw.childNodes;
  for (let indice = filho.length - 1; indice >= 0; indice -= 1){
  draw.removeChild(filho[indice]);
  }
}
