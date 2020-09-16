




document.getElementById('clear-board').addEventListener('click', function(){
  console.log('eu estou aqui');
  let pixels = document.querySelectorAll('.pixel');
  for(let index = 0; index < pixels.length; index += 1){
    pixels[index].style.backgroundColor = 'white';
  }
});


document.getElementById('color-palette').addEventListener('click', function(){
  console.log("estou aqui");
  let paletaDeCores = document.querySelectorAll('.color');
  for(let index = 0; index < paletaDeCores.length; index += 1){

  }

})

