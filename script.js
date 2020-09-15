let pixels = document.getElementsByClassName("pixel");

// Looping para adicionar Event Listener em todos os pixels
for (let index in pixels) {
    pixels[index].addEventListener("click", paintPixel);
}

// Função para pintar o pixel
function paintPixel() {
    let selectedColor = document.getElementsByClassName("selected")[0];
    this.style.backgroundColor = getComputedStyle(selectedColor).backgroundColor;
}

// Trocar de cor
// let seletorDeCores = document.getElementsByClassName("color");
// for (let index in seletorDeCores) {
//     seletorDeCores[index].addEventListener("click", function () {
//         console.log("Cor selecionada");
//     })
// }