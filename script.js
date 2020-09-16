
  const numberOfLine = 5;
  const numberOfColumn = 5;

  for (let line = 1; line <= numberOfLine; line += 1) {
    const divLine = document.createElement('div');
    divLine.className = 'tr';
    document.getElementById('pixel-board').appendChild(divLine);

    for (let column = 1; column <= numberOfColumn; column += 1) {
      const divColumn = document.createElement('div');
      divColumn.className = 'pixel td';
      divLine.appendChild(divColumn);
    }
  }

  const getPixelList = document.getElementsByClassName('color');

  function randomColorPalette() {
    for (let index = 1; index < getPixelList.length; index += 1) {
      getPixelList[index].style.backgroundColor = generationRandomColorRGB();
    }
  }

randomColorPalette();
function generationRandomColorRGB() {
  const maxNumberRGB = 256;
  const decimalNumber = () => Math.floor(Math.random() * maxNumberRGB);
  return `rgb(${decimalNumber()},${decimalNumber()},${decimalNumber()})`;
}

function findIndexPaletteSelected() {
  let searchElement;
  for (let index = 0; index < getPixelList.length; index += 1) {
    searchElement = getPixelList[index].getAttribute('class');
    if (searchElement.includes('selected')) {
      return index;
    }
  }
  return 0;
}

function getBackgroundColorPixelSelected(index) {
  const stylesPaletteSelected = window.getComputedStyle(getPixelList[index]);
  return stylesPaletteSelected.backgroundColor;
}

function reduceClasseSelectedFromOldPalette(index) {
  const getAttributesClass = getPixelList[index].getAttribute('class');
  const getAttributesClassReduce = getAttributesClass.replace('selected', '');
  return getAttributesClassReduce;
}

function updateClassesOldPalette(index, attributesClass) {
  attributesClass = attributesClass.trim();
  getPixelList[index].className = attributesClass;
}

function updateClassesNewSelectedPalette(targetSelected) {
  const newAttributeClass = ' selected';
  targetSelected.className += newAttributeClass;
}

document.getElementById('pixel-board').addEventListener('click', function (event) {
  const classEvent = 'pixel td';
  if (event.target.className === classEvent) {
    const indexPaletteSelected = findIndexPaletteSelected();
    const backgroundColor = getBackgroundColorPixelSelected(indexPaletteSelected);
    event.target.style.backgroundColor = backgroundColor;
  }
});

document.getElementById('color-palette').addEventListener('click', function (event) {
  const indexPaletteSelected = findIndexPaletteSelected();
  const attributesClassReduce = reduceClasseSelectedFromOldPalette(indexPaletteSelected);
  updateClassesOldPalette(indexPaletteSelected, attributesClassReduce);
  updateClassesNewSelectedPalette(event.target);
});

document.getElementById('clear-board').addEventListener('click', function () {
  const lengthElements = document.getElementsByClassName('pixel').length;
  const color = 'white';
  for (let index = 0; index < lengthElements; index += 1) {
    document.getElementsByClassName('pixel')[index].style.backgroundColor = color;
  }
});

function getInputSizePixelValue() {
  return document.getElementById('board-size').value;
}

function updateSizePixel(sizePixel) {
  const lengthElementos = document.getElementsByClassName('pixel').length;
  for (let index = 0; index < lengthElementos; index += 1) {
    document.getElementsByClassName('pixel')[index].style.width = `${sizePixel}px`;
    document.getElementsByClassName('pixel')[index].style.height = `${sizePixel}px`;
  }
}

function borderSizeValidation(size) {
  if (size < 5 && size != '') return 5;
  if (size > 50 && size != '') return 50;
  return size;
}

document.getElementById('generate-board').addEventListener('click', function () {
  const inputSizeValue = getInputSizePixelValue();
  const inputSize = borderSizeValidation(inputSizeValue);
  if (inputSize === '') {
    alert('Board inválido!');
  } else updateSizePixel(inputSize);
});
