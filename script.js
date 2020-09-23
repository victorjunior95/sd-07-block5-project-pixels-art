window.onload() {
  let numberOfLines = 5;
  var lines = document.querySelectorAll(".line");
  let className="box-empty";
  let color = document.getElementById("")
  let counter_id = 1;
  var color;

  fillSquare(lines);

  function fillSquare(lines)
  {
    for (let index = 0; index < lines.length; index++)
    {
      fillLine(lines[index]);
    }
  }

  function createBox(id)
  {
    let box = document.createElement("div");
    box.className = className;
    box.id = id;
    return(box);
  }

  function fillLine(divLine)
  {
    for (let lineColumn = 0; lineColumn < numberOfLines; lineColumn += 1)
    {
      divLine.appendChild(createBox(counter_id));
      counter_id++;
    }
  }
}

  function storeVariable_box1()
  {
    color = 'black';
  }
  function storeVariable_box2()
  {
    color = 'red';
  }
  function storeVariable_box3()
  {
    color = 'yellow';
  }
  function storeVariable_box4()
  {
    color = 'orange';
  }

  function changeColor(id)
  {
    document.getElementById(id).style.backgroundColor = color;
  }
