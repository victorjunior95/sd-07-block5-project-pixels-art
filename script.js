window.onload = function (){
  let boardpixel = 5;
  fillBoard(boardpixel);

function fillBoard(boardpixel) {
  let board = document.getElementById("pixel-board");
  for(let lines = 0; lines < boardpixel; lines += 1) {
    let pixelLine = document.createElement("div");
    pixelLine.className = 'pixelLine';
    board.appendChild(pixelLine);
      for (let column = 0; column < boardpixel; column += 1) {
          let pixel = document.createElement("div");
          pixel.className = 'pixel';
          pixelLine.appendChild(pixel);
      }
  }
}
}
