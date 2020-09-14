window.onload = function () {
  const pixelBoard = document.getElementById('pixel-board');
  const inputBoardSize = document.getElementById('board-size');
  const buttonBlack = document.querySelector('.black');
  const buttonOne = document.querySelector('.first');
  const buttonTwo = document.querySelector('.second');
  const buttonThree = document.querySelector('.third');
  const buttonColor = document.getElementsByClassName('color');
  const buttonClear = document.getElementById('clear-board');
  const buttonCreateBoard = document.getElementById('generate-board');
  let firstTime = true;
  let currentColor = 'black';

  function selectColor(event) {
    for (const element of buttonColor) {
      if (element.classList.contains('selected')) element.classList.toggle('selected');
    }
    event.target.classList.toggle('selected');
    currentColor = event.target.style.backgroundColor;
  }

  function fillColor(event) {
    event.target.style.backgroundColor = currentColor;
  }

  function addClickListener() {
    const div = document.querySelectorAll('.pixel');
    for (const element of div) {
      element.addEventListener('click', fillColor);
    }
  }

  function clearBoard() {
    const div = document.querySelectorAll('.pixel');
    for (const element of div) {
      element.style.backgroundColor = 'white';
    }
  }

  function createBoard(numberOfLines) {
    numberOfLines = checkNumber(numberOfLines);
    if (isEmpty()) {
      pixelBoard.innerHTML = '';
      for (let line = 0; line < numberOfLines; line += 1) {
        const divLine = document.createElement('div');
        divLine.className = 'pixel-line';
        pixelBoard.appendChild(divLine);

        for (let column = 0; column < numberOfLines; column += 1) {
          const divColumn = document.createElement('div');
          divColumn.className = 'pixel';
          divLine.appendChild(divColumn);
        }
      }
      addClickListener();
      firstTime = false;
    }
  }

  function isEmpty() {
    if (firstTime) return true;
    if (inputBoardSize.value.length === 0) return alert('Board inválido!');
    return true;
  }

  function checkNumber(numberOfLines) {
    if (numberOfLines < 5) numberOfLines = 5;
    if (numberOfLines > 50) numberOfLines = 50;
    return numberOfLines;
  }

  function makeRandomColor() {
    var color = '';
    while (color.length < 6) {
      color += (Math.random()).toString(16).substr(-6).substr(-1)
    }
    return '#' + color;
  }

  function setColors() {
    const colors = document.querySelectorAll('.color');
    for (const element of colors) {
      if (!(element.classList.contains('black'))) {
        let color = makeRandomColor();
        element.style.backgroundColor = color;
      }
    }
    buttonBlack.style.backgroundColor = 'black';
  }

  buttonBlack.addEventListener('click', selectColor);
  buttonOne.addEventListener('click', selectColor);
  buttonTwo.addEventListener('click', selectColor);
  buttonThree.addEventListener('click', selectColor);
  buttonClear.addEventListener('click', clearBoard);
  buttonCreateBoard.addEventListener('click', () => createBoard(Number(inputBoardSize.value)));

  setColors();
  addClickListener();
  createBoard(5);

}