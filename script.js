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

// trata evento selecionar elementos com cor
    let btnBlack = document.getElementsByClassName('color')[0];
    let btnOrange = document.getElementsByClassName('color')[1];
    let btnOrchid = document.getElementsByClassName('color')[2];;
    let btnBlue = document.getElementsByClassName('color')[3];;
    let color = 'black';

// cria botões para selecionar cor
    btnBlack.addEventListener('click', function () {
      btnBlack.classList.add("selected");
      color = 'black';
    });
    btnOrange.addEventListener('click', function () {
      btnOrange.classList.add("selected");
      color = 'rgb(239 , 123 , 69)';
    });
    btnOrchid.addEventListener('click', function () {
      btnOrchid.classList.add("selected");
      color = 'rgb(94 , 177 , 191)';
    });
    btnBlue.addEventListener('click', function () {
      btnBlue.classList.add("selected");
      color = 'rgb(205 , 237 , 246)';
    });
