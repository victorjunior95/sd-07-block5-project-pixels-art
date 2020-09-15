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

let corSelecionada = 'black';
function manipularEventpixel (event) {
    const colorirBox = event.target;
    colorirBox.style.backgroundColor = corSelecionada;
}

let grid = (document.querySelector('#pixel-board')); //variável global
//criação do pixel com classe pixel.
function createBox (pixel) {
    let box = document.createElement('div'); 
    box.className = 'pixel'; //setando classe pixel
    box.style.backgroundColor = 'white'; //linha 44 até 47 estilizando css
    box.style.width = '40px';
    box.style.height = '40px';
    box.style.border = '1px black';
    box.addEventListener('click', manipularEventpixel); //caso clique no box, será chamada função manipularEventpixel
    return box;
}

//criação do grid
function createPixelsBoard(){ 
    const elementCreatedBoard = document.getElementById('pixel-board'); //capturou o elemento acima do grid
    let inputQuantityBoard = document.getElementById('board-size').value; //capturando o valor digitado pelo usuário
    if (inputQuantityBoard < 5 || inputQuantityBoard === undefined || inputQuantityBoard === null
    ){
        inputQuantityBoard = 5; //acertando o valor para 5
        alert('Board Inválido!');
    } else if (inputQuantityBoard > 50) {
        inputQuantityBoard = 50; //acertando o valor para 50
        alert('Board Inválido!');
    }
    const matrixGenerated = inputQuantityBoard * inputQuantityBoard; //para geração de matriz quadrada
    elementCreatedBoard.querySelectorAll('*').forEach((n)=> n.remove()); //aqui estou iterando sobre tudo para remover o grid
    for (let i = 0; i < matrixGenerated; i += 1) {
        elementCreatedBoard.appendChild(createBox('pixel')); //após correção do input do número, a função chamará a função createBox.
    }
}

function botaoCriarGrid () {
    const botaoCriarMatriz = document.querySelector("#generate-board");
    botaoCriarMatriz.addEventListener('click', createPixelsBoard); //caso clique no botão, a função createPixelsBoard será executada.
}

window.onload = () => {
    mudaCorPaleta ();
    createBox ();
    createPixelsBoard();
    botaoCriarGrid ();
    
}