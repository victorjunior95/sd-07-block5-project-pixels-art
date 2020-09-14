document.getElementById('color-palette').addEventListener("click", function(event) {
  if (event.target.classList.contains('selected')) {
    alert('Esta cor já está selecionada')
  } else {
    let paints = document.querySelectorAll('.color')
    for (let index = 0; index < paints.length; index++) {
      paints[index].classList.remove('selected')
    }
    event.target.classList.add('selected')
  }
})

document.getElementById('pixel-board').addEventListener('click', function(event) {
  if (event.target.classList.contains('pixel')) {
    let selectedColor = document.querySelectorAll('.selected')[0]
    let colorToUse = window.getComputedStyle(selectedColor, null).getPropertyValue("background-color")
    event.target.style.backgroundColor = colorToUse
  }
})
