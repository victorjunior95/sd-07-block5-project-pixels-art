// Criando o header
const headerPage = document.createElement('header');
headerPage.className = 'head-class';
document.body.appendChild(headerPage);
// Criando H1
const titleProject = document.createElement('h1');
titleProject.innerHTML = 'Paleta de Cores';
titleProject.className = 'title';
titleProject.setAttribute('id', 'title');
headerPage.appendChild(titleProject);
// Criando o main
const mainPage = document.createElement('main');
mainPage.className = 'main-class';
document.body.appendChild(mainPage);
// criando o footer
const footerPage = document.createElement('footer');
footerPage.className = 'footer-class';
footerPage.innerText = 'Josiel - Turma #7 - Trybe';
document.body.appendChild(footerPage);

function createPaletteColors(parent) {
  const palette = document.createElement('section');
  palette.className = 'color-palette';
  palette.setAttribute('id', 'color-palette');
  parent.appendChild(palette);

  const colorsPalette = ['black', 'oldlace', 'tomato', 'dodgerblue'];
  for (let index = 0; index < colorsPalette.length; index += 1) {
    const colorOfPalette = document.createElement('span');
    colorOfPalette.className = `color ${colorsPalette[index]}`;
    colorOfPalette.setAttribute('id', colorsPalette[index]);
    colorOfPalette.style.backgroundColor = colorsPalette[index];
    palette.appendChild(colorOfPalette);
  }
}
createPaletteColors(mainPage);
// console.log(document.getElementById("black").style.backgroundColor);

function createBasePixelBoard(parent) {
  // Criar a div base.
  const divAll = document.createElement('div');
  divAll.className = 'pixel-board';
  divAll.setAttribute('id', 'pixel-board');
  parent.appendChild(divAll);
  const idLines = ['a', 'b', 'c', 'd', 'e'];
  for (let lineIndex = 0; lineIndex < idLines.length; lineIndex += 1) {
    const divLine = document.createElement('div');
    divLine.className = 'line';
    divAll.appendChild(divLine);
    const lineActual = idLines[lineIndex];
    for (let pixelIndex = 0; pixelIndex < idLines.length; pixelIndex += 1) {
      const pixel = document.createElement('div');
      pixel.setAttribute('id', `${lineActual}${pixelIndex}`);
      pixel.className = 'pixel';
      divLine.appendChild(pixel);
    }
  }
}
createBasePixelBoard(mainPage);
