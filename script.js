//Código adaptado de:
//https://github.com/tryber/sd-07-block5-project-pixels-art/pull/55/files
//Colega wberilo
function boardGenerator(value) {
    const board = document.getElementById('pixel-board');
    for (let indexL = 0; indexL < value; indexL += 1) {
      const line = document.createElement('div');
      for (let indexC = 0; indexC < value; indexC += 1) {
        const pixel = document.createElement('div');
        pixel.className = 'pixel';
        pixel.id = 'pixel';
        line.appendChild(pixel);
      }
      board.appendChild(line);
    }
  }

boardGenerator(5);