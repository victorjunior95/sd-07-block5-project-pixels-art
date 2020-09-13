let selected = document.querySelector('.selected');
let colors = document.querySelectorAll('.color');
for (let i = 0; i < colors.length; i += 1) {
  colors[i].addEventListener('click', function () {
    selected.classList.remove('selected');
    colors[i].classList.add('selected');
    selected = colors[i];
  });
}
let pixels = document.querySelectorAll('.pixel');
for (let i = 0; i < pixels.length; i += 1) {
  pixels[i].style.backgroundColor = 'white';
  pixels[i].addEventListener('click', function () {
    pixels[i].style.backgroundColor = getComputedStyle(selected).backgroundColor;
  });
}
document.querySelector('#clear-board').addEventListener('click',function(){
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor='white';
  };
})