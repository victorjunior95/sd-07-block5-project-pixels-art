let color = document.querySelectorAll(".color");

for (let index = 0; index < color.length; index += 1) {
  color[index].addEventListener("click", function (event) {
    let colorSelected = document.querySelector(".selected");

    colorSelected.classList.remove("selected");

    color[index].classList.add("selected");
  });
}

let pixelContainer = document.querySelectorAll(".pixel");
console.log(pixelContainer)
for(let index = 0; index < pixelContainer.length; index += 1){
pixelContainer[index].addEventListener("click", function (event) {
  let colorSelected = document.querySelector(".selected");

  event.target.style.backgroundColor = window.getComputedStyle(
    colorSelected
  ).backgroundColor;
});
}

let clear = document.getElementById("clear-board");

clear.addEventListener("click", function () {
  for (let index = 0; index < pixelContainer.length; index += 1) {
    pixelContainer[index].style.backgroundColor = "white";
  }
});
