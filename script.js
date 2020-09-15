window.onload = function() {
    let base = 5;
    let numberOfLines = (base + 1) / 2; // 5
    let controlLeft = numberOfLines; // 5
    let controlRight = numberOfLines; // 5
    let lines = document.querySelectorAll(".pixel");
  
      
    fill(lines);
    
   
    
  
    // Passa por todos as linhas (div com class line) e preenche o triangulo
    function fill(lines) {
      for(let index = 0; index < lines.length; index += 1) {
        fillLine(lines[index]);
        controlRight += 1;
        controlLeft -= 1;
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
      for (let lineColumn = 1; lineColumn <= base; lineColumn += 1) {
        if(lineColumn >= controlLeft && lineColumn <= controlRight) {
          let box = createBox("box");
          divLine.appendChild(box);
        }
        else{
          let box = createBox("box");
          divLine.appendChild(box);

        }
      }
    }
  }

  function colorir(){

    console.log('coloriu')
   // document.getElementById();


}