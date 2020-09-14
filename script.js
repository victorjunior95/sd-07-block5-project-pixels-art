const pixelBoard = document.querySelector('#pixel-board');
const colors = document.querySelectorAll('.color');
const clearBoard = document.querySelector('.clear-board');
const buttonGenerateBoard = document.querySelector('.generate-board');
let numberOfLinesAndColunms = 5;

function makeBoard(numberOfLinesAndColunms) {
  for (let index = 0; index < numberOfLinesAndColunms; index += 1) {
      let tr = document.createElement('div');
      tr.style.display.tr;
      pixelBoard.appendChild(tr);
  for (let j = 0; j < numberOfLinesAndColunms; j += 1) {
      let td = document.createElement('div');
      td.style.display.td;
      classTD(td);
      tr.appendChild(td)
    }
  }
};

makeBoard(numberOfLinesAndColunms);

let pixels = document.querySelectorAll('.pixel');

function classTD(td) {
  let tdClass = td.className = 'pixel';
  return tdClass;
}; 

colors.forEach(item => {
  item.addEventListener('click', function(event) {
    event.target.classList.add('selected');
     colors.forEach(item => {
        if (item !== event.target) {
          item.classList.remove('selected');
        }
      });
  });
});

function paintBoard(event) {
  const colorSelected = document.querySelector('.selected');
  let bgColor = window.getComputedStyle(colorSelected, null).getPropertyValue('background-color');
  event.target.style.backgroundColor = bgColor;
}

pixels.forEach(item => {
  item.addEventListener('click', paintBoard);
});

buttonGenerateBoard.addEventListener('click', function() {
  numberOfLinesAndColunms = document.getElementById('board-size').value;
  if (numberOfLinesAndColunms === null) {
      alert('Board inválido!');
  } else if (numberOfLinesAndColunms > 50) {
    numberOfLinesAndColunms = 50;
  } else if (numberOfLinesAndColunms < 5) {
    numberOfLinesAndColunms = 5;
  }
    pixelBoard.innerHTML = '';
    makeBoard(numberOfLinesAndColunms);
    pixels = document.querySelectorAll('.pixel');
    pixels.forEach(item => {
      item.addEventListener('click', paintBoard);
    });
  
});

clearBoard.addEventListener('click', function() {
  pixels.forEach(item => {
    item.style.backgroundColor = 'white';
  })
});
