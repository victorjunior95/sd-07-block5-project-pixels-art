//  cria o quadro de pixels
const numberInputBox = document.querySelector('#number-input');
numberInputBox.addEventListener('keyup', function () {
  const numberInput = document.querySelector('#number-input').value;
  let number = numberInput;
  let pixelBoard = document.querySelector('#pixel-board');
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
});



