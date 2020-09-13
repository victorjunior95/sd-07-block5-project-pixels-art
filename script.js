let limpar = document.getElementById("clear-board");

let board = document.getElementsByClassName("pixel");

function limparBoard(){
    for(let index in board){
        board[index].style.backgroundColor = "white";
    }
}


limpar.addEventListener('click', limparBoard);