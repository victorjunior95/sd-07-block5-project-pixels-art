window.onload = function() {
    let numberOfLines = 5
    let lines = document.querySelectorAll(".line");
}

fillSquare(lines);

function fillSquare(lines) {
    for(let index = 0; index < lines.length; index += 1) {
      fillLine(lines[index]);
    }
  }

function createBox(className) {
    let box = document.createElement("div");
    box.className = className;
    return box;
}

function fillLine(divLine) {
    for (let lineColumn = 1; lineColumn <= 5; lineColumn += 1) {
      let box = createBox("box");
      divLine.appendChild(box);
      divLine.appendChild(createBox("box-empty"));
    }
  }
  

