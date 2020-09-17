let color = document.querySelectorAll(".color");

for (let index = 0; index < color.length; index += 1) {
  color[index].addEventListener("click", function (event) {
    let colorSelected = document.querySelector(".selected");

    colorSelected.classList.remove("selected");

    color[index].classList.add("selected");

  });
}

let pixel = document.querySelectorAll(".pixel");

for (let index = 0; index < pixel.length; index += 1) {
  let colorSelected = document.querySelectorAll(".selected");
pixel[index].style.backgroundColor = window.getComputedStyle(colorSelected).backgroundColor;
}
