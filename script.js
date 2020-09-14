window.onload = function() {
  let pixelBoard = document.getElementById("pixel-board");

function createTable() {


  for (let index = 0; index < 5; index++) {

      let line = document.createElement("div");
      pixelBoard.appendChild(line).className = "line";

      for (let index = 0; index < 5; index++) {

          let pixel = document.createElement("div");
          line.appendChild(pixel).className = "pixel";
      }
    }
  }

  createTable();

  let cadaPixel = pixelBoard.querySelectorAll('.pixel');

  for (let index = 0; index < cadaPixel.length; index++) {

      let c = cadaPixel[index];
      c.addEventListener('click', function(){
          //pegarCor();
          console.log('oi')
      });
  }



   //   getComputedStyle([elemento]).backgroundColor;


}
