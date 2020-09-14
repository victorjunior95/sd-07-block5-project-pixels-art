let selectedColor = document.getElementById("black-index");
document.querySelectorAll(".color").forEach(indexClick);
function changeClass(item) {
  item.classList.remove("selected");
}

function indexClick(item) {
  item.addEventListener("click", function () {
    document.querySelectorAll(".color").forEach(changeClass);
    item.classList.add("selected");
    selectedColor = item;
  });
}
let pixels = document.querySelectorAll('.pixel');
let clearAllPixels = document.getElementById('clear-board');
clearAllPixels.addEventListener('click', () => {
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'white';
  }
});