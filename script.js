window.onload = function() {
    let baseSquare = 5;
    let numberOfLines = baseSquare; // 5
    let controlPosition = numberOfLines; // 5
    let lines = document.querySelectorAll(".pixel");
  
    fillSquare(lines);
    
    // Passa por todos as linhas (div com class line) e preenche o triangulo
    function fillSquare(lines) {
      for(let index = 0; index <= lines.length; index += 1) {
        fillLine(lines[index]);
        controlPosition += 1;
      }
    }
    // Cria uma caixa com base nas diferentes classes
    function createBox(className) {
      let box = document.createElement("div");
      box.className = className;
      return box;
    }
    // Preenche uma linha
    function fillLine(divLine) {
      for (let lineColumn = 1; lineColumn < baseSquare; lineColumn += 1) {
        if(lineColumn <= controlPosition) {
          let box = createBox("box");
          divLine.appendChild(box);
        }
      }
    }
  }