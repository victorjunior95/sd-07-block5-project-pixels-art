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
let pixels = document.querySelectorAll("#pixel");
document.querySelector("#clear-board").addEventListener("click", function () {
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = 'rgb(255 , 255 , 255)';
  }
});




