function chooseColor(event) {
  const black = document.querySelector(".black");
  const color1 = document.querySelector(".color1");
  const color2 = document.querySelector(".color2");
  const color3 = document.querySelector(".color3");
  const colors = [black, color1, color2, color3];
  colors.forEach((color) => {
    const classes = color.className.split(" ");
    if (classes.length === 3) {
      classes.pop();
      let classe = classes.join(" ");
      color.className = classe;
    }
    if (classes[1] === event.target.className.split(" ")[1]) {
      color.className = `${color.className} selected`;
    }
  });
}
function paintPixel(event) {
  const black = document.querySelector(".black");
  const color1 = document.querySelector(".color1");
  const color2 = document.querySelector(".color2");
  const color3 = document.querySelector(".color3");
  const colors = [black, color1, color2, color3];
  colors.forEach((color) => {
    let classes = color.className.split(" ");
    if (classes.length === 3 && classes[2] === "selected") {
      event.target.style.backgroundColor = color.style.backgroundColor;
    }
  });
}
window.onload = function () {
  const black = document.querySelector(".black");
  const color1 = document.querySelector(".color1");
  const color2 = document.querySelector(".color2");
  const color3 = document.querySelector(".color3");
  const colors = [color1, color2, color3];
  const pixel = document.querySelectorAll(".pixel");

  colors.forEach((color) => {
    let newColor = "#";
    for (let index = 0; index < 3; index += 1) {
      let randNumber = parseInt(255 * Math.random(), 10);
      if (randNumber < 16) {
        newColor = `${newColor}0${randNumber.toString(16)}`;
      } else {
        newColor = `${newColor}${randNumber.toString(16)}`;
      }
    }
    color.style.backgroundColor = newColor;
  });

  black.style.backgroundColor = "black";

  black.addEventListener("click", chooseColor);
  color1.addEventListener("click", chooseColor);
  color2.addEventListener("click", chooseColor);
  color3.addEventListener("click", chooseColor);
  for (let index = 0; index < pixel.length; index += 1) {
    const element = pixel[index];
    element.addEventListener("click", paintPixel);
    // element.style.backgroundColor = "#ffffff";
  }
};
