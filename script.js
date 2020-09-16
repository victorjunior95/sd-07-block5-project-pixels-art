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
  for (let index in getPixelList) {
    searchElement = getPixelList[index].getAttribute('class');
    if (searchElement.includes('selected'))
      return index;
  }
}

function getBackgroundColorPixelSelected (index) {
  let stylesPaletteSelected = window.getComputedStyle(getPixelList[index]);
  return stylesPaletteSelected.backgroundColor;
}

document.getElementById('pixel-board').addEventListener("click", function(event) {
  const classEvent = 'pixel td';
  if (event.target.className === classEvent) {
    let indexPaletteSelected = findIndexPaletteSelected();
    let backgroundColor = getBackgroundColorPixelSelected(indexPaletteSelected);
    event.target.style.backgroundColor = backgroundColor;
  }
});

