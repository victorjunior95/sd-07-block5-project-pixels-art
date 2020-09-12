// Save the selected color
let selectedColorRGB = '';

// function to apply selected class to color pallet
function applySelectedClass(colorElement) {
    // Apply the class selected
    colorElement.className = colorElement.className + ' selected';

    // Save color selected
    selectedColorRGB = getComputedStyle(colorElement).getPropertyValue('background-color');
}

// function to remove the class selected of all pallet
function removeSelectedClass() {
    // For each color Pallet 
    document.querySelectorAll('.color').forEach(item => {
        // remove class selected
        item.className = item.className.replace(' selected','');
    });
}

// function to change the selected color pallet
function changeSelectedColorPallet(event) {
    // remove selected class of all colors pallet
    removeSelectedClass();

    // appĺy selected class on target 
    applySelectedClass(document.getElementById(event.target.id));
}

// Function to apply the saved color in a pixel
function applyBackgroundColor(event) {
    event.target.style.backgroundColor = selectedColorRGB;
}

// Function clear-board - set all pixels with background white
function clearBoard(){
    // For each pixel 
    document.querySelectorAll('.pixel').forEach(item => {
        // apply background color = white
        item.style.backgroundColor ='rgb(255, 255, 255)';
    });
}

// Function that generate the pixel board
function generateBoard() {
    // Get input value
    let sizeBoard = document.getElementById('board-size').value;
    // if size is null, alert the user
    if (sizeBoard == '' || sizeBoard == 0) {
        alert('Board inválido!');
    } else {
        // Adjust to default size 5 >= size <= 50
        if (sizeBoard < 5) {
            sizeBoard = 5;
            document.getElementById('board-size').value = 5;
        }
        if (sizeBoard > 50) {
            sizeBoard = 50;
            document.getElementById('board-size').value = 50;
        }

        // Get the pixel board
        const pixelBoard = document.getElementById('pixel-board');
        // Clear the board
        pixelBoard.innerHTML = '';
        // Create the board
        for (let indexLine = 0; indexLine < sizeBoard; indexLine += 1) {
            // Create the line <div class="board-line">
            let boardLine = document.createElement('div');
            boardLine.className = 'board-line';
            // Create the pixels
            for (let indexPixel = 0; indexPixel < sizeBoard; indexPixel += 1) {
                // Create pixel element  <div class="pixel"></div>
                let pixel = document.createElement('div');
                pixel.className = 'pixel';
                // Assign event applyBackgroundColor
                pixel.addEventListener('click',applyBackgroundColor);
                // Append the pixel to board line
                boardLine.appendChild(pixel);
            }
            // Append the board line to board pixel
            pixelBoard.appendChild(boardLine); 
        }
    }
}

// Execute function to select the first color pallet
applySelectedClass(document.querySelector('.color'));

// Assign the function changeSelectedColorPallet on all colors Pallet
// For each color Pallet 
document.querySelectorAll('.color').forEach(item => {
    // remove class selected
    item.addEventListener('click',changeSelectedColorPallet);
});

// Assign the function applyBackgroundColor on all pixels
// For each pixel 
document.querySelectorAll('.pixel').forEach(item => {
    // assign the function 
    item.addEventListener('click',applyBackgroundColor);
});

// Assign the function clearBoard to button
document.getElementById('clear-board').addEventListener('click',clearBoard);

// Assign the function generateBoard to button
document.getElementById('generate-board').addEventListener('click',generateBoard);
