
let limpar = document.querySelector("#clear-board");
let board = document.querySelectorAll(".pixel");
let tamanhoBoard = document.querySelector('#board-size');
let btnVqv = document.querySelector('#generate-board');


function validaInput(){
    if(tamanhoBoard.value != ""){
        console.log('Deu certo');
    }
    else{
        alert('Board inválido!');
    };
};


btnVqv.addEventListener('click', validaInput)



function limparBoard(){
    for(let index = 0; index < board.length ; index ++){
        board[index].style.backgroundColor = "white";
    }
}

limpar.addEventListener('click', limparBoard);


let paletBlack = document.querySelector('#color-black');
let paletRed = document.querySelector('#color-red');
let paletGreen = document.querySelector('#color-green');
let paletBlue = document.querySelector('#color-blue');

let select = 'black';

function trocarCor(){
    for(let index = 0; index < board.length ; index ++){
        board[index].addEventListener("click", function() {
			board[index].style.backgroundColor = select;
            });
    }  
}

paletRed.addEventListener('click',function(){
    select = 'red';
    paletBlack.classList.remove('selected');
    paletBlue.classList.remove('selected');
    paletGreen.classList.remove('selected');
    paletRed.classList.add('selected');
    for(let index = 0; index < board.length ; index ++){
        board[index].addEventListener("click", function() {
			board[index].style.backgroundColor = select;
            });
    }; 
});


paletGreen.addEventListener('click',function(){
    select = 'green';
    paletBlack.classList.remove('selected');
    paletBlue.classList.remove('selected');
    paletRed.classList.remove('selected');
    paletGreen.classList.add('selected');
    for(let index = 0; index < board.length ; index ++){
        board[index].addEventListener("click", function() {
			board[index].style.backgroundColor = select;
            });
    }; 
});

paletBlue.addEventListener('click',function(){
    select = 'blue';
    paletBlack.classList.remove('selected');
    paletBlue.classList.add('selected');
    paletRed.classList.remove('selected');
    paletGreen.classList.remove('selected');
    for(let index = 0; index < board.length ; index ++){
        board[index].addEventListener("click", function() {
			board[index].style.backgroundColor = select;
            });
    }; 
});

paletBlack.addEventListener('click',function(){
    select = 'black';
    paletBlack.classList.add('selected');
    paletBlue.classList.remove('selected');
    paletRed.classList.remove('selected');
    paletGreen.classList.remove('selected');    
    for(let index = 0; index < board.length ; index ++){
        board[index].addEventListener("click", function() {
			board[index].style.backgroundColor = select;
            });
    }; 
});

trocarCor();