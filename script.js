let button = document.getElementById('clear-board');
button.addEventListener("click", function () {
  document.querySelectorAll(".pixel").forEach(allToWhite);
});

function allToWhite(item) {
  item.style.backgroundColor = "white";
}

