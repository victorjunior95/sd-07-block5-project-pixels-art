let selectPixel = document.querySelectorAll('.pixel');

let colorSelected = document.querySelector('.selected');

function changeColor(event) {
  event.target.style.backgroundColor = colorSelected.style.backgroundColor;

// function changeColor(event) {
//   event.target.style.backgroundColor = window.getComputedStyle(colorSelected, String).getPropertyValue("background-color");

for(let index = 0; index < selectPixel.length; index += 1) {
  selectPixel[index].addEventListener('click', changeColor);
}
