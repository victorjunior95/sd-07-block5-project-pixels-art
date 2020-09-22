let pixelBoard = document.querySelector('#pixel-board');

for (let index = 1; index < 26; index += 1) {
    let myPixel = document.createElement('DIV');
    myPixel.className = "pixel";
    pixelBoard.appendChild(myPixel);
    if (index % 5 === 0) {
        pixelBoard.appendChild(document.createElement('BR'));
    }
}

document.querySelector('.black').className = "color black selected";