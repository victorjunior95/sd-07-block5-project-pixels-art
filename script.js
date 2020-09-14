let color = document.querySelector(".selected");
let colorPalette = document.querySelectorAll(".color");

function selectColorPalette (){
    for(let index = 0; index < colorPalette.length; index += 1){
        colorPalette[index].addEventListener("click", function(){
            color.classList.remove("selected")
            colorPalette[index].classList.add("selected");
            color = colorPalette[index];
        });
    }
}

selectColorPalette();