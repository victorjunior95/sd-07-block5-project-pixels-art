// Function to make background shine.
function changeBKGColor () {
  const body = document.getElementsByTagName('body')[0];
  const title = document.getElementsByTagName('h1')[0];
  const rColorRGB = Math.floor(Math.random()*255);
  const gColorRGB = Math.floor(Math.random()*255);
  const bColorRGB = Math.floor(Math.random()*255);
  body.style.backgroundColor='rgb('+rColorRGB+','+gColorRGB+','+bColorRGB+')';
  title.style.color='rgb('+rColorRGB+1+','+gColorRGB+','+bColorRGB+1+')';
}
//const time = setInterval (changeBKGColor, 100);
// Remove the bars fron the line above to see the efect.
function setBoardSize(numberLines) {
  numberLines = document.querySelector('#generate-board').value;
  if ((numberLines <= 0) && (numberLines > 5)) {
    numberLines = 5;
  } 
    else if (numberLines > 50) {
      numberLines = 50;
   }
        else {
          let pixelBoard = document.getElementById('pixel-board');
          pixelBoard.style.width = (numberLines * 40) +'px';
          pixelBoard.style.height = (numberLines * 40) +'px';
          let pixel = [];
          let linha = [];
          let divSize = numberLines**2;
          for (let count = 0; count < divSize; count += 1) {
          linha[count] = document.createElement('div');
          linha[count].className = 'pixel';
          pixelBoard.appendChild(linha[count]);
        }
    }
    document.querySelector('#generate-board').value = '';
    document.querySelector('#generate-board').focus();
}
const teste = document.getElementById('set-board-size');
teste.addEventListener('click', setBoardSize);

// Function to add class 'selected' in palet itens, and set the color to pint pixels.
const pixelBoard = document.getElementById('pixel-board');
const setColor = document.querySelectorAll('.color');
for (let i = 0; i < setColor.length; i += 1) {
  setColor[i].addEventListener('click', function(event) {
    let selected = document.querySelector('.selected');
    selected.classList.remove('selected');
    event.target.className += ' selected';

  })
}
// Function to add the class from selected color palet to pixels.
const selected = 'color-01';
pixelBoard.addEventListener('click', function(event) {
  let selected = document.querySelector('.selected');
  event.target.style.backgroundColor =  window.getComputedStyle(selected).backgroundColor;
  const pixelIten = document.querySelectorAll('.pixel');
  pixelIten.forEach(iten => {
    iten.classList.add(selected.value);
  })
});