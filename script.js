

const corPreta = document.getElementsByClassName('color colorBlack')[0];
const corRed = document.getElementsByClassName('color colorRed')[0];
const corGreen = document.getElementsByClassName('color colorGreen')[0];
const corBlue = document.getElementsByClassName('color colorBlue')[0];
const limpar = document.querySelector("#clear-board")
console.log(corPreta)
let caixaGeral = []

window.onload = inicio;

function inicio(){
    for( let i= 1  ; i <= 25 ;i += 1){
        caixaGeral[i] = document.querySelector("#p" + [i]);
        caixaGeral[i].addEventListener("click", function(){
        caixaGeral[i].style.backgroundColor = 'black';
    })   
    
    }
}

function preto(){
    for( let i= 1  ; i <= 25 ;i += 1){
        caixaGeral[i].addEventListener("click", function(){
        caixaGeral[i].style.backgroundColor = 'black';
    })   
    
    }
}

function vermelho(){
    for( let i= 1  ; i <= 25 ;i += 1){
        caixaGeral[i].addEventListener("click", function(){
        caixaGeral[i].style.backgroundColor = 'red';
    })   
       
    }
}

function verde(){
    for( let i= 1  ; i <= 25 ;i += 1){
        caixaGeral[i].addEventListener("click", function(){
        caixaGeral[i].style.backgroundColor = 'green';
    })   
       
    }
}

function azul(){
    for( let i= 1  ; i <= 25 ;i += 1){
        caixaGeral[i].addEventListener("click", function(){
        caixaGeral[i].style.backgroundColor = 'blue';
    })   
       
    }
}

function limpeza(){
    for( let i= 1  ; i <= 25 ;i += 1){
        caixaGeral[i].style.backgroundColor = 'white';       
    }
}

corPreta.addEventListener('click',preto)
corRed.addEventListener('click',vermelho)
corGreen.addEventListener('click',verde)
corBlue.addEventListener('click',azul)
limpar.addEventListener('click',limpeza)








