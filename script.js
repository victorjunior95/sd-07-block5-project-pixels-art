let mouse;
let blackPixel = document.querySelector(".selected");
let redPixel = document.querySelector(".red");
let bluePixel = document.querySelector(".blue");
let greenPixel = document.querySelector(".green");

window.onload = function () {
  mouse = window
    .getComputedStyle(blackPixel, null)
    .getPropertyValue("background-color");
};

blackPixel.addEventListener("click", function () {
  mouse = window
    .getComputedStyle(blackPixel, null)
    .getPropertyValue("background-color");
});

redPixel.addEventListener("click", function () {
  mouse = window
    .getComputedStyle(redPixel, null)
    .getPropertyValue("background-color");
});

bluePixel.addEventListener("click", function () {
  mouse = window
    .getComputedStyle(bluePixel, null)
    .getPropertyValue("background-color");
});

greenPixel.addEventListener("click", function () {
  mouse = window
    .getComputedStyle(greenPixel, null)
    .getPropertyValue("background-color");
});




let pixel = document.querySelector(".pixel");

pixel.addEventListener("click", function () {
  pixel.style.backgroundColor = mouse;
});
