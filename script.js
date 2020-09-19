//função para escolher uma cor aleatória para a paleta de cores (cria um numero rgb)
let secondColor = document.querySelector('.second-color');
let thirdColor = document.querySelector('.third-color');
let fourthColor = document.querySelector('.fourth-color');

function randomColor(number) {
  return Math.floor(Math.random() * number);
}
function randomPalette() {
  secondColor.style.backgroundColor = `rgb(${randomColor(255)} , ${randomColor(255)} , ${randomColor(255)})`;
  thirdColor.style.backgroundColor = `rgb(${randomColor(255)} , ${randomColor(255)} , ${randomColor(255)})`;
  fourthColor.style.backgroundColor = `rgb(${randomColor(255)} , ${randomColor(255)} , ${randomColor(255)})`;
}

window.onload = randomPalette;

// função para colorir pixels de acordo com a cor da paleta escolhida

let selectPixel = document.querySelectorAll('.pixel');

function changeColor(event) {
  let colorSelected = document.querySelector('.selected');

  event.target.style.backgroundColor = colorSelected.style.backgroundColor;
}

for(let index = 0; index < selectPixel.length; index += 1) {
  selectPixel[index].addEventListener('click', changeColor);
}

// função para alterar a cor da paleta selecionada

let getColor = document.querySelectorAll('.color');

function changeSelected(event){
  let colorSelected = document.querySelector('.selected');

  colorSelected.classList.remove('selected');
  event.target.classList.add('selected');
}

for(let count = 0; count < getColor.length; count += 1) {
  getColor[count].addEventListener('click', changeSelected)
}

//função para deixar os pixels com fundo branco de novo

let clearButton = document.getElementById('clear-board');

clearButton.addEventListener('click', function (){
  for(let list = 0; list < selectPixel.length; list += 1){
    let selectPixel = document.querySelectorAll('.pixel');
    selectPixel[list].style.backgroundColor = 'white';
  }
})


