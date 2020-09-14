let paint = document.getElementsByClassName("selected")[0];
let background = window.getComputedStyle(paint).backgroundColor;
let selectedColor = document.getElementById("color-palette");
let paintPixel = document.getElementById("pixel-board")

selectedColor.addEventListener("click", function (event) {
  if (event.target.classList.contains("selected") == false) {
    paint.classList.remove("selected");
    event.target.className += " selected";
    paint = document.getElementsByClassName("selected")[0]
    background = window.getComputedStyle(paint).backgroundColor;
  }
});

paintPixel.addEventListener("click", function(event) {
  event.target.style.backgroundColor = background
})
