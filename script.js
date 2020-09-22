window.onload = function() 
{
  let numberOfLines = 5;
  var lines = document.querySelectorAll(".line");
  let className="box-empty";
  let color = document.getElementById("")

  fillSquare(lines);

  function fillSquare(lines)
  {
    for (let index = 0; index < lines.length; index++)
    {
      fillLine(lines[index]);
    }
  }

  function createBox()
  {
    let box = document.createElement("div");
    box.className = className;
    return(box);
  }

  function fillLine(divLine)
  {
    for (let lineColumn = 0; lineColumn < numberOfLines; lineColumn += 1)
    {
      let box = createBox();
      divLine.appendChild(box);
    }
  }
}


// fillSquare(lines);

// function fillSquare(lines) {
//     for(let index = 0; index < lines; index += 1) {
//       fillLine(lines[index]);
//     }
//   }

// function createBox(className) {
//     let box = document.createElement("div");
//     box.className = className;
//     return box;
// }

// function fillLine(divLine) {
//     for (let lineColumn = 1; lineColumn <= 5; lineColumn += 1) {
//       let box = createBox("box");
//       divLine.appendChild(box);
//       divLine.appendChild(createBox("box-empty"));
//     }
//   }
  

