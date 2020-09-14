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

function createPixelBoard(parent) {
  const sectionPixelBoard = document.createElement('section');
  sectionPixelBoard.className = ('pixel-board-section');
  parent.appendChild(sectionPixelBoard);
  // Gerando a tabela (pixel-board)
  const basePixelBoard = document.createElement('table');
  basePixelBoard.className = 'table-pixels';
  basePixelBoard.setAttribute('id', 'pixel-board');
  sectionPixelBoard.appendChild(basePixelBoard);
  const rowNameId = ['a', 'b', 'c', 'd', 'e'];
  for (let index = 0; index < rowNameId.length; index += 1) {
    let colIdName = rowNameId[index];
    const tableRow = document.createElement('tr');
    tableRow.className = 'table-row';
    basePixelBoard.appendChild(tableRow);
    for (let indexCol = 0; indexCol < rowNameId.length; indexCol += 1) {
      const tableCol = document.createElement('td');
      tableCol.className = 'pixel';
      tableCol.setAttribute('id', `${colIdName}${indexCol}`);
      tableCol.style.backgroundColor = 'white'
      tableRow.appendChild(tableCol);
    }
  }
}
createPixelBoard(mainPage);
