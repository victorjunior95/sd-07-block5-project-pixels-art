let initialColor = document.querySelector("#blackColor");
let red = document.getElementById("redColor");
let blue = document.getElementById("blueColor");
let green = document.getElementById("greenColor");
let clear = document.getElementById("clear-board");
let board = [];

window.onload = inicio;

function inicio() {
  for (let i = 1; i <= 25; i += 1) {
    board[i] = document.querySelector("#px" + [i]);
    board[i].addEventListener("click", function () {
      board[i].style.backgroundColor = "black";
    });
  }
}
