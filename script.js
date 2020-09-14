let myArray = [
    [[''],[''],[''],[''],['']],
    [[''],[''],[''],[''],['']],
    [[''],[''],[''],[''],['']],
    [[''],[''],[''],[''],['']],
    [[''],[''],[''],[''],['']],
]

let currentColor = window.getComputedStyle(document.querySelector('#color1')).getPropertyValue("background-color")
let colorBlack = document.querySelector('#color1');
let colorOne = document.querySelector('#color2');
let colorTwo = document.querySelector('#color3');
let colorThree = document.querySelector('#color4');
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
    colorOne.className = `color`;
    colorTwo.className = `color`;
    colorThree.className = `color`;

}

function currentColorToRed(){
    currentColor = window.getComputedStyle(document.querySelector('#color2')).getPropertyValue("background-color")
    colorOne.className = `color selected`;
    colorBlack.className = `color`;
    colorTwo.className = `color`;
    colorThree.className = `color`;
}

function currentColorToBlue(){
    currentColor = window.getComputedStyle(document.querySelector('#color3')).getPropertyValue("background-color")
    colorTwo.className = `color selected`;
    colorBlack.className = `color`;
    colorOne.className = `color`;
    colorThree.className = `color`;
}

function currentColorToGreen(){
    currentColor = window.getComputedStyle(document.querySelector('#color4')).getPropertyValue("background-color")
    colorThree.className = `color selected`;
    colorBlack.className = `color`;
    colorOne.className = `color`;
    colorTwo.className = `color`;
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


  colorThree.addEventListener('click', currentColorToGreen)
  colorTwo.addEventListener('click', currentColorToBlue)
  colorOne.addEventListener('click', currentColorToRed)
  colorBlack.addEventListener('click', currentColorToBlack)  

}
createBoard()

function randomColorOne() {
let randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
let r = randomBetween(0, 255);
let g = randomBetween(0, 255);
let b = randomBetween(0, 255);
let rgb = `rgb(${r},${g},${b})`;
colorOne.style.background = rgb     
}
 randomColorOne()

 function randomColorTwo() {
    let randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
    let r = randomBetween(0, 255);
    let g = randomBetween(0, 255);
    let b = randomBetween(0, 255);
    let rgb = `rgb(${r},${g},${b})`;
    colorTwo.style.background = rgb     
 }
     randomColorTwo()

     function randomColorThree() {
        let randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
        let r = randomBetween(0, 255);
        let g = randomBetween(0, 255);
        let b = randomBetween(0, 255);
        let rgb = `rgb(${r},${g},${b})`;
        colorThree.style.background = rgb     
    }
     randomColorThree()


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
  