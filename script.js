window.onload = function() {
  const numberOfLine = 5;
  const numberOfColumn = 5;

  for (let line = 1; line <= numberOfLine; line += 1) {
    let divLine = document.createElement('div');
    divLine.className = 'tr';
    document.getElementById('pixel-board').appendChild(divLine);

    for (let column = 1; column <= numberOfColumn; column += 1 ) {
      let divColumn = document.createElement('div')
      divColumn.className = 'pixel td';
      divLine.appendChild(divColumn);
    }
  }
}
