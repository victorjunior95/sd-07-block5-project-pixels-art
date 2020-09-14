let blackPallete = 1;
let bluePallete = 0;
let yellowPallete = 0;
let greenPallete = 0;

function clearBoard() {
  document.getElementById('one').style.backgroundColor = "white";
  document.getElementById('two').style.backgroundColor = "white";
  document.getElementById('three').style.backgroundColor = "white";
  document.getElementById('four').style.backgroundColor = "white";
  document.getElementById('five').style.backgroundColor = "white";
  document.getElementById('six').style.backgroundColor = "white";
  document.getElementById('seven').style.backgroundColor = "white";
  document.getElementById('eight').style.backgroundColor = "white";
  document.getElementById('nine').style.backgroundColor = "white";
  document.getElementById('ten').style.backgroundColor = "white";
  document.getElementById('eleven').style.backgroundColor = "white";
  document.getElementById('twelve').style.backgroundColor = "white";
  document.getElementById('thirteen').style.backgroundColor = "white";
  document.getElementById('fourteen').style.backgroundColor = "white";
  document.getElementById('fifteen').style.backgroundColor = "white";
  document.getElementById('sixteen').style.backgroundColor = "white";
  document.getElementById('seventeen').style.backgroundColor = "white";
  document.getElementById('eighteen').style.backgroundColor = "white";
  document.getElementById('nineteen').style.backgroundColor = "white";
  document.getElementById('twenty').style.backgroundColor = "white";
  document.getElementById('twentyOne').style.backgroundColor = "white";
  document.getElementById('twentyTwo').style.backgroundColor = "white";
  document.getElementById('twentyThree').style.backgroundColor = "white";
  document.getElementById('twentyFour').style.backgroundColor = "white";
  document.getElementById('twentyFive').style.backgroundColor = "white";
}

function black() {
  document.getElementsByClassName('black').class = 'selected color black';
  document.getElementsByClassName('blue').class = 'color blue';
  document.getElementsByClassName('yellow').class = 'color yellow';
  document.getElementsByClassName('green').class = 'color green';
  blackPallete = 1;
  bluePallete = 0;
  yellowPallete = 0;
  greenPallete = 0;
}

function blue() {
  document.getElementsByClassName('blue').class = 'selected color blue';
  document.getElementsByClassName('black').class = 'color black';
  document.getElementsByClassName('yellow').class = 'color yellow';
  document.getElementsByClassName('green').class = 'color green';
  blackPallete = 0;
  bluePallete = 1;
  yellowPallete = 0;
  greenPallete = 0;
}

function yellow() {
  document.getElementsByClassName('yellow').class = 'selected color yellow';
  document.getElementsByClassName('black').class = 'color black';
  document.getElementsByClassName('blue').class = 'color blue';
  document.getElementsByClassName('green').class = 'color green';
  blackPallete = 0;
  bluePallete = 0;
  yellowPallete = 1;
  greenPallete = 0;
}

function green() {
  document.getElementsByClassName('green').class = 'selected color green';
  document.getElementsByClassName('black').class = 'color black';
  document.getElementsByClassName('blue').class = 'color blue';
  document.getElementsByClassName('yellow').class = 'color yellow';
  blackPallete = 0;
  bluePallete = 0;
  yellowPallete = 0;
  greenPallete = 1;
}

function one() {
  if (blackPallete === 1) {
    document.getElementById("one").style.backgroundColor = "black";
  } else if (bluePallete === 1) {
    document.getElementById("one").style.backgroundColor = "blue";
  } else if (yellowPallete === 1) {
    document.getElementById("one").style.backgroundColor = "yellow";
  } else if (greenPallete === 1) {
    document.getElementById("one").style.backgroundColor = "green";
  }
}

function two() {
  if (blackPallete === 1) {
    document.getElementById("two").style.backgroundColor = "black";
  } else if (bluePallete === 1) {
    document.getElementById("two").style.backgroundColor = "blue";
  } else if (yellowPallete === 1) {
    document.getElementById("two").style.backgroundColor = "yellow";
  } else if (greenPallete === 1) {
    document.getElementById("two").style.backgroundColor = "green";
  }
}

function three() {
  if (blackPallete === 1) {
    document.getElementById("three").style.backgroundColor = "black";
  } else if (bluePallete === 1) {
    document.getElementById("three").style.backgroundColor = "blue";
  } else if (yellowPallete === 1) {
    document.getElementById("three").style.backgroundColor = "yellow";
  } else if (greenPallete === 1) {
    document.getElementById("three").style.backgroundColor = "green";
  }
}

function four() {
  if (blackPallete === 1) {
    document.getElementById("four").style.backgroundColor = "black";
  } else if (bluePallete === 1) {
    document.getElementById("four").style.backgroundColor = "blue";
  } else if (yellowPallete === 1) {
    document.getElementById("four").style.backgroundColor = "yellow";
  } else if (greenPallete === 1) {
    document.getElementById("four").style.backgroundColor = "green";
  }
}

