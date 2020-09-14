// trata evento construir o tabuleiro

// trata construção para 5
  let pixelBoard = document.querySelector('#pixel-board');
  for(let lIndex = 0; lIndex < 5; lIndex += 1){
  let lPixelBoard = document.createElement('div');
  lPixelBoard.className ='line';
  pixelBoard.appendChild(lPixelBoard);
  for(let pIndex = 0; pIndex < 5; pIndex +=1) {
      let pixel = document.createElement('div');
      pixel.className = 'pixel'
      lPixelBoard.appendChild(pixel);
  }
}
//trata evento selecionar a cor
// btnBlack = document.querySelectorAll('.color')[0];
// btnOrange = document.querySelectorAll('.color')[1];
// btnOrchid = document.querySelectorAll('.color')[2];
// btnBlue = document.querySelectorAll('.color')[3];
// Trata construção dinâmica
// const numberInputBox = document.querySelector('#board-size');
// const buttonInput = document.querySelector('#generate-board');
// buttonInput.addEventListener('click', function () {
//   const numberInput = document.querySelector('#board-size').value;
//   let number = numberInput;
//   let pixelBoard = document.querySelector('#pixel-board');
//   if(number === ''){
//     alert('Board inválido!')}
//   else {
//   for(let lIndex = 0; lIndex < number;lIndex +=1){
//   let lPixelBoard = document.createElement('div');
//   lPixelBoard.className ='line';
//   pixelBoard.appendChild(lPixelBoard);
//   for(let pIndex = 0; pIndex < number; pIndex +=1 ) {
//       let pixel = document.createElement('div');
//       pixel.className = 'pixel'
//       lPixelBoard.appendChild(pixel);
//   }
// }
// }
// });