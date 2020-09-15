
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

let pixelBoard = document.getElementsByClassName('pixel')
for (let i = 0; i < pixelBoard.length; i++) {
    pixelBoard[i].addEventListener('click', function (event) {
    let colors = document.getElementsByClassName('selected')[0];
    let pixelColor = event.target;
    pixelColor.style.backgroundColor = getComputedStyle(colors).backgroundColor
  });
}


