

let selectedColor = 'black';
function creatPixelBoard(value) {
    let pixelBoard = document.querySelector('#pixel-board');
    pixelBoard.innerHTML = '';
    for (let index = 0; index < value; index += 1) {
        let pixelLine = document.createElement('div');
        pixelLine.className = 'pixel-line';
        for (let index = 0; index < value; index += 1) {
            let pixel = document.createElement('div');
            pixel.className = 'pixel';
            pixelLine.appendChild(pixel);
        }
        pixelBoard.appendChild(pixelLine);
    }
}

creatPixelBoard(5);