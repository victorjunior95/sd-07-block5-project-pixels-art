const colorPalette = document.querySelector('#color-palette')

let colorSelected

let r
let g
let b

window.onload = function palette() {
	const color = document.createElement('div')
	color.setAttribute('id', 'corPreta')
	color.setAttribute('class', 'color')
	document.querySelector('#color-palette').appendChild(color)
	color.style.backgroundColor = 'black'
	color.addEventListener('click', function(){
		colorSelected = color.style.backgroundColor
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
			color.addEventListener('click', function(){
				colorSelected = color.style.backgroundColor
				console.log(colorSelected)
			})
		}
	}
}


