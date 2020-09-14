window.onload = function() {
  const pixelBoard = document.getElementById("pixel-board");
  const qtMatrix = 5;
  
 
  function createLine (){
      
      let pixel = document.createElement("div");
      pixel.className="color";
      for (let line = 0; line < qtMatrix; line +=1){
        let pixelLine = document.createElement("div");
        pixelBoard.appendChild(pixelLine);
       for(let pixels = 0; pixels < qtMatrix; pixels+=1){
            let pixel = document.createElement("div");
            pixel.className="pixel";
            pixelLine.appendChild(pixel);

       }
      }

  }
  createLine();

    

}




