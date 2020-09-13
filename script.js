let button = document.getElementById('clear-board');
button.addevenListener("click", function () {
  document.querySelectorAll(".pixel").forEach(allToWhite);
});

function allToWhite(item) {
  item.style.backgroundColor = "white";
}
