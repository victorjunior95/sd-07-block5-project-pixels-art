// Função que cria o quadro de pixels
function createPixelsBoard(number) {
  let count = 0;
  let board = document.querySelector("#pixel-board");
  board.className = "pixels-board";
  for (let indexLine = 0; indexLine < number; indexLine +=1) {
    let line = document.createElement("div");
    line.id = `line${indexLine + 1}`;
    line.className = "line-display"
    board.appendChild(line);
    for (let indexColumn = 0; indexColumn < number; indexColumn +=1){
      count += 1;
      let column = document.createElement("div");
      column.id = `pixel${count}`;
      column.className = "pixel column-display";  
      line.appendChild(column);
    }
  }
}

// Predefinições ao carregar a página
window.onload = function() {
  createPixelsBoard(5);
}