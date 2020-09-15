//gerando numeros aleatórios
function gerarNumeros () {
    return Math.floor(Math.random() * 255 +1);
}

//função para criar cor aleatória
function criarCorAleatoria () {
    let R = gerarNumeros();
    let G = gerarNumeros();
    let B = gerarNumeros();
    const RGB = `rgb(${R}, ${G}, ${B})`;
    if (R == 255 && G == 255 && B == 255) { // se R = 255, se G = 255, se B = 255, estarei gerando novos números!
        R = Math.ceil(Math.random() * 255);
        G = Math.ceil(Math.random() * 255);
        B = Math.ceil(Math.random() * 255);
    }
    return RGB
}

//atribuindo cor preto para primeira cor da paleta de cores.
const palleta1 = document.querySelector("#color-1");
palleta1.style.backgroundColor = 'black';
//função para as div pallet 2 3 4
function mudaCorPaleta () {
    const palleta2 = document.querySelector("#color-2");
    const palleta3 = document.querySelector("#color-3");
    const palleta4 = document.querySelector("#color-4");
    palleta2.style.backgroundColor = criarCorAleatoria ();
    palleta3.style.backgroundColor = criarCorAleatoria ();
    palleta4.style.backgroundColor = criarCorAleatoria ();
}

 
let grid = (document.querySelector('#pixel-board'));
//criação do pixel com classe pixel.
function createBox (pixel) {
    let box = document.createElement('div');
    box.className = 'pixel';
    box.style.backgroundColor = 'white';
    return box;
}

window.onload = () => {
    mudaCorPaleta ();
}