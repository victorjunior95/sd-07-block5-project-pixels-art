window.onload= function(){

    let lines = document.querySelectorAll('.line');

    fillPaletas(lines);


 function createBox(className) {
    let box = document.createElement("div");
    box.className = className;
    return box;
  }

  // vou estudar ainda essa trecho sujeito a modificaçoes 
  function fillLine(divLine) {
    for (let lineColumn = 1; lineColumn <= basePyramid; lineColumn += 1) {
      if(lineColumn >= controlLeft && lineColumn <= controlRight) {
        let box = createBox("box");
        divLine.appendChild(box);
      }
    }
}       



}