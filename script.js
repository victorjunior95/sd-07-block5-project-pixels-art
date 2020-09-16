window.onload = function() {

  let coresSelect = document.querySelectorAll('.color');
  let arrayCores = [];

  for (let index = 0; index < coresSelect.length; index++) {

     // console.log(coresSelect[index].classList[1])
      arrayCores[index] = coresSelect[index].classList[1];
  }

  console.log(arrayCores)


  function arrayRandom(arrayCores) {

    const random = Math.floor(Math.random() * arrayCores.length);


    return random, arrayCores[random];

  }

  let stringCor = arrayRandom(arrayCores)
  console.log(stringCor)
  for (let index = 1; index < coresSelect.length; index++) {
      coresSelect[index].classList.remove(arrayCores[index])
  }

  for(let i = 1; i < coresSelect.length; i++) {

    coresSelect[i].classList.add(arrayRandom(arrayCores))
  }



let buttonGenerateBoard = document.getElementById('generate-board').addEventListener('click', createBoard);
//crianda tabela
function createBoard() {

  let customBoard = document.querySelector('#board-size').value;
      customBoard === '' ? alert("Board inválido!") : true;
      customBoard < 5 ? customBoard = 5 : true;
      customBoard > 50 ? customBoard = 50 : true;

      let pixelBoard = document.getElementById("pixel-board");
          pixelBoard.innerHTML = '';

          for (let index = 0; index < customBoard; index += 1) {

              let line = document.createElement("div");
              pixelBoard.appendChild(line).className = "tr";

              for (let indexLine = 0; indexLine < customBoard; indexLine += 1) {

                  let pixel = document.createElement("div");
                  line.appendChild(pixel).className = "pixel";
              }
          }

    let cadaPixel = document.querySelectorAll('.pixel');

    for (let index = 0; index < cadaPixel.length; index += 1) {

      let corN = cadaPixel[index];
      corN.addEventListener('click', function(e){
          e.target.style.backgroundColor = getComputedStyle(colorSelected).backgroundColor;
      })
  }

}

//selecionando paleta
let colorSelected = document.querySelector('.selected');
const color = document.getElementsByClassName('color');

for (let i = 0; i < color.length; i += 1) {
  color[i].addEventListener('click', function(e){

        colorSelected.classList.remove("selected");
        e.target.classList.add('selected');
        colorSelected = e.target;

  });
}

let cadaPixel = document.querySelectorAll('.pixel');

for (let index = 0; index < cadaPixel.length; index += 1) {

     let corN = cadaPixel[index];
     corN.addEventListener('click', function(e){
         e.target.style.backgroundColor = getComputedStyle(colorSelected).backgroundColor;
     })
 }


//limpando a board
const clearButton = document.getElementById('clear-board');
clearButton.addEventListener('click', function() {
    const pixels = document.querySelectorAll('.pixel');
    for (let index = 0; index < pixels.length; index += 1) {

      pixels[index].style.backgroundColor = "rgb(255,255,255)";
    }
  })
}








