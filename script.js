// 4 - A página deve possuir um quadro de pixels, com 25 pixels.
    
// As seguintes verificações serão feitas:

//     O quadro de "pixels" deve ter 5 elementos de largura e 5 elementos de comprimento;

//     O quadro de "pixels" deve possuir o id denominado pixel-board, ao passo que cada "pixel" individual dentro do quadro deve possuir a classe denominada pixel;

//     A cor inicial dos "pixels" dentro do quadro, ao abrir a página, deve ser branca;

//     O quadro de "pixels" deve aparecer abaixo da paleta de cores.


let pixelboard = document.getElementById("pixel-board");

// pixelboard.innerHTML = "<div id='pixel-board'>";

for (let i = 1; i <= 5; i += 1) {

    let aux="";

    for (let k = 1; k <= 5; k += 1) {

        aux += "<div id='cell'>"+i+k+" </div>";
        
    }

    pixelboard.innerHTML += "<div>"+aux+"</div>";

}

pixelboard.innerHTML += "</div>";