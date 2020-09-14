function chooseColor(event) {
  let black = document.querySelector(".black");
  let red = document.querySelector(".red");
  let green = document.querySelector(".green");
  let blue = document.querySelector(".blue");
  let colors = [black, red, green, blue];
  colors.forEach((color) => {
    let classes = color.className.split(" ");
    if (classes.length === 3) {
      classes.pop();
      let classe = classes.join(" ");
      color.className = classe;
    }
    if (classes[1] === event.target.className.split(" ")[1]) {
      color.className = `${color.className} selected`;
    }
  });
  colors.forEach((color) => {
    console.log(color.className);
  });
}
function paintPixel(event) {
  event.target.style.backgroundColor = "black"
}
window.onload = function () {
  let black = document.querySelector(".black");
  let red = document.querySelector(".red");
  let green = document.querySelector(".green");
  let blue = document.querySelector(".blue");
  let pixel = document.querySelectorAll(".pixel");
  let selectedColor = "black";

  black.addEventListener("click", chooseColor);
  red.addEventListener("click", chooseColor);
  green.addEventListener("click", chooseColor);
  blue.addEventListener("click", chooseColor);
  for (let index = 0; index < pixel.length; index += 1) {
    const element = pixel[index];
    element.addEventListener("click", paintPixel);
  }
};
