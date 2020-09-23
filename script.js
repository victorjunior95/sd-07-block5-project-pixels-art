// window.onload = function() 
// {
  let numberOfLines = 5;
  var lines = document.querySelectorAll(".line");
  let className="box-empty";
  let color = document.getElementById("");
  var counterId=1;
  var colorBox="white";

  fillSquare(lines);

  function fillSquare(lines)
  {
    for (let index = 0; index < lines.length; index++)
    {
      fillLine(lines[index]);
    }
  }

  document.getElementById("box1").style.backgroundColor = "black";
  document.getElementById("box2").style.backgroundColor = "red";
  document.getElementById("box3").style.backgroundColor = "yellow";
  document.getElementById("box4").style.backgroundColor = "orange";

  function storeVariableBox1(){
    colorBox = document.getElementById("box1").style.backgroundColor;
  }
  function storeVariableBox2(){
    colorBox = document.getElementById("box2").style.backgroundColor;
  }
  function storeVariableBox3(){
    colorBox = document.getElementById("box3").style.backgroundColor;
  }
  function storeVariableBox4(){
    colorBox = document.getElementById("box4").style.backgroundColor;
  }

  
  function changeColor1(){
    document.getElementById('1').style.backgroundColor = colorBox;
  }

  function createBox(id)
  {
    let box = document.createElement("div");
    box.className = className;
    box.id=id;
    return(box);
  }

  function fillLine(divLine)
  {
    for (let lineColumn = 0; lineColumn < numberOfLines; lineColumn += 1)
    {
      divLine.appendChild(createBox(counterId));
      counterId++;
    }
  }
// }


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