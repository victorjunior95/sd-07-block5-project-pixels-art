window.onload = function (){
    function createSquare() {
        for (let index = 0; index < 5; index++) {
            let line = document.createElement("div");
            boxSquare.appendChild(line).className = "line";
            for (let index = 0; index < 5; index++) {
                let box = document.createElement("div");
                line.appendChild(box).className = "box";
            }
          }
        }