
let colorEnter = document.querySelector('.black-index');
document.querySelectorAll('.color').forEach(clickToConfigurePallete);


















const button = querySelector('#clear-board');
button.addevenListener('click', function () {
  document.querySelectorAll('.pixel').forEach(allToWhite);
})

function allToWhite(item) {
  item.style.backgroundColor = "white";
}