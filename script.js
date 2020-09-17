let color = document.querySelectorAll("color");
for (let index = 0; index < color.length; index += 1) {
  color[index].addEventListener("click", function (event) {
    let colorSelected = document.querySelector(".selected")

    colorSelected.classList.remove("selected");

    event.target.className += "selected";

  });

}

