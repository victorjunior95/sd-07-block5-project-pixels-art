const sizeBoard = document.querySelector('#board-size');
const generatorButton = document.querySelector('#generate-board');
const board = document.querySelector('#pixel-board');
const arrayColorOfPalette = document.querySelectorAll('.color');

// const clear = document.querySelector('#clear-board');

let size = null;

let currentColor = 'black';

sizeBoard.addEventListener('keyup', function () {
  size = sizeBoard.value;
  if (size > 50) {
    size = 50;
  }
  if (size < 5) {
    size = 5
  }
  returnOrClick ();
});

function returnOrClick () {
    sizeBoard.addEventListener('keydown', function (event) {
      if (event.keyCode == 13) {
        createPixels();
      }
    });
    generatorButton.addEventListener('click', createPixels);
}

function createPixels () {
  size = parseInt(size);

  // https://developer.cdn.mozilla.net/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/pow - potencia;

  // https://developer.mozilla.org/en-US/docs/Web/CSS/repeat - (criando a quantidade suficiente pra preencher o grid) display grid mais no CSS;


  for (let index = 1; index <= Math.pow(size, 2); index += 1) {
    let newPixel = document.createElement('div');
    newPixel.className = 'pixel';
    board.appendChild(newPixel);
  }
  makeBoard ();
}

function makeBoard () {

  // https://developer.mozilla.org/en-US/docs/Web/CSS/repeat - (preenchendo colunas e linhas com os elementos criados no passo acima) display grid mais no CSS;

  board.style.gridTemplateColumns = `repeat(${size}, 40px)`;
  board.style.gridTemplateRows = `repeat(${size}, 40px)`;
} 

function getRandom () {
  return Math.floor(Math.random() * 100);
}

function selectColorsOfPalette () {
  for (let index = 1; index < arrayColorOfPalette.length; index += 1) {
    let randomRGBColor = `rgb(${getRandom ()} , ${getRandom ()} , ${getRandom()})`;
    arrayColorOfPalette[index].style.backgroundColor = randomRGBColor;
    arrayColorOfPalette[index].style.color = randomRGBColor;
  }
}

selectColorsOfPalette ();

window.onload = function() {
  arrayColorOfPalette[0].classList.add('selected');
  arrayColorOfPalette[0].style.backgroundColor = 'black';
  arrayColorOfPalette[0].style.color = 'black';
  currentColor = 'black';
}

function getTheColor () {
  for (let index = 0; index < arrayColorOfPalette.length; index += 1) {
    teste2 (index);
    // arrayColorOfPalette[index].addEventListener('click', function (event) {
    //   alert(event.target);
    // });
  }
}

function teste2 (index) {
  arrayColorOfPalette[index].addEventListener('click', function () {
    alert('ola');
  });
}

function paint () {
  alert('ola')   // <<<< Esse funciona
  let pixels = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixels.length; index += 1) {
  alert('ola') // <<<<< Esse não funciona
    
    teste(pixels[index]);
    // alert('alo')
    // pixels[index].addEventListener('click', function () {
    //   pixels[index].style.backgroundColor = currentColor;
    //   alert('alo')
    // });
  }
}

function teste (local) {
  local.addEventListener('click', function () {
    alert('alo')
  })
}

getTheColor();
paint();

// clear.addEventListener('click', function () {
//   for (let index = 0; index < pixel.length; index += 1) {
//     pixel[index].style.backgroundColor = 'white';
//   }
// });

// classList