function five() {
  if (blackPallete === 1) {
    document.getElementById("five").style.backgroundColor = "black";
  } else if (bluePallete === 1) {
    document.getElementById("five").style.backgroundColor = "blue";
  } else if (yellowPallete === 1) {
    document.getElementById("five").style.backgroundColor = "yellow";
  } else if (greenPallete === 1) {
    document.getElementById("five").style.backgroundColor = "green";
  }
}

function six() {
  if (blackPallete === 1) {
    document.getElementById("six").style.backgroundColor = "black";
  } else if (bluePallete === 1) {
    document.getElementById("six").style.backgroundColor = "blue";
  } else if (yellowPallete === 1) {
    document.getElementById("six").style.backgroundColor = "yellow";
  } else if (greenPallete === 1) {
    document.getElementById("six").style.backgroundColor = "green";
  }
}
  
function seven() {
  if (blackPallete === 1) {
    document.getElementById("seven").style.backgroundColor = "black";
  } else if (bluePallete === 1) {
    document.getElementById("seven").style.backgroundColor = "blue";
  } else if (yellowPallete === 1) {
    document.getElementById("seven").style.backgroundColor = "yellow";
  } else if (greenPallete === 1) {
    document.getElementById("seven").style.backgroundColor = "green";
  }
}

function eight() {
  if (blackPallete === 1) {
    document.getElementById("eight").style.backgroundColor = "black";
  } else if (bluePallete === 1) {
    document.getElementById("eight").style.backgroundColor = "blue";
  } else if (yellowPallete === 1) {
    document.getElementById("eight").style.backgroundColor = "yellow";
  } else if (greenPallete === 1) {
    document.getElementById("eight").style.backgroundColor = "green";
  }
}

function nine() {
  if (blackPallete === 1) {
    document.getElementById("nine").style.backgroundColor = "black";
  } else if (bluePallete === 1) {
    document.getElementById("nine").style.backgroundColor = "blue";
  } else if (yellowPallete === 1) {
    document.getElementById("nine").style.backgroundColor = "yellow";
  } else if (greenPallete === 1) {
    document.getElementById("nine").style.backgroundColor = "green";
  }
}

function ten() {
  if (blackPallete === 1) {
    document.getElementById("ten").style.backgroundColor = "black";
  } else if (bluePallete === 1) {
    document.getElementById("ten").style.backgroundColor = "blue";
  } else if (yellowPallete === 1) {
    document.getElementById("ten").style.backgroundColor = "yellow";
  } else if (greenPallete === 1) {
    document.getElementById("ten").style.backgroundColor = "green";
  }
}

function eleven() {
  if (blackPallete === 1) {
  document.getElementById("eleven").style.backgroundColor = "black";
  } else if (bluePallete === 1) {
    document.getElementById("eleven").style.backgroundColor = "blue";
  } else if (yellowPallete === 1) {
    document.getElementById("eleven").style.backgroundColor = "yellow";
  } else if (greenPallete === 1) {
    document.getElementById("eleven").style.backgroundColor = "green";
  }
}

function twelve() {
  if (blackPallete === 1) {
  document.getElementById("twelve").style.backgroundColor = "black";
  } else if (bluePallete === 1) {
    document.getElementById("twelve").style.backgroundColor = "blue";
  } else if (yellowPallete === 1) {
    document.getElementById("twelve").style.backgroundColor = "yellow";
  } else if (greenPallete === 1) {
    document.getElementById("twelve").style.backgroundColor = "green";
  }
}

function thirteen() {
  if (blackPallete === 1) {
  document.getElementById("thirteen").style.backgroundColor = "black";
  } else if (bluePallete === 1) {
    document.getElementById("thirteen").style.backgroundColor = "blue";
  } else if (yellowPallete === 1) {
    document.getElementById("thirteen").style.backgroundColor = "yellow";
  } else if (greenPallete === 1) {
    document.getElementById("thirteen").style.backgroundColor = "green";
  }
}

function fourteen() {
  if (blackPallete === 1) {
  document.getElementById("fourteen").style.backgroundColor = "black";
  } else if (bluePallete === 1) {
    document.getElementById("fourteen").style.backgroundColor = "blue";
  } else if (yellowPallete === 1) {
    document.getElementById("fourteen").style.backgroundColor = "yellow";
  } else if (greenPallete === 1) {
    document.getElementById("fourteen").style.backgroundColor = "green";
  }
}

function fifteen() {
  if (blackPallete === 1) {
  document.getElementById("fifteen").style.backgroundColor = "black";
  } else if (bluePallete === 1) {
    document.getElementById("fifteen").style.backgroundColor = "blue";
  } else if (yellowPallete === 1) {
    document.getElementById("fifteen").style.backgroundColor = "yellow";
  } else if (greenPallete === 1) {
    document.getElementById("fifteen").style.backgroundColor = "green";
  }
}

