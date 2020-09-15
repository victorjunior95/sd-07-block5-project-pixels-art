// 4 - A página deve possuir um quadro de pixels, com 25 pixels.
    
// As seguintes verificações serão feitas:

//     O quadro de "pixels" deve ter 5 elementos de largura e 5 elementos de comprimento;

//     O quadro de "pixels" deve possuir o id denominado pixel-board, ao passo que cada "pixel" individual dentro do quadro deve possuir a classe denominada pixel;

//     A cor inicial dos "pixels" dentro do quadro, ao abrir a página, deve ser branca;

//     O quadro de "pixels" deve aparecer abaixo da paleta de cores.






// 6 - Ao carregar a página, a cor preta da paleta já deve estar selecionada para pintar os pixels.
// As seguintes verificações serão feitas:
// O elemento da cor preta deve possuir, inicialmente, a classe selected;
// Note que o elemento que deverá receber a classe selected deve ser um dos elementos que possuem a classe color, como especificado no requisito 2.


window.onload = function () { 
    
    let pixelboard = document.getElementById("pixel-board");

    // pixelboard.innerHTML = "<div id='pixel-board'>";

    for (let i = 1; i <= 5; i += 1) {

        let aux="";

        for (let k = 1; k <= 5; k += 1) {

            aux += "<div class='pixel'>"+i+k+" </div>";
            
        }

        pixelboard.innerHTML += "<div>"+aux+"</div>";

    }

    pixelboard.innerHTML += "</div>";
    let paletas = document.getElementById("color-palette");
    let paleta=[];
    paleta[0] = paletas.firstElementChild;
    paleta[0].className = "selected";
    
}