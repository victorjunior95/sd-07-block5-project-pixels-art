let palette = document.querySelector("#color-palette");

function colorsPalette(numberLine, numberColumn) {
    let count = 0;
    for (let indexLine = 0; indexLine < numberLine; indexLine += 1) {
    let line = document.createElement("div");
    line.id = `line${indexLine + 1}`;
    line.className = "display-inline";
    palette.appendChild(line);
    for (let indexColumn = 0; indexColumn < numberColumn; indexColumn += 1) {
      count += 1;
      let column = document.createElement("div");
      column.id = `box${count}`;
      column.className = `box-color display-block color${count}`;
      line.appendChild(column);
    }
  }
}


colorsPalette(4, 14);