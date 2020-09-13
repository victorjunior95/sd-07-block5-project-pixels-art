window.onload = function() {
  let paletaCores = ['black', 'red', 'green', 'blue'];

  const divColor = document.querySelectorAll(".color")

  for (let index = 0 ; index < divColor.length ; index += 1) {
    divColor[index].style.backgroundColor = paletaCores[index];
  }
}
  