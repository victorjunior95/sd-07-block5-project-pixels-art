
const colors = ['black', 'green', 'yellow','blue'];
let paleta = document.getElementsByClassName("color")

for (const index in paleta) {
    paleta[index].classList.add(colors[index])
}


