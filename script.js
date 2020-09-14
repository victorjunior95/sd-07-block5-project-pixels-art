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

let buttonClearPixels = document.querySelector('button');
let pixel = document.querySelectorAll('.pixel');
buttonClearPixels.addEventListener('click', function() {
  pixel.forEach((item) => {
    item.style.backgroundColor = 'white';
  });
});