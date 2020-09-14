//  cria o quadro de pixels
let pixelBoard = document.querySelector('#pixel-board');

for(let lIndex = 0; lIndex < 5;lIndex +=1){
    let lPixelBoard = document.createElement('div');
    lPixelBoard.className ='line';
    pixelBoard.appendChild(lPixelBoard);
    for(let pIndex = 0; pIndex < 5; pIndex +=1 ) {
        let pixel = document.createElement('div');
        pixel.className = 'pixel'
        lPixelBoard.appendChild(pixel);
    }
}


