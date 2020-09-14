let mouse;
let colorPicked = document.querySelector(".selected");

window.onload = function () {
  mouse = window
    .getComputedStyle(colorPicked, null)
    .getPropertyValue("background-color");
};

//----------------------------------------------------------------------------

document.addEventListener(
  "click",
  function (event) {
    if (event.target.classList.contains("black")) {
      colorPicked.classList.remove("selected");
      event.target.classList.add("selected");
      colorPicked = event.target;
      mouse = window
        .getComputedStyle(colorPicked, null)
        .getPropertyValue("background-color");
    } else if (event.target.classList.contains("red")) {
      colorPicked.classList.remove("selected");
      event.target.classList.add("selected");
      colorPicked = event.target;
      mouse = window
        .getComputedStyle(colorPicked, null)
        .getPropertyValue("background-color");
    } else if (event.target.classList.contains("blue")) {
      colorPicked.classList.remove("selected");
      event.target.classList.add("selected");
      colorPicked = event.target;
      mouse = window
        .getComputedStyle(colorPicked, null)
        .getPropertyValue("background-color");
    } else if (event.target.classList.contains("green")) {
      colorPicked.classList.remove("selected");
      event.target.classList.add("selected");
      colorPicked = event.target;
      mouse = window
        .getComputedStyle(colorPicked, null)
        .getPropertyValue("background-color");
    }
  },
  false
);

//------------------------------------------------------------------------------
//FAZ A MESMA COISA QUE O BLOCO ANTERIOR, MAS SEM EVENT BUBBLING

// let blackPixel = document.querySelector(".black");
// let redPixel = document.querySelector(".red");
// let bluePixel = document.querySelector(".blue");
// let greenPixel = document.querySelector(".green");

// blackPixel.addEventListener("click", function () {
//   colorPicked.classList.remove("selected");
//   blackPixel.classList.add("selected");
//   colorPicked = document.querySelector(".selected");
//   mouse = window
//     .getComputedStyle(colorPicked, null)
//     .getPropertyValue("background-color");
// });

// redPixel.addEventListener("click", function () {
//   colorPicked.classList.remove("selected");
//   redPixel.classList.add("selected");
//   colorPicked = document.querySelector(".selected");
//   mouse = window
//     .getComputedStyle(colorPicked, null)
//     .getPropertyValue("background-color");
// });

// bluePixel.addEventListener("click", function () {
//   colorPicked.classList.remove("selected");
//   bluePixel.classList.add("selected");
//   colorPicked = document.querySelector(".selected");
//   mouse = window
//     .getComputedStyle(colorPicked, null)
//     .getPropertyValue("background-color");
// });

// greenPixel.addEventListener("click", function () {
//   colorPicked.classList.remove("selected");
//   greenPixel.classList.add("selected");
//   colorPicked = document.querySelector(".selected");
//   mouse = window
//     .getComputedStyle(colorPicked, null)
//     .getPropertyValue("background-color");
// });

//----------------------------------------------------------------------------------

document.addEventListener(
  "click",
  function (event) {
    if (event.target.classList.contains("pixel")) {
      event.target.style.backgroundColor = mouse;
    }
  },
  false
);

//---------------------------------------------------------------------------------

let pixels = document.querySelectorAll(".pixel");
let button = document.querySelector("#clear-board");

button.addEventListener("click", function () {
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = "white";
  }
});
