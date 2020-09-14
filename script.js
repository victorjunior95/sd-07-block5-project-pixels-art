//getComputedStyles

window.onload = function() {

    const paleta = document.getElementsByClassName("color");
    

    function createPalette(){
        const colors = ['rgb(0,0,0)', 'rgb(0,128,0)', 'rgb(255,255,0)','rgb(0,0,255)'];
        
        
        for (let index = 0; index < 4; index += 1) {
            let color = colors[index]
            console.log(index,paleta[index])
            paleta[index].style.backgroundColor = color;
            
            
        }
    }

    function createFirstBoard(){
        
        for(let index = 0; index < 5; index+=1){
            let line = document.createElement("div")
            line.className = "line"
            for(let index2 = 0; index2 < 5; index2+=1){
                let box = document.createElement("div")
                box.className = "box"
                line.appendChild(box)     
            }
        }
    }

    createPalette();

    
}



