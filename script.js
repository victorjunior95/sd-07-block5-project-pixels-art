window.onload = () => {

  makeColorsPalette(3);

}

const makeColorsPalette = (number) => {
  makeColorSinglePalette("black");
  for (let index = 1; index <= number; index += 1) {
    makeColorSinglePalette(colorGeneratorRandom());
  }
}

const makeColorSinglePalette = (color) => {
  const colorPaletteDiv = document.querySelector('#color-palette');
  const colorDiv = document.createElement('div');
  colorDiv.className = 'color';
  colorDiv.style.backgroundColor = color;
  colorPaletteDiv.appendChild(colorDiv);
}

const colorGeneratorRandom = () => {
  return `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`
}
