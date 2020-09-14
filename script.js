let paint = document.getElementsByClassName("selected")[0];
let background = window.getComputedStyle(paint).backgroundColor;
let selectedColor = document.getElementById("color-palette");
let paintPixel = document.getElementById("pixel-board");
let resetPixel = document.getElementById("clear-board")

selectedColor.addEventListener("click", function (event) {
  if (
    event.target.classList.contains("selected") == false &&
    event.target.classList.contains("color") == true
  ) {
    paint.classList.remove("selected");
    event.target.className += " selected";
    paint = document.getElementsByClassName("selected")[0];
    background = window.getComputedStyle(paint).backgroundColor;
  }
});

paintPixel.addEventListener("click", function (event) {
  if (event.target.classList.contains("pixel") == true) {
    event.target.style.backgroundColor = background;
  }
});

resetPixel.addEventListener("click", function() {
  let reset = document.getElementsByClassName("pixel")
  for (let index = 0; index < reset.length; index += 1) {
    reset[index].style.backgroundColor = "white"
  }
})
