window.onload = function () {
  makeBoard(5);
}
const pixelBoard = document.querySelector('#pixel-board');
const numberInputBox = document.querySelector('#board-size');
const buttonInput = document.querySelector('#generate-board');

function makeBoard (number) {
pixelBoard.innerHTML = '';
for(let lIndex = 0; lIndex < number;lIndex +=1){
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
