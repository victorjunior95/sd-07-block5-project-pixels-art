
let board = document.getElementById('pixel-board')
let amountOfSquares = 5;

for (counter = 0; counter < amountOfSquares;counter +=1){
    for (index = 0; index < amountOfSquares;index +=1){
        let square = document.createElement('div');
        square.className += 'pixel';
        board.appendChild(square)
    }
    board.innerHTML = board.innerHTML + '<br>'
}

let paletteColors = document.getElementsByClassName('color');

document.addEventListener('click', function(event){
    if(event.target.classList.contains('color')){
        let selectColor = document.querySelector('.selected');
        selectColor.classList.remove('selected');
        event.target.classList.add('selected')
    }
})
//baseado em https://app.betrybe.com/course/fundamentals/javascript/dom-manipulation/js-part-6
let pixelBoard = document.getElementsByClassName('pixel')
for (let i = 0; i < pixelBoard.length; i+= 1) {
    pixelBoard[i].addEventListener('click', function (event) {
    let colors = document.getElementsByClassName('selected')[0];
    let pixelColor = event.target;
    pixelColor.style.backgroundColor = getComputedStyle(colors).backgroundColor
  });
}


let clear = document.getElementById('clear-board')
clear.addEventListener('click', function () {
    for (let index = 0; index < pixelBoard.length; index += 1) {
        pixelBoard[index].style.backgroundColor = 'white'
    }
});