window.addEventListener('load', function() {

    tableCreate();
    tableEvent();
    paleteColorEvent();
    clearTableEvent();

});

let colorSelec = "black";
var pixelBoard = document.getElementById("pixel-board");
var paleteColor = document.querySelectorAll("#color-palette div"); 

function tableCreate() { 

    for( let i = 0 ; i < 5 ; i++ ) {

        let linePixel = document.createElement('div');
        //tentar link com css
        linePixel.style.height = '40px' ;
        pixelBoard.appendChild(linePixel);
        

        for( let j = 0 ; j < 5 ; j++ ) {

            let pixelElement = document.createElement('div');
            pixelElement.className = "pixel";
            //tentar link com css
            pixelElement.style.width = '40px';
            pixelElement.style.height = '40px';
            pixelElement.style.backgroundColor = 'white';
            pixelElement.style.border = '1px solid black' ;
            pixelElement.style.display = 'inline-block';

            linePixel.appendChild(pixelElement);

        };
    
    };
    
};

function paleteColorEvent() {

    for( let i = 0 ; i < paleteColor.length ; i++) {

        paleteColor[i].addEventListener('click', () => {

            colorSelec = paleteColor[i].id.replace("Color", "");

        });

    };
};

function tableEvent() {

    let pixels = pixelBoard.querySelectorAll('div div');

    for( let i = 0 ; i < pixels.length ; i++) {

        pixels[i].addEventListener('click', () => {

            pixels[i].style.backgroundColor = colorSelec ;

        });

    };

};

function clearTableEvent() {

    document.getElementById('clear-board').addEventListener('click', () => {

        let pixels = pixelBoard.querySelectorAll('div div');

        for( let i = 0 ; i < pixels.length ; i++) {

            pixels[i].style.backgroundColor = 'white' ;
    
        };

    })

};

