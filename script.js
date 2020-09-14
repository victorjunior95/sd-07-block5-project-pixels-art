window.onload = function () {

let lines = document.querySelectorAll(".pixel-line")
insertPixelBoard(lines);
}

function insertPixelBoard (lines) {
    for (let index = 0; index < 5; index += 1) {
        linePixel(lines[index]);
    }
}

// cria um pixel
function createPixel(className) {
    let pixel = document.createElement('div');
    pixel.className = className;
    return pixel;
}

// preenche uma linha com pixel
function linePixel (divLine) {
    for ( index = 0; index < 5; index += 1) {
        divLine.appendChild(createPixel('pixel'))
    }
}