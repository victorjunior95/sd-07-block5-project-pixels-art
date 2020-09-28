document.getElementById('color-palette').addEventListener('click', function(event) {
  let colors = document.getElementsByClassName('color');
  for (let i = 0; i < colors.length; i += 1) {
      colors[i].classList.remove('selected');
  }
  let selectedColor = event.target;
  selectedColor.classList.add('selected');
  let teste = document.getElementById('color-palette');
  console.log(teste);
})