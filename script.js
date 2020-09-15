let colors = document.querySelectorAll('.color');

for (let i = 0; i < colors.length; i += 1) {
    colors[i].addEventListener('click', function() {
        let selected = document.querySelector('.selected')

        selected.classList.remove('selected');

        colors[i].classList.add('selected')
    })
}
