let selectedColor = document.getElementById("black-index");
document.querySelectorAll(".color").forEach(clickConfigure);
function clickConfigure(item) {
  item.addEventListener("click", function () {
    document.querySelectorAll(".color").forEach(changeClass);
    item.classList.add("selected");
    selectedColor = item;
  });
}

let button = document.getElementById("clear-board");
button.addEventListener("click", function () {
  let pixel = document.querySelectorAll(".pixel");
  pixel.style.backgroundColor = "white";
});
