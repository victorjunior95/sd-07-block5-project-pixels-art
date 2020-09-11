const color1 = document.querySelector('#color-1');
const color2 = document.querySelector('#color-2');
const color3 = document.querySelector('#color-3');
const color4 = document.querySelector('#color-4');


function colorGeneration () {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);
  let rgb = `rgb(${red}, ${green}, ${blue})`;
  return rgb;
}

color2.style.backgroundColor = colorGeneration();
color3.style.backgroundColor = colorGeneration();
color4.style.backgroundColor = colorGeneration();
