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

  const colorsPalette = ['Black', 'OldLace', 'Tomato', 'MediumAquamarine', 'DodgerBlue'];
  for (let index = 0; index < colorsPalette.length; index += 1) {
    let colorOfPalette = document.createElement('span');
    colorOfPalette.className = 'color';
    colorOfPalette.setAttribute('id', colorsPalette[index]);
    colorOfPalette.style.backgroundColor = colorsPalette[index];
    palette.appendChild(colorOfPalette)
  }
}
createPaletteColors(mainPage);