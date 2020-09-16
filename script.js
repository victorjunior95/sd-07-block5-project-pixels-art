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

document.getElementById('pixel-board').addEventListener('click', function (event) {
  const classEvent = 'pixel td';
  if (event.target.className === classEvent) {
    const indexPaletteSelected = findIndexPaletteSelected();
    const backgroundColor = getBackgroundColorPixelSelected(indexPaletteSelected);
    event.target.style.backgroundColor = backgroundColor;
  }
});

