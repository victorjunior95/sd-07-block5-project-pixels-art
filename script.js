// Create color palette
const createColorSinglePalette = (color) => {
  const colorPaletteDiv = document.querySelector('#color-palette');
  const colorDiv = document.createElement('div');
  colorDiv.className = 'color';
  colorDiv.dataset.event = 'selectColor';
  colorDiv.style.backgroundColor = color;
  colorPaletteDiv.appendChild(colorDiv);
  return colorDiv;
}
const colorGeneratorRandom = () => {
  return `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`;
}
const populateColorsPalette = (number) => {
  const firstColor = createColorSinglePalette('black');
  firstColor.classList.add('selected')
  for (let index = 1; index <= number; index += 1) {
    createColorSinglePalette(colorGeneratorRandom());
  }
}

// Select color
let colorComputed = 'black';
const selectColor = (event) => {
  const currentColorSelected = document.querySelector('.selected');
  currentColorSelected.classList.remove('selected')
  event.target.classList.add('selected');
  getColorSelect(event);
}
const getColorSelect = (event) => {
  const color = window.getComputedStyle(event.target).getPropertyValue('background-color');
  colorComputed = color;
}
const setColorChangePixel = (event) => {
  const pixel = event.target;
  pixel.style.backgroundColor = colorComputed;
}

// Clear button
const clearButtonPixelBoard = () => {
  const pixels = document.querySelectorAll('.pixel');
  for (const pixel of pixels) {
    pixel.style.backgroundColor = 'white';
  }
}

// Event handle's
const handleControllerEvents = (...types) => {
  for (const type of types) {
    switch (type) {
      case 'click':
        controllerEventsClicks(type);
        break;
      case 'input':
        // controllerEventsInputs(type);
        break;
    }
  }
}
const controllerEventsClicks = (type) => {
  document.addEventListener(type, (event) => {
    const dataSetEvent = event.target.dataset.event;
    switch (dataSetEvent) {
      case 'selectColor':
        selectColor(event);
        break;
      case 'changeColor':
        setColorChangePixel(event);
        break;
      case 'clearButton':
        clearButtonPixelBoard();
        break;
    }
  })
}

// Create board canvas
const createLinePixel = () => {
  const linePixelBoard = document.createElement('div');
  linePixelBoard.className = "line-pixel-board";
  return linePixelBoard;
}
const createPixelInLine = () => {
  const pixelDiv = document.createElement('div');
  pixelDiv.className = 'pixel';
  pixelDiv.dataset.event = 'changeColor';
  pixelDiv.style.backgroundColor = 'white';
  return pixelDiv;
}
const makeCanvasBoard = (heightNumber, widthNumber) => {
  const pixelBoard = document.querySelector('#pixel-board');
  for (let line = 1; line <= heightNumber; line += 1) {
    const line = createLinePixel();
    for (let pixel = 1; pixel <= widthNumber; pixel += 1) {
      line.appendChild(createPixelInLine());
    }
    pixelBoard.appendChild(line);
  }
}



// Load page
window.onload = () => {

  populateColorsPalette(3);
  makeCanvasBoard(5, 5)
  handleControllerEvents('click')

}
