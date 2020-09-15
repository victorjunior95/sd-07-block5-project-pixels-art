window.onload = function () {
  const numberOfLine = 5;
  const numberOfColumn = 5;

  for (let line = 1; line <= numberOfLine; line += 1) {
    const divLine = document.createElement('div');
    divLine.className = 'tr';
    document.getElementById('pixel-board').appendChild(divLine);

    for (let column = 1; column <= numberOfColumn; column += 1) {
      const divColumn = document.createElement('div');
      divColumn.className = 'pixel td';
      divLine.appendChild(divColumn);
    }
  }

  let getDiv = document.querySelector('.color1');
  let attribute = getDiv.getAttribute('class')
  getDiv.className = `${attribute} selected`;
};

