function quadroPixels() {
  for (let i = 0; i < 25; i += 1) {
    const quadro = document.getElementById('pixel-board');
    const divQuadro = document.createElement('div');
    divQuadro.id = `pixel${i + 1}`;
    divQuadro.className = 'pixel';
    quadro.appendChild(divQuadro);
  }
}

quadroPixels();

const selectedColorBlack = document.getElementById('color1');
const selectedColorRed = document.getElementById('color2');
const selectedColorGreen = document.getElementById('color3');
const selectedColorYellow = document.getElementById('color4');

function removeSelected() {
  selectedColorBlack.classList.remove('selected');
  selectedColorRed.classList.remove('selected');
  selectedColorGreen.classList.remove('selected');
  selectedColorYellow.classList.remove('selected');
}

selectedColorBlack.addEventListener('click', function () {
  alert('black');

  removeSelected();
  selectedColorBlack.classList.add('selected');
});

selectedColorRed.addEventListener('click', function () {
  alert('vermelha');

  removeSelected();
  selectedColorRed.classList.add('selected');
});

selectedColorGreen.addEventListener('click', function () {
  alert('verde');

  removeSelected();
  selectedColorGreen.classList.add('selected');
});

selectedColorYellow.addEventListener('click', function () {
  alert('yellow');

  removeSelected();
  selectedColorYellow.classList.add('selected');
});

const btn = document.getElementById('clear-board');
btn.addEventListener('click', function () {
  for (let i = 0; i < 25; i += 1) {
    const divQuadro = document.getElementById(`pixel${i + 1}`);
    divQuadro.style.backgroundColor = 'rgb(255, 0, 0)';
  }
});
