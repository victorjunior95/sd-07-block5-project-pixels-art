let myArray = [
    [[''],[''],[''],[''],['']],
    [[''],[''],[''],[''],['']],
    [[''],[''],[''],[''],['']],
    [[''],[''],[''],[''],['']],
    [[''],[''],[''],[''],['']],
]

let currentColor = window.getComputedStyle(document.querySelector('#color1')).getPropertyValue("background-color")
let colorBlack = document.querySelector('#color1');
let colorRed = document.querySelector('#color2');
let colorBlue = document.querySelector('#color3');
let colorGreen = document.querySelector('#color4');
let divPixelBoard = document.querySelector('#pixel-board')
let clear = document.querySelector('#clear-board')
let generateBoard = document.querySelector('#generate-board')
let boardSize = document.querySelector('#board-size')

function createBoard() {
    for(i = 0; i < myArray.length; i += 1){
        let container = document.createElement('div')
        container.className = "container"
        divPixelBoard.appendChild(container)
        for(j = 0; j < myArray[i].length; j += 1){
            let divPixel = document.createElement('div')
            divPixel.className = "pixel"
            container.appendChild(divPixel);
        }
}

function currentColorToBlack(){
    currentColor = window.getComputedStyle(document.querySelector('#color1')).getPropertyValue("background-color")
    colorBlack.className = `color selected`;
    colorRed.className = `color`;
    colorBlue.className = `color`;
    colorGreen.className = `color`;

}

function currentColorToRed(){
    currentColor = window.getComputedStyle(document.querySelector('#color2')).getPropertyValue("background-color")
    colorRed.className = `color selected`;
    colorBlack.className = `color`;
    colorBlue.className = `color`;
    colorGreen.className = `color`;
}

function currentColorToBlue(){
    currentColor = window.getComputedStyle(document.querySelector('#color3')).getPropertyValue("background-color")
    colorBlue.className = `color selected`;
    colorBlack.className = `color`;
    colorRed.className = `color`;
    colorGreen.className = `color`;
}

function currentColorToGreen(){
    currentColor = window.getComputedStyle(document.querySelector('#color4')).getPropertyValue("background-color")
    colorGreen.className = `color selected`;
    colorBlack.className = `color`;
    colorRed.className = `color`;
    colorBlue.className = `color`;
}

let classPixel = document.querySelectorAll('.pixel');

for(let e = 0 ; e < classPixel.length ; e++) {
    classPixel[e].addEventListener('click', function() {
      classPixel[e].style.background = currentColor
    });
  }

  function clearBoard(){

    for(let e = 0 ; e < classPixel.length ; e++) {
          classPixel[e].style.background = 'white'
      }
}
clear.addEventListener('click', clearBoard)   


  colorGreen.addEventListener('click', currentColorToGreen)
  colorBlue.addEventListener('click', currentColorToBlue)
  colorRed.addEventListener('click', currentColorToRed)
  colorBlack.addEventListener('click', currentColorToBlack)  

}
createBoard()

function removewBoard() {
    checkBoardSize()
    while (divPixelBoard.firstChild) {
  divPixelBoard.removeChild(divPixelBoard.firstChild);
}
ArrayNew()
}
function checkBoardSize(){
if (boardSize.value === ''){
    boardSize.value = 5
    alert('Board inválido!')
}else if (boardSize.value < 5){
    boardSize.value = 5
}else if (boardSize.value > 50){
    boardSize.value = 50
}
return boardSize.value
}
function ArrayNew(){

myArray = []
        for (i = 0; i < boardSize.value ; i += 1){
            myArray.push([])
        for (j = 0; j < boardSize.value; j += 1){
            myArray[i].push(3)
        }
      }
boardSize.value  = ''
currentColor = window.getComputedStyle(document.querySelector('#color1')).getPropertyValue("background-color")
createBoard()
}
generateBoard.addEventListener('click', removewBoard)
  