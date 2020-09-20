let paintColor;
let selectColors = document.querySelectorAll(".color");

for (let i of selectColors) {
    i.addEventListener("click", function() {
        paintColor = i.innerText.toLowerCase();
        console.log(paintColor);
    })
}