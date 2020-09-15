// // let clearBoard = document.getElementById('clear-board')
// // clearBoard.addEventListner('click', function () {
// //     for(pixelindex = 0; pixelindex < document.querySelectorAll('.pixel'); pixelindex += 1) {
// //         pixelindex.className = "pixel"
// //     }
// // });

// function createBox(className) {
//   let element = document.createElement("div");
//   element.className = className;
//   return element;
// }

// function createBoard(linesColumns) {
//   let pixelStart = document.querySelector("#pixel-board");
//   pixelStart.innerHTML = "";
//   for (let line = 0; line < linesColumns; line += 1) {
//     let bline = createBox("line center");
//     pixelStart.appendChild(bline);
//     finalWidth = 40 * linesColumns;
//     pixelStart.appendChild(bline).style.width = finalWidth;
//     for (let column = 0; column < linesColumns; column += 1) {
//       let pixel = createBox("pixel");
//       bline.appendChild(pixel);
//     }
//   }

//   let s = "black";
//   // let ns = "black";
//   //  https://flaviocopes.com/how-to-add-event-listener-multiple-elements-javascript/
//   document.querySelectorAll(".color").forEach((colorindex) => {
//     colorindex.addEventListener("click", (event) => {
//       let last = document.querySelector(".selected");
//       event.target.classList.add("selected");
//       if (last !== event.target) {
//         last.classList.remove("selected");
//       }
//       // console.log(event.target.classList[1])
//       s = event.target.classList[1];
//       // fist try vvvvvv
//       // className to string then trim start and end to keep only the main
//       // ns = s.substring(6,s.length-9);
//     });
//   });

//   document.querySelectorAll(".pixel").forEach((canvasindex) => {
//     canvasindex.addEventListener("click", (event) => {
//       event.target.className = "pixel " + s;
//       // I had to change the order to work the color of the pixel changes on event.target
//     });
//   });
// }

// window.onload = function () {
//   createBoard(5);
// };
// let clearBoard = document.getElementById('clear-board')
// clearBoard.addEventListner('click', function () {
//     for(pixelindex = 0; pixelindex < document.querySelectorAll('.pixel'); pixelindex += 1) {
//         pixelindex.className = "pixel"
//     }
// });

let s = "black"
window.onload = function() {
    createBoard(5);
    changeColor();
    changeCanvas(s);
}

function createBox(className) {
    let element = document.createElement('div');
    element.className = className;
    return element;
}

function createBoard(linesColumns) {
    let pixelStart = document.querySelector('#pixel-board');
    pixelStart.innerHTML = ''
    for (let line = 0; line < linesColumns; line += 1) {
        let bline = createBox('line center');
        pixelStart.appendChild(bline);
        finalWidth = 40 * linesColumns;
        pixelStart.appendChild(bline).style.width = finalWidth;
        for (let column = 0; column < linesColumns; column += 1) {
            let pixel = createBox('pixel');
            bline.appendChild(pixel);
        }
    }
}

function changeColor() {
    // let ns = "black";
    //  https://flaviocopes.com/how-to-add-event-listener-multiple-elements-javascript/
    document.querySelectorAll('.color').forEach(colorindex => {
        colorindex.addEventListener('click', event => {
            let last = document.querySelector('.selected')
            event.target.classList.add('selected');
            if (last !== event.target) {
                last.classList.remove('selected');
            }
            // console.log(event.target.classList[1])
            s = event.target.classList[1];
            // fist try vvvvvv
            // className to string then trim start and end to keep only the main
            // ns = s.substring(6,s.length-9);
            console.log(s)
        })
    })
}

function changeCanvas(selectedCol) {
    console.log(selectedCol)
    document.querySelectorAll('.pixel').forEach(canvasindex => {
        canvasindex.addEventListener('click', event => {            
            event.target.className = "pixel " + selectedCol
            // I had to change the order in CSS to work the color of the pixel changes on event.target
        })
    })
}
/**/
