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

function getBlackColor(e){
  let element = e.target;
  removeClassSelected();
  element.classList.add('selected');
  selectedColor = 'black'
}
color1.addEventListener('click', getBlackColor);


// for (let i = 0 ; i < colors.length ; i += 1) {
//   list[i].addEventListener(TouchEvent , changeSelectedColor(list[i]));
// }



//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

  // foto.addEventListener('click', function () {
  //   painel.src = window.URL.createObjectURL(this.files[0]);
  // });

