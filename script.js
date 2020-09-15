//trata evento criar o board e limpa-lo para o usuário colocar o número que quiser
window.onload = function () {
  makeBoard(5);
}
const pixelBoard = document.querySelector('#pixel-board');
const numberInputBox = document.querySelector('#board-size');
const buttonInput = document.querySelector('#generate-board');
function makeBoard (number) {
pixelBoard.innerHTML = '';
for(let lIndex = 0; lIndex < number; lIndex +=1){
  let lPixelBoard = document.createElement('div');
  lPixelBoard.className ='line';
  pixelBoard.appendChild(lPixelBoard);
  for(let pIndex = 0; pIndex < number; pIndex +=1 ) {
      let pixel = document.createElement('div');
      pixel.className = 'pixel'
      lPixelBoard.appendChild(pixel);
  }
}
buttonInput.addEventListener('click', function () {
  const numberInput = document.querySelector('#board-size').value;
  let number = numberInput;
  let pixelBoard = document.querySelector('#pixel-board');
  if(number === '') {
    alert('Board inválido!')
  }
  else {
    makeBoard(number)
  }
})};
// cria botões para selecionar cor
    let btnBlack = document.querySelector('#black');
    let btnOrange = document.querySelector('#orange');
    let btnOrchid = document.querySelector('#orchid');
    let btnBlue = document.querySelector('#blue');
    let color = 'black';

// trata evento selecionar elementos com cor
    btnBlack.addEventListener('click', function () {
      btnBlack.classList.add('selected');
      btnOrange.classList.remove('selected');
      btnOrchid.classList.remove('selected');
      btnBlue.classList.remove('selected');
      color = window.getComputedStyle(btnBlack).getPropertyValue("background-color");
      console.log(color);
    });
    btnOrange.addEventListener('click', function () {
      btnOrange.classList.add('selected');
      btnBlack.classList.remove('selected');
      btnOrchid.classList.remove('selected');
      btnBlue.classList.remove('selected');
      color = window.getComputedStyle(btnOrange).getPropertyValue("background-color");
      console.log(color);
    });
    btnOrchid.addEventListener('click', function () {
      btnOrchid.classList.add('selected');
      btnBlack.classList.remove('selected');
      btnOrange.classList.remove('selected');
      btnBlue.classList.remove('selected');
      color = window.getComputedStyle(btnOrchid).getPropertyValue("background-color");
      console.log(color);
    });
    btnBlue.addEventListener('click', function () {
      btnBlue.classList.add('selected');
      btnBlack.classList.remove('selected');
      btnOrchid.classList.remove('selected');
      btnOrange.classList.remove('selected');
      color = window.getComputedStyle(btnBlue).getPropertyValue("background-color");
      console.log(color);
    });

// trata evento acrescentar cor no quadradinho

let boardSize = document.querySelectorAll('.pixel');

for(index = 0; index < boardSize.length; index += 1) {
  let selectedPixel = document.querySelectorAll('.pixel')[index];
  selectedPixel.addEventListener('click', function () {
    selectedPixel[index].style.backgroundColor = document.querySelector('.selected').style.backgroundColor;
  })
}

//cria botão que limpa tudo
let btnClear = document.querySelector('#clear-board');
btnClear.addEventListener('click', function () {
  boardSize.style.backgroundColor ='white';
})

