window.onload= function(){
    let tamanhoLinha=5;
    let lines = document.querySelectorAll('.pixel');
   
 function createBox(className) {
    let box = document.createElement('div');
    box.className = className;
    return box;
  }

  // vou estudar ainda essa trecho sujeito a modificaçoes 
  function criarlinhas(lines) {
    for (let lineColumn = 1; lineColumn <= tamanhoLinha; lineColumn += 1) {
      //mais uma condiçao para a proximas de baixo
      for (let index = 0; index < lines.length; index++) {
          
        let box = createBox("box");
        lines.appendChild(box);
      }
      }  
     
    }
}       

function colorir(){

    console.log('coloriu')
   // document.getElementById();


}

