window.onload = function () {
  let arrayColors = document.querySelectorAll(".color");

  arrayColors[0].style.backgroundColor = "black";
  arrayColors[1].style.backgroundColor = "red";
  arrayColors[2].style.backgroundColor = "grey";
  arrayColors[3].style.backgroundColor = "yellow";

  //let selectedColor = arrayColors[0].style.backgroundColor;

  //localStorage.setItem("color", selectedColor)


  let selectedColor = document.querySelectorAll(".color.selected")[0].style.backgroundColor;

  
}