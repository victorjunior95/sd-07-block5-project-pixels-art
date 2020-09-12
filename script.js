window.onload = function () {
  let BOX_SIZE = 5;
  let DEFAULT_COLOR = "black";
  const mother = document.querySelector("#pixel-board");

  document.getElementsByClassName("color")[0].style.backgroundColor = "black";
  document.getElementsByClassName("color")[1].style.backgroundColor = "red";
  document.getElementsByClassName("color")[2].style.backgroundColor = "blue";
  document.getElementsByClassName("color")[3].style.backgroundColor = "green";

  function DefineSize() {
    for (let i = 0; i < BOX_SIZE; i += 1) {
      const horizontalDiv = document.createElement("div");
      horizontalDiv.classList.add("horiDiv");
      mother.appendChild(horizontalDiv);
      verticalPixel(horizontalDiv);
    }
  }
  DefineSize();

  function verticalPixel(motherDiv) {
    for (let u = 0; u < BOX_SIZE; u += 1) {
      const singlePixel = document.createElement("div");
      singlePixel.classList.add("pixel");
      motherDiv.appendChild(singlePixel);
      singlePixel.addEventListener("click", () => {
        singlePixel.style.backgroundColor = DEFAULT_COLOR;
      });
    }
  }

  const amountPaleta = 4;
  for (let a = 0; a < amountPaleta; a += 1) {
    const color = document.getElementsByClassName("color")[a];
    color.addEventListener("click", () => {
      DEFAULT_COLOR = color.style.backgroundColor;
    });
  }

  document.querySelector(".clear").addEventListener("click", () => {
    const element = document.getElementsByClassName("pixel");
    for (let a = 0; a < element.length; a += 1) {
      element[a].style.backgroundColor = "white";
    }
  });

  document.querySelector("#generate-board").addEventListener("click", () => {
    const size = document.querySelector("#board-size").value;
    if (size == "") {
      return alert("Board inválido!");
    } else {
      BOX_SIZE = size;
      //document.querySelector("#pixel-board").removeChild;
      DefineSize();
    }
  });
};
