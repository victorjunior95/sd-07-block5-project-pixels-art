//Defining the colors
const black = document.querySelector('#black');
const red = document.querySelector('#red');
const green = document.querySelector('#green');
const blue = document.querySelector('#blue');

let selected = document.querySelector('.selected');
const colors = document.querySelectorAll('.color')

black.style.backgroundColor = 'black';
red.style.backgroundColor = 'red';
green.style.backgroundColor = 'green';
blue.style.backgroundColor = 'blue';


//Drawing the pixel board;
function initialPixelBoard(boardSize) {
  const pixelBoard = document.querySelector('.pixel-board');
  for (let rows = 0; rows < boardSize; rows += 1) {
    
    let pixelRow = document.createElement('div');
    pixelRow.classList.add('pixel-row');  
    
    for (let cells = 0; cells < boardSize; cells += 1) {
      
      let pixelCell = document.createElement('div');
      pixelCell.classList.add('pixel', 'border');
      pixelCell.style.backgroundColor = 'white';
      pixelRow.appendChild(pixelCell)
    }
    
    pixelBoard.appendChild(pixelRow);
  }
};

function gettingTheColors() {
  for (const btn of colors) {
    btn.addEventListener('click', function () {
      if (!event.target.classList.contains('selected')) {
        selected.classList.remove('selected');
        event.target.classList.add('selected');
      }
      selected = document.querySelector('.selected');
    })
  }
};

function paintTheBoard() {
  const pixels = document.querySelectorAll('.pixel');

  for (const cell of pixels) {
    cell.addEventListener('click', function () {
      event.target.style.backgroundColor = selected.style.backgroundColor;
    })
  }
};


//User-generated border
function userBoard() {
  const pixelBoard = document.querySelector('.pixel-board');
  const generateBoard = document.querySelector('#generate-board');

  generateBoard.addEventListener('click', function () {

    let userBoardSize = document.getElementById('board-size');

    if (userBoardSize.value == '') {
      alert('Board inválido');
    } else if (userBoardSize.value >= 0 && userBoardSize.value <5){
      userBoardSize.stepUp(5 - userBoardSize.value);
    } else if (userBoardSize.value > 50) {
      userBoardSize.stepDown(userBoardSize.value - 50);
    };

    // if (userBoardSize.value >= 0 && userBoardSize.value < 5 ) {
    //   userBoardSize.stepUp(5 - userBoardSize.value); 
    // } else if (userBoardSize.value > 50) {
    //   userBoardSize.stepDown(userBoardSize.value - 50);
    // } else if (userBoardSize.value === '') {
    //   alert('Board inválido!');
    // };
    pixelBoard.innerHTML = '';
    initialPixelBoard(userBoardSize.value);
    gettingTheColors();
    paintTheBoard();
  });

};
//Clearing the board
document.querySelector('#clear-board').addEventListener('click', function () {
  const pixels = document.querySelectorAll('.pixel');
  for (const cell of pixels) {
    cell.style.backgroundColor = 'white';
  }
});

initialPixelBoard(5);
gettingTheColors();
paintTheBoard();

userBoard();