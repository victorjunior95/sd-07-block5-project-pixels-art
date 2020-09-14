const pixelBoard = document.querySelector('#pixel-board');
const colors = document.querySelectorAll('.color');
const numberOfLinesAndColunms = 5;

function makeBoard() {
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
}
makeBoard();

const pixels = document.querySelectorAll('.pixel');

function classTD(td) {
  let tdClass = td.className = 'pixel';
  return tdClass;
} 

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

pixels.forEach(item => {
  item.addEventListener('click', function(event) {
    const colorSelected = document.querySelector('.selected');
    let bgColor = window.getComputedStyle(colorSelected, null).getPropertyValue('background-color');
    event.target.style.backgroundColor = bgColor;
  })
})
