let buttonClearBoard = document.getElementById("clear-board");

buttonClearBoard.addEventListener('click', function () {
//   for (index = 0; index < pixel.length; index =+ 1)
    document.getElementsByClassName("pixel").style.backgroundColor = 'white';
});

// function clearBoard() {
//     document.getElementsByClassName("pixel").style.backgroundColor = 'white';
// };