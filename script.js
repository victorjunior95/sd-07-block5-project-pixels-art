window.onload = function() {


  const clearButton = document.getElementById('clear-board');
  clearButton.addEventListener('click', function() {
    const pixels = document.querySelectorAll('.pixel');
    for (let index = 0; index < pixels.length; index += 1) {

      pixels[index].style.backgroundColor = "rgb(255,255,255)";
    }
  }
  )

/* function createTable() {

  let pixelBoard = document.getElementById("pixel-board");


  for (let index = 0; index < 5; index += 1) {

      let line = document.createElement("div");
      pixelBoard.appendChild(line).className = "line";

      for (let index = 0; index < 5; index++) {

          let pixel = document.createElement("div");
          line.appendChild(pixel).className = "pixel";
      }
    }
  }


 function pintandoElementos(){
  let cadaPixel = pixelBoard.querySelectorAll('.pixel');

  for (let index = 0; index < cadaPixel.length; index += 1) {

      let c = cadaPixel[index];
      c.addEventListener('click', function(){
          //pegarCor();
          console.log('oi')
      });
  }
} */



   //   getComputedStyle([elemento]).backgroundColor;


}
