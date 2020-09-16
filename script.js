window.onload = function () {
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
};

const getPixelList = document.getElementsByClassName('color');

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

function getAttributesClass(index) {
  const getAttributesClass = getPixelList[index].getAttribute('class');
  return getAttributesClass;
}

function reduceClasseSelectedFromOldPalette(index) {
  const getAttributesClass = getPixelList[index].getAttribute('class');
  let getAttributesClassReduce = getAttributesClass.replace('selected', '');
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
  let = lengthElementos = document.getElementsByClassName('pixel').length;
  let color = 'white';
  for (let index = 0; index < lengthElementos; index += 1) {
    document.getElementsByClassName('pixel')[index].style.backgroundColor = color;
  }
});


