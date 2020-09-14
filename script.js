let selectedColor = document.getElementById("black-index");

let pixels2 = document.querySelectorAll(".pixel");
document.querySelectorAll(".pixel").forEach(changePixelSelect);
function changePixelSelect(item) {
  for (let i in pixels2);
  item.addEventListener("click", () => {
    color = window
      .getComputedStyle(selectedColor)
      .getPropertyValue("background-color");
    item.style.backgroundColor = color;
  });
}

document.querySelectorAll(".color").forEach(indexClick);
function indexClick(item) {
  item.addEventListener("click", function () {
    document.querySelectorAll(".color");
    item.classList.add("selected");
    selectedColor = item;
    item.classList.remove("selected");
  });
}

let pixels = document.querySelectorAll(".pixel");
let clearAllPixels = document.getElementById("clear-board");
clearAllPixels.addEventListener("click", () => {
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = "white";
  }
});
