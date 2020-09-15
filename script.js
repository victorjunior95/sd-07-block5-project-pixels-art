/* 
    - criar função ao clicar;
        - Variável que vai armazenar cor selecionada;
        - Escultador de eventos para fazer ao clicar
        -
    -criar objeto pixel
    - criar função initialize para carregar tudo
    - 
*/
/* 
7 - Ao clicar em uma das cores da paleta, a cor selecionada é que vai ser usada para preencher os pixels no quadro.
As seguintes verificações serão feitas:
A classe selected deve ser adicionada à cor selecionada na paleta, ao mesmo tempo em que é removida da cor anteriormente selecionada;

Somente uma das cores da paleta deve ter a classe selected de cada vez;

Note que os elementos que deverão receber a classe selected devem ser os mesmos elementos que possuem a classe color, como especificado no requisito 2.


*/

/*4 - A página deve possuir um quadro de pixels, com 25 pixels.
As seguintes verificações serão feitas:

O quadro de "pixels" deve ter 5 elementos de largura e 5 elementos de comprimento;

O quadro de "pixels" deve possuir o id denominado pixel-board, ao passo que cada "pixel" individual dentro do quadro deve possuir a classe denominada pixel;

O quadro de "pixels" deve aparecer abaixo da paleta de cores.

6 - Ao carregar a página, a cor preta da paleta já deve estar selecionada para pintar os pixels.
As seguintes verificações serão feitas:
O elemento da cor preta deve possuir, inicialmente, a classe selected;

Note que o elemento que deverá receber a classe selected deve ser um dos elementos que possuem a classe color, como especificado no requisito 2.

8 - Ao clicar em um pixel dentro do quadro após selecionar uma cor na paleta, o pixel deve ser preenchido com esta cor.
As seguintes verificações serão feitas:
Ao carregar a página deve ser possível pintar os pixels de preto;

Após selecionar uma outra cor na paleta, deve ser possível pintar os pixels com essa cor;

Somente o pixel que foi clicado deverá ser preenchido com a cor selecionada, sem influenciar na cor dos demais pixels.
*/
let colorSelec = "black", pixelList;

//Armazena div que contém a tabulação;
var pixelBoard = document.getElementById("pixel-board");
var paleteColor = document.querySelectorAll("#color-palette div"); 


function colorChange() {

    

};

/*function setColor (coluna) {

    let a = "#coluna" + toString(coluna);
    console.log(a);
    //console.log(pixelBoard.getElementById(a));

};*/
 
//Cria tabulação;
function pixelsAndLines() { 

    //Cria linhas
    for( let i = 0 ; i < 5 ; i++ ) {

        //Criando linhas
        let linePixel = document.createElement('div');
        linePixel.className = `.linha${i+1}`;
        linePixel.style.height = '40px' ;
        pixelBoard.appendChild(linePixel);
        

        for( let j = 0 ; j < 5 ; j++ ) {

            //Criando pixels
            let pixelElement = document.createElement('div');
            pixelElement.className = ".pixel";
            pixelElement.id = `#coluna${j+1}`;
            pixelElement.style.width = '40px';
            pixelElement.style.height = '40px';
            pixelElement.style.backgroundColor = 'white';
            pixelElement.style.border = '1px solid black' ;
            pixelElement.style.display = 'inline-block';
            pixelElement.onclick = () => {

                pixelElement.style.backgroundColor = colorSelec;

            };
            //tentar link com css

            linePixel.appendChild(pixelElement);

        };
    
    };
    
};



//Interações.
/*function pixel() {

// Puxa elementos botões em html e css.
pixelList = pixelBoard.querySelectorAll('div > div');
//for percorre lista de elementos botões
for( let i = 0 ; i < pixelList.length ; i++ ) {
    console.log(i);
    pixelList[i].addEventListener('click', setColor);
};

};
*/

function events () {

    for( let i = 0 ; i < paleteColor.length ; i++) {

        paleteColor[i].addEventListener('click', () => {

            colorSelec = paleteColor[i].id.replace("Color", "");

        });

    };



}
events ();
document.addEventListener('onload', pixelsAndLines());
//document.addEventListener('onload', pixel());