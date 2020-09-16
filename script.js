let colors = document.querySelectorAll('.color');
let color1 = document.getElementById('color1')
let color2 = document.getElementById('color2')
let color3 = document.getElementById('color3')
let color4 = document.getElementById('color4')

function removeSelectedColor(){
  const paletteColor = document.querySelectorAll(".color");
  for(let i = 0; i < paletteColor.length; i++){
    paletteColor[i].classList.remove('selected');
  }
}

let selectedColor = "black";

function getBlackColor(e){
  let element = e.target;
  removeSelectedColor();
  element.classList.add('selected');
  selectedColor = 'black'
}
color1.addEventListener('click', getBlackColor);

function getGreenColor(e){
  let element = e.target;
  removeSelectedColor();
  element.classList.add('selected');
  selectedColor = 'green'
}
color2.addEventListener('click', getGreenColor);

function getRedColor(e){
  let element = e.target;
  removeSelectedColor();
  element.classList.add('selected');
  selectedColor = 'red'
}
color3.addEventListener('click', getRedColor);

function getBlueColor(e){
  let element = e.target;
  removeSelectedColor();
  element.classList.add('selected');
  selectedColor = 'blue'
}
color4.addEventListener('click', getBlueColor);

let pickPixel = document.querySelector('#pixel-board');

function changePixelColor(e){
    let pixel = e.target;
    pixel.style.backgroundColor = selectedColor;
}

pickPixel.addEventListener('click', changePixelColor);



// for (let i = 0 ; i < colors.length ; i += 1) {
//   list[i].addEventListener(TouchEvent , changeSelectedColor(list[i]));
// }



//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

  // foto.addEventListener('click', function () {
  //   painel.src = window.URL.createObjectURL(this.files[0]);
  // });

