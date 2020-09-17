let numberLines = 5;
let pixelBoard = document.getElementById("pixel-board");
let pixel = [];
let linha = [];
let kIndex = 0
for (let index = 0; index < numberLines; index += 1) {
  linha[index] = document.createElement("div");

  linha[index].className = "line";
  pixelBoard.appendChild(linha[index]);

  for(let jIndex = 0; jIndex < numberLines; jIndex += 1) {
    pixel[kIndex] = document.createElement("div");
    pixel[kIndex].className = "pixel";
    linha[index].appendChild(pixel[kIndex]);
    kIndex = kIndex + 1;
  }

}
let color = document.querySelectorAll(".color");
for (let index = 0; index < color.length; index += 1) {
    color[index].addEventListener("click", function(event) {
        let selected = document.querySelector(".selected");

    selected.classList.remove('selected');
    event.target.className += " selected";

})
}
pixelBoard.addEventListener("click", function(event) {
    let selected = document.querySelector(".selected");
    event.target.style.backgroundColor =  window.getComputedStyle(selected).backgroundColor;
  })
  let buttonClear = document.getElementById("clear-board");

buttonClear.addEventListener("click", function(event) {
  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].style.backgroundColor = "white";
  }
})