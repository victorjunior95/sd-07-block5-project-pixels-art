//getComputedStyles

window.onload = function() {

    function CreatePalette(){
        const colors = ['black', 'green', 'yellow','blue'];
        let paleta = document.getElementsByClassName("color")
        
        for (const index in paleta) {
            paleta[index].style.backgroundColor = colors[index]
            console.log(paleta[index].style.backgroundColor)
        }
    }
    
    CreatePalette();
    
}



