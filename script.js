let whiteBoard = document.querySelector("#pixel-board");
let pixels = document.querySelectorAll(".pixel");
let colors = document.querySelectorAll(".color");
let selectedColor = "black";

function updateColor(){
    for (let index in colors){
       if(colors[index].classList.contains("selected")){
        colors[index].classList.remove("selected");
       } 
    }
}

//selects color
for (let index of colors){
    index.addEventListener("click", function(){
        updateColor();
        let selectedColor = event.target.getAttribute("id");
        event.target.classList.add("selected");
    })
}

//paints pixels
function pixelCasso(){
    let selected = event.target;
    switch (selectedColor) {
        case "blue": 
        selected.classList.remove("white");
        selected.classList.add("red");
        break;
        case "red":
        selected.classList.remove("white");
        selected.classList.add("blue");
        break;
        case "green":
        selected.classList.remove("white");
        selected.classList.add("green");
        break;
        default:
        selected.classList.remove("white");
        selected.classList.add("black");
    }
}

for (let index2 of pixels){
    index2.addEventListener("click", pixelCasso);
}