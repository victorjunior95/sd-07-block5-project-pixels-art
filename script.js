const selecionandoCor = document.getElementById('color-palette').children;
for (let index = 0; index < selecionandoCor.length; index += 1) {
  selecionandoCor[index].addEventListener('click', function () {
    document.getElementsByClassName('color selected')[0].classList.remove('selected');
    this.classList.add('selected');
  });
}
