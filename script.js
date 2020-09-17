window.addEventListener('load', () => { 

    creatColorsPalette();
    createPixelBoard();
    creatEvents();
});

let colorPalette = document.getElementById("color-palette"),
    colors = ['black', 'blue', 'pink', 'green'];

function creatColorsPalette() {

    for( let i = 0 ; i < 4 ; i++ ) {
        let color = document.createElement('div');
        color.id = `paletteColor${i+1}`;
        color.className = "color";
        color.style.backgroundColor = colors[i];
        colorPalette.appendChild(color);
    };
};

let pixelBoard = document.getElementById("pixel-board");

function createPixelBoard() {

    let cont = 0;

    for( let i = 0 ; i < 5 ; i++ ) {

        let linePixel = document.createElement('div');

        linePixel.style.height = '40px' ;
        pixelBoard.appendChild(linePixel);
            
        for( let j = 0 ; j < 5 ; j++ ) {

        let pixelElement = document.createElement('div');
            cont++;
            pixelElement.className = "pixel";
            pixelElement.id = `pixel${cont}`;
            linePixel.appendChild(pixelElement);
        };
    };

};

let buttonClear = document.getElementById('clear-board'),
    colorSelected = "black",
    lastColorId;

function selectColor(element) {

    let color = element
        n = color.id.replace("paletteColor","");

    if(lastColorId === undefined ) {

        lastColorId = color;

    }
    else {

        document.querySelector(`#${lastColorId.id}`).className = 'color';

    };

    colorSelected = colors[n-1];
    lastColorId = color;
    color.className = 'selected';

};

function selectPixel(element) {

    let pixel = element;
    pixel.style.backgroundColor = colorSelected;

};

function selectClear() {
    
    let pixel = document.querySelectorAll('.pixel');

    for( let i = 0 ; i < pixel.length ; i++) {

        pixel[i].style.backgroundColor = "white";

    };

};

function  whichElement(id) {

    let element = document.querySelector(`#${id}`);

    if( id.indexOf('pixel') !== -1 ){
        
        selectPixel(element);

    }
    else if( id.indexOf('paletteColor') !== -1 ){

        selectColor(element);

    }
    else {

        selectClear();

    };

};

function creatEvents() {

    let pixels = pixelBoard.querySelectorAll('.pixel'),
        col = document.querySelectorAll(".color"), 
        getClick = e => {
        whichElement(e.target.id);        
        };

    for( let i = 0 ; i < pixels.length ; i++) {

        let pixel = pixels[i],
            color = col[i];

        pixel.addEventListener('click',getClick);

        if ( i < col.length ) { 

            color.addEventListener('click',getClick);

        };
    };

    buttonClear.addEventListener('click',getClick);

};