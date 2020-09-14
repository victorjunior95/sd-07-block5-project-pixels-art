window.onload = function() {
  let selected = document.querySelector('.selected')
  let button = document.querySelector('#clear-board')

  let selectColor = function() {
    selected.classList.remove('selected')   
    event.target.classList.add('selected')
    selected = event.target
  }


  // https://flaviocopes.com/how-to-add-event-listener-multiple-elements-javascript/
  // paleta de cores
  document.querySelectorAll('.color').forEach(item => {
    item.addEventListener('click', event => {
      selectColor()
      console.log(selected)
    })
  })

  //pixeis
  document.querySelectorAll('.pixel').forEach(item => {
    item.addEventListener('click', event => {
      event.target.style.backgroundColor = window.getComputedStyle(selected).backgroundColor
    })
  })

  button.addEventListener('click', function() {
    let pixels = document.querySelectorAll('.pixel')
    pixels.forEach(item => {
      item.style.backgroundColor = 'White'
    })
  })

}
