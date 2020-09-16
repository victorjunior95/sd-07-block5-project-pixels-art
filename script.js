let paleta = document.getElementById('color-palette');




document.getElementById('clear-board').addEventListener('click', function(){
  console.log('eu estou aqui');
  let pixels = document.querySelectorAll('.pixel');
  for(let index = 0; index < pixels.length; index += 1){
    pixels[index].style.backgroundColor = 'white';
  }
});

paleta.addEventListener('click', function() {
  pixels.style = paleta;
})



