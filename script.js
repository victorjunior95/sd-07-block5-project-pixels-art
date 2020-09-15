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
    let colorpalette = document.getElementById("color-palette");    
    let colors = ['black', 'red', 'blue', 'green'];

    let aux="";
    let indice;
    let i;
    let k;
    let l;
    let c;
    let pixel;

    for (i = 0;i < 4;i++) {

        aux = document.createElement("div");
        aux.className = "color";
        aux.style.backgroundColor = colors[i];
        colorpalette.appendChild(aux);

        if (aux.style.backgroundColor == "black") {
            aux.style.className = "selected";
        }
    }

    aux = "";

    for (i = 1; i <= 5; i += 1) {
    
        for (k = 1; k <= 5; k += 1) {

            indice = i+""+k;
            aux += "<div id='"+indice+"' class='pixel'></div>";
            
            
        }

        pixelboard.innerHTML += "<div>"+aux+"</div>";
        aux = "";

    }

    pixelboard.innerHTML += "</div>";

    for (i = 1; i <= 5; i += 1) {
    
        for (k = 1; k <= 5; k += 1) {

            indice = i+""+k;
            pixel = document.getElementById(indice);
            pixel.addEventListener('click', function (event) {
                const selected = document.querySelector('.selected');
                event.target.style.backgroundColor = selected.style.backgroundColor;
              });
    
        }

    }

    let paletas = document.getElementById("color-palette");
    let paleta=[];
    paleta[0] = paletas.firstElementChild;
    paleta[1] = paletas.firstElementChild.nextElementSibling;
    paleta[2] = paletas.firstElementChild.nextElementSibling.nextElementSibling;
    paleta[3] = paletas.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling;
    paleta[0].className = "selected";

    paleta[0].addEventListener("click", function() {
        paleta[0].className = "selected";
        paleta[1].className = "color";
        paleta[2].className = "color";
        paleta[3].className = "color";

        
    });

    paleta[1].addEventListener("click", function() {
        paleta[1].className = "selected";
        paleta[0].className = "color";
        paleta[2].className = "color";
        paleta[3].className = "color";

    });

    paleta[2].addEventListener("click", function() {
        paleta[2].className = "selected";
        paleta[1].className = "color";
        paleta[0].className = "color";
        paleta[3].className = "color";

    });

    paleta[3].addEventListener("click", function() {
        paleta[3].className = "selected";
        paleta[1].className = "color";
        paleta[2].className = "color";
        paleta[0].className = "color";

    });

    
    

    function changecolor(i,k) {

        // let paletas = document.getElementById("color-palette");
        // let paleta=[];
        // paleta[0] = paletas.firstElementChild;
        // paleta[1] = paletas.firstElementChild.nextElementSibling;
        // paleta[2] = paletas.firstElementChild.nextElementSibling.nextElementSibling;
        // paleta[3] = paletas.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling;

               
        indice = i+""+k;
        let pixelselected = document.getElementById(indice);
        console.log(indice);       
    }

    changecolor(l,c);



}