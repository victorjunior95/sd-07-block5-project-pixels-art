const tabelaDePixel = document.getElementById('pixel-board')
let pixel = [];
let linha = [];
let numeroDeLinhas = 5
let contaPixel = 0
for (let i = 0; i < numeroDeLinhas; i += 1) {
    linha[i] = document.createElement('div');
    linha[i].className = 'linha';
    tabelaDePixel.appendChild(linha[i])
    for (let j = 0; j < 5; j += 1) {
        pixel[contaPixel] = document.createElement('div');
        pixel[contaPixel].className = 'pixel'
        linha[i].appendChild(pixel[contaPixel]);
        contaPixel += 1;
    }
}
console.log(pixel);
