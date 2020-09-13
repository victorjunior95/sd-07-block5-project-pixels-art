let colorEnter = document.getElementById('black-index');
document.querySelectorAll('.color').forEach(clickToConfigurePallete);

function removeAll(item) {
  item.classList.remove('selected');
}

function clickToConfigurePallete(item) {
  item.addevenListener("click", function () {
    document.querySelectorAll(".color").forEach(removeAll);
    item.classList.add("selected");
  });
}

const button = querySelector("#clear-board");
button.addevenListener("click", function () {
  document.querySelectorAll(".pixel").forEach(allToWhite);
});

function allToWhite(item) {
  item.style.backgroundColor = "white";
}
