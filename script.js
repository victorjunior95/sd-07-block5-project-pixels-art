// Save the selected color
let selectedColorRGB = '';

// function to apply selected class to color pallet
function applySelectedClass(colorElement) {
    // Apply the class selected
    colorElement.className = colorElement.className + " selected";

    // Save color selected
    selectedColorRGB = getComputedStyle(colorElement).getPropertyValue('background-color');
}

// function to remove the class selected of all pallet
function removeSelectedClass() {
    // For each color Pallet 
    document.querySelectorAll('.color').forEach(item => {
        // remove class selected
        item.className = item.className.replace('selected','');
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

// Execute function to select the first color pallet
applySelectedClass(document.querySelector(".color"));

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


