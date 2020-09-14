const pixelBoard = document.querySelector("#pixel-board");
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

function classTD(td) {
  let tdClass = td.className = 'pixel';
  return tdClass;
}

makeBoard();