let colors = ['black', 'yellow', 'pink', 'orange'];
let arrayPaletteColor = paletteColor(colors);
let numberPixelsLine = 5;

// criando os elementos da paleta de cores
function paletteColor(arrayColors) {
    let paletteColor = [];
    for (index = 0; index < arrayColors.length; index += 1) {
        let color = document.getElementById(arrayColors[index]);
        color.style.backgroundColor = arrayColors[index];
        paletteColor.push(color);
    }
    paletteColor[0].classList.add('selected');

    return paletteColor;
}

createPixelBoard(numberPixelsLine);
addEventClick(arrayPaletteColor);

// adicionando evento click na paleta de cores
function addEventClick(arrayPaletteColor) {
    for (index = 0; index < arrayPaletteColor.length; index += 1) {
        arrayPaletteColor[index].addEventListener('click', function (event) {
            let selected = document.querySelector('.selected'); // pega a cor que está selecionada
            selected.classList.remove('selected');
            event.target.classList.add('selected');
        });
    }
}

// função para criar um pixel
function createPixel(className) {
    let pixel = document.createElement('div');
    pixel.classList.add(className);
    return pixel;
}
// função criar a div de cada linha de pixels
function createLine(numberPixels) {
    let divLine = document.createElement('div');
    for (let index = 0; index < numberPixels; index += 1) {
        let pixel = createPixel("pixel");
        divLine.appendChild(pixel);
    }
    return divLine;
}
// função para criar board de tamanho nxn
function createPixelBoard(numberPixels) { // recebe numero pixels
    let board = document.getElementById('pixel-board'); // pega a div do HTML
    for (let line = 1; line <= numberPixels ; line += 1) { // add a qntd de linhas
        let divLine = createLine(numberPixels); // cria a linha
        board.appendChild(divLine);
    }
}

// código criado em conjuno no grupo de estudos Trybe Turma-07 ------
const pixelBoard = document.getElementById("pixel-board");
pixelBoard.addEventListener('click', function(event) {
    const selected = document.querySelector('.selected');
    event.target.style.backgroundColor = window.getComputedStyle(selected).backgroundColor;
});

const buttonClear = document.getElementById('clear-board');
buttonClear.addEventListener('click', function() {
    const pixel = document.querySelectorAll('.pixel');
    for (let i = 0; i < pixel.length; i += 1) {
        pixel[i].style.backgroundColor = 'white';
    }
});