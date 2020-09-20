const colorPalette = document.querySelector('#color-palette')

let colorSelected = 'black'

let r
let g
let b

window.onload = function palette() {
	const color = document.createElement('div')
	color.setAttribute('id', 'corPreta')
	color.setAttribute('class', 'color selected')
	document.querySelector('#color-palette').appendChild(color)
	color.style.backgroundColor = 'black'
	color.addEventListener('click', function(select){
		colorSelected = color.style.backgroundColor
		let selected = document.querySelector(".selected");
		selected.classList.remove('selected');
		select.target.className += " selected";
		console.log(colorSelected)
	})
	for (let row = 0; row < 3; row += 1) {
		if (color.id === 'corPreta') {
			r = Math.floor(Math.random() * 256);
  			g = Math.floor(Math.random() * 256);
			b = Math.floor(Math.random() * 256);
			const color = document.createElement('div')
			color.setAttribute('id', 'color')
			color.setAttribute('class', 'color')
			document.querySelector('#color-palette').appendChild(color)
			color.style.backgroundColor = 'rgb(' + r + ', ' + g + ', ' + b + ')'
			color.addEventListener('click', function(select){
				colorSelected = color.style.backgroundColor
				let selected = document.querySelector(".selected");
				selected.classList.remove('selected');
				select.target.className += " selected";
				console.log(colorSelected)
			})
		}
	}
	generatePixelBoard()
}

const pixelBoard = document.querySelector('#pixel-board')
const wholeBoard = document.querySelector('#whole-board')
const generateBoard = document.querySelector('#generate-board')

let i = 0
let rowMax = 5
let columnMax = 5
generateBoard.addEventListener('click', function () {
	const boardSize = document.querySelector('#board-size').value
	boardSizeN = Number(boardSize)
	if (boardSizeN > 7 || boardSizeN <= 2) {
		window.alert('Board Inválido!')
	} else {
		rowMax = boardSizeN
		columnMax = boardSizeN
		removePixelBoard()
		generatePixelBoard()
	}
})

function generatePixelBoard() {
	for (let row = 0; row < rowMax; row += 1) {
		const pixelRow = document.createElement('div')
		pixelRow.setAttribute('id', 'pixel-row' + i)
		pixelRow.setAttribute('class', 'pixel-row')
		document.querySelector('#pixel-board').appendChild(pixelRow)
		for (let column = 0; column < columnMax; column += 1) {
			const pixel = document.createElement('div')
			pixel.setAttribute('id', 'pixel')
			pixel.setAttribute('class', 'pixel')
			pixel.style.backgroundColor = 'white'
			document.querySelector('#pixel-row' + i).appendChild(pixel)
			pixel.addEventListener('click', function() {
				pixel.style.backgroundColor = colorSelected
			})
		}
		i += 1
	}
}

function removePixelBoard() {
	while (pixelBoard.firstChild) {
	  pixelBoard.removeChild(pixelBoard.firstChild);
	}
}

const clearBoard = document.querySelector('#clear-board')
clearBoard.addEventListener('click', function() {
	let pixel = document.getElementsByClassName('pixel')
	console.log(pixel)
	for (let i = 0; i < pixel.length; i += 1)  {
		pixel[i].style.backgroundColor = 'white'
	}
})
