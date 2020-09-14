const colorDefined = document.querySelectorAll('.color');
const matrixLine = document.querySelector('#pixel-board');
const matrixColumn = document.getElementsByClassName('centerSection');
let cellBox;
let sizeBoard = 5;
colorDefined[0].style.backgroundColor = 'black';
colorDefined[1].style.backgroundColor = 'red';
colorDefined[2].style.backgroundColor = 'green';
colorDefined[3].style.backgroundColor = 'blue';
//for (index = 0; index < sizeBoard; index += 1) {
//    cellLine = createLine('centerSection');
//    matrixColumn[index].appendChild(cellLine);
//}
//for (index = 1; index <= sizeBoard; index += 1) {
//    cellBox = createBox('pixel');
//    matrixLine.appendChild(cellBox);
//}

//function createLine(className) {
//    let line = document.createElement('section');
//    line.ClassName = className;
//    return line;
//
//}
//function createColumn(className) {
//    let box = document.createElement("div");
//    box.className = className;
//    return box;
//}

