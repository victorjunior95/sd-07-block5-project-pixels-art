const BOX_SIZE = 5;
const mother = document.querySelector("#pixel-board");
console.log(mother);
for (let i = 0; i < BOX_SIZE; i += 1) {
  const horizontalDiv = document.createElement("div");
  horizontalDiv.classList.add("horiDiv");
  mother.appendChild(horizontalDiv);
  verticalPixel(horizontalDiv);
}

function verticalPixel(motherDiv) {
  for (let u = 0; u < BOX_SIZE; u += 1) {
    const singlePixel = document.createElement("div");
    singlePixel.classList.add("pixel");
    motherDiv.appendChild(singlePixel);
  }
}
