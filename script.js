//Index
let externalIndex = 0; 
/* Objetivo de contornar o problema de não poder passar um valor pra dentro de uma função com parâmetro!
Para isso criei essa variável que é alterada por fora das funções. Assim o script tem a referência
do índice a ser alterado. */

// Color variables
const arrayPalette = document.getElementsByClassName('color');
const arrayPixels = document.getElementsByClassName('pixel') 
let actualColor = 'black';

// Resize/Reset variables
const inputColumns = document.getElementById('columns');
const inputLines = document.getElementById('lines');
const resizeReset = document.getElementById('resize-reset');
const pixelBoard = document.getElementById('pixel-board')
let lineBoard = document.getElementsByClassName('line');
let numberOfColumns = 5;
let numberOfLines = 5;


// Functions: Resize/Reset
function assignSize() {
    numberOfColumns = inputColumns.value
    numberOfLines = inputLines.value
    boardCreator();
}

function pixelBoardReset() {
    pixelBoard.innerHTML = '';
}

 function pixelBoardFiller(insideOf, classOf) {
    let elementCreator = document.createElement('div');
    elementCreator.className = classOf;
    insideOf.appendChild(elementCreator);
}

function boardCreator() {
    pixelBoardReset();
    for (let line = 0 ; line < numberOfLines ; line += 1) {
        lineBoard = document.getElementsByClassName('line');
        pixelBoardFiller(pixelBoard, 'line');
        for (let column = 0 ; column < numberOfColumns ; column += 1){
            pixelBoardFiller(lineBoard[line], 'pixel');
        }
    }
}

// Functions: Color

function getColorFromPalette() {
    actualColor = arrayPalette[externalIndex].backgroundColor;
}

function changePixelColor() {
    arrayColor[externalIndex]
}

function addEventArray() {
    for (externalIndex = 0 ; externalIndex < arrayPalette.length ; externalIndex += 1) {
        arrayPalette.addEventListener('click', getColorFromPalette);
    }
    for (externalIndex = 0 ; externalIndex < arrayPixel.length ; externalIndex += 1) {
        arrayPixels[externalIndex].addEventListener('click', changePixelColor);
    }
}

boardCreator();
resizeReset.addEventListener('click', assignSize);
addEventArray();

arrayPalette[1].style.backgroundColor = "red";
arrayPalette[2].style.backgroundColor = "green";
arrayPalette[3].style.backgroundColor = "blue";