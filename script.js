
let limpar = document.getElementById("clear-board");

let board = document.getElementsByClassName("pixel");

function limparBoard(){
    for(let index in board){
        board[index].style.backgroundColor = "white";
    }
}

limpar.addEventListener('click', limparBoard);


let paletBlack = document.getElementById('color-black');
let paletRed = document.getElementById('color-red');
let paletGreen = document.getElementById('color-green');
let paletBlue = document.getElementById('color-blue');

let select = 'black';

function trocarCor(){
    for(let index in board){
        board[index].addEventListener("click", function() {
			board[index].style.backgroundColor = select;
            });
    }  
}

paletRed.addEventListener('click',function(){
    select = 'red';
    for(let index in board){
        board[index].addEventListener("click", function() {
			board[index].style.backgroundColor = select;
            });
    }; 
});


function selecionaGreen(){
    select = 'green';
    trocarCor(select);
};


paletGreen.addEventListener('click',function(){
    select = 'green';
    for(let index in board){
        board[index].addEventListener("click", function() {
			board[index].style.backgroundColor = select;
            });
    }; 
});

paletBlue.addEventListener('click',function(){
    select = 'blue';
    for(let index in board){
        board[index].addEventListener("click", function() {
			board[index].style.backgroundColor = select;
            });
    }; 
});

paletBlack.addEventListener('click',function(){
    select = 'black';
    for(let index in board){
        board[index].addEventListener("click", function() {
			board[index].style.backgroundColor = select;
            });
    }; 
});