function sixteen() {
  if (blackPallete === 1) {
  document.getElementById("sixteen").style.backgroundColor = "black";
  } else if (bluePallete === 1) {
    document.getElementById("sixteen").style.backgroundColor = "blue";
  } else if (yellowPallete === 1) {
    document.getElementById("sixteen").style.backgroundColor = "yellow";
  } else if (greenPallete === 1) {
    document.getElementById("sixteen").style.backgroundColor = "green";
  }
}

function seventeen() {
  if (blackPallete === 1) {
  document.getElementById("seventeen").style.backgroundColor = "black";
  } else if (bluePallete === 1) {
    document.getElementById("seventeen").style.backgroundColor = "blue";
  } else if (yellowPallete === 1) {
    document.getElementById("seventeen").style.backgroundColor = "yellow";
  } else if (greenPallete === 1) {
    document.getElementById("seventeen").style.backgroundColor = "green";
  }
}

function eighteen() {
  if (blackPallete === 1) {
  document.getElementById("eighteen").style.backgroundColor = "black";
  } else if (bluePallete === 1) {
    document.getElementById("eighteen").style.backgroundColor = "blue";
  } else if (yellowPallete === 1) {
    document.getElementById("eighteen").style.backgroundColor = "yellow";
  } else if (greenPallete === 1) {
    document.getElementById("eighteen").style.backgroundColor = "green";
  }
}

function nineteen() {
  if (blackPallete === 1) {
  document.getElementById("nineteen").style.backgroundColor = "black";
  } else if (bluePallete === 1) {
    document.getElementById("nineteen").style.backgroundColor = "blue";
  } else if (yellowPallete === 1) {
    document.getElementById("nineteen").style.backgroundColor = "yellow";
  } else if (greenPallete === 1) {
    document.getElementById("nineteen").style.backgroundColor = "green";
  }
}

function twenty() {
  if (blackPallete === 1) {
  document.getElementById("twenty").style.backgroundColor = "black";
  } else if (bluePallete === 1) {
    document.getElementById("twenty").style.backgroundColor = "blue";
  } else if (yellowPallete === 1) {
    document.getElementById("twenty").style.backgroundColor = "yellow";
  } else if (greenPallete === 1) {
    document.getElementById("twenty").style.backgroundColor = "green";
  }
}

function twentyOne() {
  if (blackPallete === 1) {
  document.getElementById("twentyOne").style.backgroundColor = "black";
  } else if (bluePallete === 1) {
    document.getElementById("twentyOne").style.backgroundColor = "blue";
  } else if (yellowPallete === 1) {
    document.getElementById("twentyOne").style.backgroundColor = "yellow";
  } else if (greenPallete === 1) {
    document.getElementById("twentyOne").style.backgroundColor = "green";
  }
}

function twentyTwo() {
  if (blackPallete === 1) {
  document.getElementById("twentyTwo").style.backgroundColor = "black";
  } else if (bluePallete === 1) {
    document.getElementById("twentyTwo").style.backgroundColor = "blue";
  } else if (yellowPallete === 1) {
    document.getElementById("twentyTwo").style.backgroundColor = "yellow";
  } else if (greenPallete === 1) {
    document.getElementById("twentyTwo").style.backgroundColor = "green";
  }
}

function twentyThree() {
  if (blackPallete === 1) {
  document.getElementById("twentyThree").style.backgroundColor = "black";
  } else if (bluePallete === 1) {
    document.getElementById("twentyThree").style.backgroundColor = "blue";
  } else if (yellowPallete === 1) {
    document.getElementById("twentyThree").style.backgroundColor = "yellow";
  } else if (greenPallete === 1) {
    document.getElementById("twentyThree").style.backgroundColor = "green";
  }
}

function twentyFour() {
  if (blackPallete === 1) {
  document.getElementById("twentyFour").style.backgroundColor = "black";
  } else if (bluePallete === 1) {
    document.getElementById("twentyFour").style.backgroundColor = "blue";
  } else if (yellowPallete === 1) {
    document.getElementById("twentyFour").style.backgroundColor = "yellow";
  } else if (greenPallete === 1) {
    document.getElementById("twentyFour").style.backgroundColor = "green";
  }
}

function twentyFive() {
  if (blackPallete === 1) {
  document.getElementById("twentyFive").style.backgroundColor = "black";
  } else if (bluePallete === 1) {
    document.getElementById("twentyFive").style.backgroundColor = "blue";
  } else if (yellowPallete === 1) {
    document.getElementById("twentyFive").style.backgroundColor = "yellow";
  } else if (greenPallete === 1) {
    document.getElementById("twentyFive").style.backgroundColor = "green";
  }
}
