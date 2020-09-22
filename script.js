let colorPallete = document.getElementById('color-palette');
let pixelBoard = document.getElementById('pixel-board');
let colors = document.querySelectorAll('.color');

for (let indexLine = 0; indexLine < 5; indexLine += 1) {
  let lineBoard = document.createElement('div');
  pixelBoard.appendChild(lineBoard);
  for (let indexColumn = 0; indexColumn < 5; indexColumn += 1){
    let pixel = document.createElement('div');
    pixel.setAttribute('class', 'pixel');
    lineBoard.appendChild(pixel);
    pixel.addEventListener('click', function() {
      let elementSelected = document.querySelector('.selected');
      pixel.style.backgroundColor = getBgColor(elementSelected);  
    });
  }
}

function getBgColor(element) {
  let colorOfElementPallete = window.getComputedStyle(element, null)
  .getPropertyValue("background-color");
  console.log(colorOfElementPallete);
  return colorOfElementPallete;
}

colors.forEach(element => {
  element.addEventListener('click', function (){
    for(let color of colors){
      color.classList.remove('selected');
    }
    element.classList.add('selected');
  });
});


