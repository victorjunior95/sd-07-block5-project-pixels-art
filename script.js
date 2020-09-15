const quadro = document.getElementById("pixel-board");
const pixels = document.getElementByClassName("pixel");
const botaoTamanhoQuadro = document.getElementById("generate-board");
const TamanhoQuadro = document.getElementById("board-size");
const botaoLimpar = document.getElementById("botao-limpar");
const preto = document.getElementById("preto");
const cor1 = document.getElementById("cor1");
const cor2 = document.getElementById("cor2");
const cor3 = document.getElementById("cor3");

// Gerando o quadro
criarMatrizAlt(5);
function criarMatriz(n){ 
    construcao = Array(n)
        .fill(undefined);
    for (const i in construcao){ 
        construcao[i] = Array(n).fill(<div classe = "pixel"></div>);
    }
    quadro.innerHTML= construcao;
}

// Gerando quadro do tamanho solicitado
let TamanhoQuadro = "";
botaoTamanhoQuadro.addElementEvent("click", function () {
    if (TamanhoQuadro == ""){ alert(Board inválido!)}
    if (TamanhoQuadro < 5){TamanhoQuadro = 5};
    if (TamanhoQuadro > 50){TamanhoQuadro = 50};
    criarMatrizAlt(TamanhoQuadro);
});

// Gerando cores aleatóriamente
let cores = [];
for (let index = 0; index < 2; index +=1){
    cores[index] = getRandomColor();
}
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = "#";
    while (color == "#" || color == "#FFFFFF" || color == "#000000" || color == cores[0] || color == cores[1]) {
        color = "#";
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
    }
    return color;
}

// Mostrando a paleta de cores
cor1.style.backgroundColor = cores[0];
cor2.style.backgrundColor = cores[1];
cor3.style.backgrundColor = cores[2];

// Definindo a cor selecionada
let corSelecionada = preto;
preto.addElementEvent("click", function () {
    corSelecionada.classList.remove("selected");
    corSelecionada = preto;
    preto.classList.add("selected");
});
cor1.addElementEvent("click", function () {
    corSelecionada.classList.remove("selected");
    corSelecionada = cor1;
    cor1.classList.add("selected");
});
cor2.addElementEvent("click", function () {
    corSelecionada.classList.remove("selected");
    corSelecionada = cor2;
    cor2.classList.add("selected");
});
cor3.addElementEvent("click", function () {
    corSelecionada.classList.remove("selected");
    corSelecionada = cor3;
    cor3.classList.add("selected");
});

// Colorindo os pixels
document.querySelectorAll("pixel").forEach(item => {
    item.addEventListener('click', event => {
        item.style.color = window.getComputedStyle(corSelecionada, null).getPropertyValue("background-color");
    })
});

// Funcao de limpar o quadro
botaoLimpar.addElementEvent("click", function () {
    pixels.style.color = white;
});

