

const corPreta = document.querySelector('#colorBlack');

window.onload = inicio;

function inicio(){
    for( let i= 1  ; i <= 25 ;i += 1){
        caixaGeral[i] = document.querySelector("#p" + [i]);
        caixaGeral[i].addEventListener("click", function(){
        caixaGeral[i].style.backgroundColor = 'black';
    })   
    
    }
}


const corRed = document.querySelector('#colorRed');
const corGreen = document.querySelector('#colorGreen');
const corBlue = document.querySelector('#colorBlue');



let caixaGeral = []

function preto(){
    for( let i= 1  ; i <= 25 ;i += 1){
        caixaGeral[i] = document.querySelector("#p" + [i]);
        caixaGeral[i].addEventListener("click", function(){
        caixaGeral[i].style.backgroundColor = 'black';
    })   
    
    }
}

function vermelho(){
    for( let i= 1  ; i <= 25 ;i += 1){
        caixaGeral[i] = document.querySelector("#p" + [i]);
        caixaGeral[i].addEventListener("click", function(){
        caixaGeral[i].style.backgroundColor = 'red';
    })   
       
    }
}

function verde(){
    for( let i= 1  ; i <= 25 ;i += 1){
        caixaGeral[i] = document.querySelector("#p" + [i]);
        caixaGeral[i].addEventListener("click", function(){
        caixaGeral[i].style.backgroundColor = 'green';
    })   
       
    }
}

function azul(){
    for( let i= 1  ; i <= 25 ;i += 1){
        caixaGeral[i] = document.querySelector("#p" + [i]);
        caixaGeral[i].addEventListener("click", function(){
        caixaGeral[i].style.backgroundColor = 'blue';
    })   
       
    }
}

corPreta.addEventListener('click',preto)
corRed.addEventListener('click',vermelho)
corGreen.addEventListener('click',verde)
corBlue.addEventListener('click',azul)









function limparTela(){
    let tabela = document.querySelector("#pixel-board")
    let printSize = tabela.rows.length
    if (printSize != "") {
        let tabela = document.querySelector("#pixel-board")
        tabela.innerHTML = ""
        for (let i = 0; i< printSize; i+=1){
            let linha = document.createElement("tr")
                for (let i = 0; i< printSize; i+=1) {
                    let coluna = document.createElement("td")
                    coluna.className = "pixel"
                    coluna.style.height = "40px"
                    coluna.style.width = "40px"
                    coluna.style.backgroundColor = "branco"
                    coluna.style.border = "black 1px solid"
                    coluna.addEventListener("click", pintar)
                    linha.append(coluna)
                }
            tabela.append(linha)
       }
    }
}

/* Botão Limpar */

let btnLimpar = document.querySelector("#clear-board")
btnLimpar.addEventListener("click", limparTela)
