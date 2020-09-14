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
