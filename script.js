const makeColorsPalette = (number) => {
  const makeColorSinglePalette = (color) => {
    const colorPaletteDiv = document.querySelector('#color-palette');
    const colorDiv = document.createElement('div');
    colorDiv.className = 'color';
    colorDiv.style.backgroundColor = color;
    colorPaletteDiv.appendChild(colorDiv);
  }

  const colorGeneratorRandom = () => {
    return `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`;
  }

  makeColorSinglePalette('black');
  for (let index = 1; index <= number; index += 1) {
    makeColorSinglePalette(colorGeneratorRandom());
  }
}


const makeCanvasBoard = (heightNumber, widthNumber) => {

  const createLinePixel = () => {
    const linePixelBoard = document.createElement('div');
    linePixelBoard.className = "line-pixel-board";
    return linePixelBoard;
  }

  const addPixelInLine = () => {
    const pixelDiv = document.createElement('div');
    pixelDiv.className = 'pixel'
    pixelDiv.style.backgroundColor = 'white';
    return pixelDiv;
  }

  const pixelBoard = document.querySelector('#pixel-board');
  for (let line = 1; line <= heightNumber; line += 1) {
    const line = createLinePixel();
    for (let pixel = 1; pixel <= widthNumber; pixel += 1) {
      line.appendChild(addPixelInLine());
    }
    pixelBoard.appendChild(line);
  }
}

window.onload = () => {

  makeColorsPalette(3);
  makeCanvasBoard(5, 5)

}
