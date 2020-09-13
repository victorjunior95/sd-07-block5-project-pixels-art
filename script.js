document.querySelectorAll('.pixel').forEach(item => {
  item.classList.add('sectionPix');
})
// Function to make background shine.
function changeBKGColor () {
  const body = document.getElementsByTagName('body')[0];
  const title = document.getElementsByTagName('h1')[0];
  const rColorRGB = Math.floor(Math.random()*255);
  const gColorRGB = Math.floor(Math.random()*255);
  const bColorRGB = Math.floor(Math.random()*255);
  body.style.backgroundColor='rgb(' + rColorRGB + ' , ' + gColorRGB + ' , ' + bColorRGB + ')';
  title.style.color='rgb(' + rColorRGB + 1 + ' , ' + gColorRGB + ' , ' + bColorRGB + 1 + ')';
}
// const time = setInterval (changeBKGColor, 100);
// Remove the bars fron the line above to see the efect.

const color01 = document.getElementById('color-01');
const color02 = document.getElementById('color-02');
const color03 = document.getElementById('color-03');
const color04 = document.getElementById('color-04');
const colorPalet = document.querySelectorAll('.color');
const pixelSS = document.querySelectorAll('.pixel');
const clearBT = document.getElementById('clear-board');
let saveClass = "";

document.querySelectorAll('.pixel').forEach(item => {
  item.classList.remove('sectionPix');
});

// Function to add class 'selected' in palet itens, and add a class color of color selected.
colorPalet.forEach(item => {
  item.addEventListener('click', event => {
  item.classList.add('selected');
  saveClass = item.classList[1];
  });
    pixelSS.forEach(item2 => {
    item2.addEventListener('click', event => {
    item2.classList.add(saveClass);
    });
  });
});

// Function to clear all class color fron pixel itens.
clearBT.addEventListener('click', function () {
  pixelSS.forEach(item2 => {
  item2.className = 'pixel';
  });
});

color01.addEventListener('click', function () {
  color02.className = 'color color-02';
  color03.className = 'color color-03';
  color04.className = 'color color-04';
})

color02.addEventListener('click', function () {
  color01.className = 'color color-01';
  color03.className = 'color color-03';
  color04.className = 'color color-04';
})

color03.addEventListener('click', function () {
  color01.className = 'color color-01';
  color02.className = 'color color-02';
  color04.className = 'color color-04';
})

color04.addEventListener('click', function () {
  color01.className = 'color color-01';
  color02.className = 'color color-02';
  color03.className = 'color color-03';
})
