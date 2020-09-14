const linesCols = 5;
const divPixelBoard = document.getElementById("pixel-board");

function createLines(numberOfLines) {
  for (let lines = 1; lines <= numberOfLines; lines += 1) {
    let line = document.createElement("div");
    line.id = `line ${lines}`;
    line.className = 'line';
    divPixelBoard.appendChild(line);
  }
}

function fillLinesWithPixels(numberOfPixels) {
  for (let lines = 1; lines <= numberOfPixels; lines += 1) {
    for (let pixels = 1; pixels <= numberOfPixels; pixels += 1) {
      let pixel = document.createElement("div");
      pixel.className = "pixel";
      let line = document.getElementById(`line ${pixels}`);
      line.appendChild(pixel);
    }
  }
}

createLines(linesCols);
fillLinesWithPixels(linesCols);
