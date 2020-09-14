let pixel = document.getElementsByClassName("pixel");
let selectedColor = document.getElementsByClassName("selected")[0].style;

for (let index in pixel) {
    pixel[index].addEventListener("click", function () {
        //pixel[index].style.backgroundColor = selectedColor[0].backgroundColor;
        console.log(selectedColor);
    })
}