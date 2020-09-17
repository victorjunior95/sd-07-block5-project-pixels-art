let color = document.querySelectorAll(".color");

for (let index = 0; index < color.length; index += 1) {
  color[index].addEventListener("click", function (event) {
    let colorSelected = document.querySelector(".selected");

    colorSelected.classList.remove("selected");

    color[index].classList.add("selected");
  });
}

let pixelContainer = document.getElementById("pixel-board");

pixelContainer.addEventListener("click", function (event) {
  let colorSelected = document.querySelector(".selected");

  event.target.style.backgroundColor = window.getComputedStyle(
    colorSelected
  ).backgroundColor;
});

let clear = document.getElementsById("clear-board");

clear.addEventListener("click", function () {
  for (let index = 0; index < pixel.length; index += 1) {
    pixel[i].style.backgroundColor = "white";
  }
});
