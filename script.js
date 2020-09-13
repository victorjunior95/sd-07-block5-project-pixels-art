window.onload = function () {
  function generateRandom () {
    let firstNumber = Math.ceil(Math.random() * 255);
    let secondNumber = Math.ceil(Math.random() * 255);
    let thirdNumber = Math.ceil(Math.random() * 255);

    let colorNumber = `rgb(${firstNumber}, ${secondNumber}, ${thirdNumber})`;
    return colorNumber
  }
  // Define color-pallete variables
  let colorOne = document.getElementsByClassName('color')[0];
  let colorTwo= document.getElementsByClassName('color')[1];
  let colorThree = document.getElementsByClassName('color')[2];
  let colorFour = document.getElementsByClassName('color')[3];
  let clearButton = document.getElementById('clear-board');

  colorOne.style.backgroundColor = 'black'
  colorTwo.style.backgroundColor = generateRandom()
  colorThree.style.backgroundColor = generateRandom()
  colorFour.style.backgroundColor = generateRandom()

  // Define selected color with color selected class
  let selectedColor = document.getElementsByClassName('color selected');
  let pixelBoard = document.getElementById('pixel-board');
  let generateTable = document.getElementById('generate-board');
  let boardSizeInput = document.getElementById('board-size')

  // Array of all elements with class color
  let paletteSelection = document.getElementsByClassName('color');


  // Array of all elements in the pixel board
  let pixelSelection = document.getElementsByClassName('pixel');

  // Loop to AddEventListener to all elements in color palette
  for (let item = 0; item < paletteSelection.length; item += 1) {
    paletteSelection[item].addEventListener('click', selectColor);
    console.log(paletteSelection)
  }

  clearButton.addEventListener('click', function () {
    for (let box = 0; box < pixelSelection.length; box += 1) {
      pixelSelection[box].style.backgroundColor = 'white'
    }
  })

  generateTable.addEventListener('click', function () {
    removeTable()
    let newBody = document.createElement('tbody')
    pixelBoard.appendChild(newBody)
    let size = boardSizeInput.value
    if (size === "") {
      alert('Board inválido!')
    } else if (size < 5) {
      size = 5
    } else if (size > 50) {
      size = 50
    }
    for (let row = 1; row <= size; row += 1) {
      let newRow = document.createElement('tr');
      newBody.appendChild(newRow)
      for (i = 1; i <= size; i += 1) {
        let newBox = document.createElement('td')
        newBox.className = 'pixel'
        newRow.appendChild(newBox)
      }
    }
    eventListenerNewPixels()
  })

  // Loop to AddEventListener to all elements in the pixel board
  for (let pixel = 0; pixel < pixelSelection.length; pixel += 1) {
    let pixelBox = pixelSelection[pixel];
    pixelBox.addEventListener('click', fillColor);
  }

  // Function that pick a color (chosen element is tagged with a color selected class while previous selected color is changed to a color class name)
  function selectColor(event) {
    selectedColor[0].className = 'color';
    event.target.className = 'color selected';
  }

  // function that fills a pixel and changes its background color to the selected one.
  function fillColor(event) {
    let color = selectedColor[0].style.backgroundColor;
    console.log(color)
    event.target.style.backgroundColor = color;
  }

  // remove tabela
  function removeTable () {
    tableContent = document.getElementsByTagName('tbody')[0]
    pixelBoard.removeChild(tableContent)
  }

  function eventListenerNewPixels () {
    for (let pixel = 0; pixel < pixelSelection.length; pixel += 1) {
      let pixelBox = pixelSelection[pixel];
      pixelBox.addEventListener('click', fillColor);
    }
  }
}






























