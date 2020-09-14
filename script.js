// código de como fazer uma cor aleatória tirada de: https://pt.stackoverflow.com/questions/5848/como-colorir-aleatoriamente-divs-com-um-array-de-cores-em-javascript

document.querySelector('.second-color').style.backgroundColor = '#'+Math.floor(Math.random()*16777215).toString(16);

document.querySelector('.third-color').style.backgroundColor = '#'+Math.floor(Math.random()*16777215).toString(16);

document.querySelector('.fourth-color').style.backgroundColor = '#'+Math.floor(Math.random()*16777215).toString(16);

let selectPixel = document.querySelectorAll('.pixel');

function changeColor(event) {
  let colorSelected = document.querySelector('.selected');

   event.target.className= "pixel td " +  colorSelected.classList[1];
}

for(let index = 0; index < selectPixel.length; index += 1) {
  selectPixel[index].addEventListener('click', changeColor);
}

let getColor = document.querySelectorAll('.color');

function changeSelected(event){
  let colorSelected = document.querySelector('.selected');

  colorSelected.classList.remove('selected');
  event.target.classList.add('selected');
}

for(let count = 0; count < getColor.length; count += 1) {
  getColor[count].addEventListener('click', changeSelected)
}

let clearButton = document.getElementById('clear-board');

clearButton.addEventListener('click', function (){
  for(let list = 0; list < selectPixel.length; list += 1){
    let selectPixel = document.querySelectorAll('.pixel');
    selectPixel[list].className = 'pixel td';
  }
})

console.log(corRandom);
