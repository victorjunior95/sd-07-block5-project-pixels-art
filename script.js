//Documento já começa com a cor preto escolhido como padrão
let selectedColor = document.getElementById("black-index");

// Escolhendo a cor na paleta
document.querySelectorAll(".color").forEach(indexClick);
function indexClick(item) {
  item.addEventListener("click", function () {
    document.querySelectorAll(".color");
    item.classList.add("selected");
    selectedColor = item;
    item.classList.remove("selected");
  });
}

//pintando o pixel
let pixelsColor = document.querySelectorAll(".pixel");
document.querySelectorAll(".pixel").forEach(changePixelSelect);
function changePixelSelect(item) {
  for (let i in pixelsColor);
  item.addEventListener("click", () => {
    color = window
      .getComputedStyle(selectedColor)
      .getPropertyValue("background-color");
    item.style.backgroundColor = color;
  });
}

//botão de limpar
let pixels = document.querySelectorAll(".pixel");
let clearAllPixels = document.getElementById("clear-board");
clearAllPixels.addEventListener("click", () => {
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = "white";
  }
});
