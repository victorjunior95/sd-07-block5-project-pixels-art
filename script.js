let selected = document.getElementById('selected')

let pixel = document.querySelector('td');

pixel.addEventListener('click', coloring);

function coloring() {
  pixel.style.backgroundColor = selected.style.backgroundColor;
}
