let mouse;
let colorPicked = document.querySelector(".selected");

let blackPixel = document.querySelector(".black");
let redPixel = document.querySelector(".red");
let bluePixel = document.querySelector(".blue");
let greenPixel = document.querySelector(".green");

window.onload = function () {
  mouse = window
    .getComputedStyle(colorPicked, null)
    .getPropertyValue("background-color");
};

//----------------------------------------------------------//

blackPixel.addEventListener("click", function () {
  colorPicked.classList.remove("selected");
  blackPixel.classList.add("selected");
  colorPicked = document.querySelector(".selected");
  mouse = window
    .getComputedStyle(colorPicked, null)
    .getPropertyValue("background-color");
});

redPixel.addEventListener("click", function () {
  colorPicked.classList.remove("selected");
  redPixel.classList.add("selected");
  colorPicked = document.querySelector(".selected");
  mouse = window
    .getComputedStyle(colorPicked, null)
    .getPropertyValue("background-color");
});

bluePixel.addEventListener("click", function () {
  colorPicked.classList.remove("selected");
  bluePixel.classList.add("selected");
  colorPicked = document.querySelector(".selected");
  mouse = window
    .getComputedStyle(colorPicked, null)
    .getPropertyValue("background-color");
});

greenPixel.addEventListener("click", function () {
  colorPicked.classList.remove("selected");
  greenPixel.classList.add("selected");
  colorPicked = document.querySelector(".selected");
  mouse = window
    .getComputedStyle(colorPicked, null)
    .getPropertyValue("background-color");
});

//---------------------------------------------------------------//

let pixel = document.querySelector(".pixel");

pixel.addEventListener("click", function () {
  pixel.style.backgroundColor = mouse;
});
