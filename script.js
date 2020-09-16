let colorPallete = document.getElementById('color-palette');
let pixelBoard = document.getElementById('pixel-board');
let colors = document.querySelectorAll('.color');

let firstColorPallete = colorPallete.children[0];


window.onload = function () {
  firstColorPallete.classList.add('selected');
};

for (let indexLine = 0; indexLine < 5; indexLine += 1) {
  let lineBoard = document.createElement('div');
  pixelBoard.appendChild(lineBoard);
  for (let indexColumn = 0; indexColumn < 5; indexColumn += 1){
    let pixel = document.createElement('div');
    pixel.setAttribute('class', 'pixel');
    lineBoard.appendChild(pixel);
  }
}

// console.log(colors);

colors.forEach(element => {
  element.addEventListener('click', function (){
    for (let color of colors) {
      color.classList.remove('selected');
    }
    element.classList.add('selected');
  });
});