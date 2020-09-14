function chooseColor(event) {
  let black = document.querySelector('.black');
  let color1 = document.querySelector('.color1');
  let color2 = document.querySelector('.color2');
  let color3 = document.querySelector('.color3');
  let colors = [black, color1, color2, color3];
  colors.forEach((color) => {
    let classes = color.className.split(' ');
    if (classes.length === 3) {
      classes.pop();
      let classe = classes.join(' ');
      color.className = classe;
    }
    if (classes[1] === event.target.className.split(' ')[1]) {
      color.className = `${color.className} selected`;
    }
  });
}
function paintPixel(event) {
  let black = document.querySelector('.black');
  let color1 = document.querySelector('.color1');
  let color2 = document.querySelector('.color2');
  let color3 = document.querySelector('.color3');
  let colors = [black, color1, color2, color3];
  colors.forEach((color) => {
    let classes = color.className.split(' ');
    if (classes.length === 3) {
      event.target.style.backgroundColor = color.style.backgroundColor;
    }
  });
}
window.onload = function () {
  let black = document.querySelector('.black');
  let color1 = document.querySelector('.color1');
  let color2 = document.querySelector('.color2');
  let color3 = document.querySelector('.color3');
  let colors = [color1, color2, color3];
  let pixel = document.querySelectorAll('.pixel');

  colors.forEach((color) => {
    let newColor = '#';
    for (let index = 0; index < 3; index += 1) {
      newColor = `${newColor}${parseInt(255 * Math.random()).toString(16)}`;
    }
    color.style.backgroundColor = newColor;
  });
  console.log(parseInt(255 * Math.random()));

  black.style.backgroundColor = 'black';
  console.log(black.style.backgroundColor);

  black.addEventListener('click', chooseColor);
  color1.addEventListener('click', chooseColor);
  color2.addEventListener('click', chooseColor);
  color3.addEventListener('click', chooseColor);
  for (let index = 0; index < pixel.length; index += 1) {
    const element = pixel[index];
    element.addEventListener('click', paintPixel);
  }
};
