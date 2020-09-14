let initialColor = document.querySelector(".selected");
let red = document.getElemenquerySelector;
let blue = document.getElementById("blueColor");
let green = document.getElementById("greenColor");
let clear = document.getElementById("clear-board");
let box = [];

window.onload = start;

function start() {
  for (let index = 1; index <= 25; index += 1) {
    box[index] = document.querySelector("#px" + [index]);
    box[index].addEventListener("click", function () {
      box[index].style.backgroundColor = "black";
    });
  }
}
