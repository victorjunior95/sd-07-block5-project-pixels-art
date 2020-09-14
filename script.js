window.onload = function () {
  let arrayColors = document.querySelectorAll(".color");

  arrayColors[0].style.backgroundColor = "black";
  arrayColors[1].style.backgroundColor = "red";
  arrayColors[2].style.backgroundColor = "grey";
  arrayColors[3].style.backgroundColor = "yellow";

  let selectedColor = document.querySelectorAll(".color.selected")[0].style.backgroundColor;

  for (let index = 0; index < arrayColors.length; index += 1) {
    if (index == 0) {
      arrayColors[index].addEventListener('click', function () {
        this.selectedColor = arrayColors[index].style.backgroundColor;
        arrayColors[index].classList.add("selected")
        for (let index = 0; index < arrayColors.length; index++) {
          if (index != 0) {
            arrayColors[index].classList.remove("selected");
          }
        }
      })
    } else if (index == 1) {
      arrayColors[index].addEventListener('click', function () {
        selectedColor = arrayColors[1].style.backgroundColor;
        arrayColors[index].classList.add("selected")
        for (let index = 0; index < arrayColors.length; index++) {
          if (index != 1) {
            arrayColors[index].classList.remove("selected");
          }
        }
      })
    } else if (index == 2) {
      arrayColors[index].addEventListener('click', function () {
        selectedColor = arrayColors[2].style.backgroundColor;
        arrayColors[index].classList.add("selected");
        for (let index = 0; index < arrayColors.length; index++) {
          if (index != 2) {
            arrayColors[index].classList.remove("selected");
          }
        }
      })
    } else {
      arrayColors[index].addEventListener('click', function () {
        selectedColor = arrayColors[3].style.backgroundColor;
        arrayColors[index].classList.add("selected");
        for (let index = 0; index < arrayColors.length; index++) {
          if (index != 3) {
            arrayColors[index].classList.remove("selected");
          }
        }
      })
    }
  }




}
