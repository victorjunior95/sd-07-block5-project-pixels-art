let initialColor = document.getElementsByClassName("color");

for (let index = 0; index < initialColor.length; index += 1) {
  initialColor[i].addEventListener("click", function (event) {
    let colorSelected = document.getElementsByClassName("selected");

    colorSelected.classList.remove("selected");

    event.target.className += "selected";
  });
}
