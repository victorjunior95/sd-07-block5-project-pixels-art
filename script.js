let selected = document.getElementsByClassName("color")[0]
selected.addEventListener("click", function(){
    selected1.classList.remove('selected')
    selected2.classList.remove('selected')
    selected3.classList.remove('selected')
    this.classList.add('selected')
    console.log(selected)
})
let selected1 = document.getElementsByClassName("color")[1]
selected1.addEventListener("click", function(){
    selected.classList.remove('selected')
    selected2.classList.remove('selected')
    selected3.classList.remove('selected')
    this.classList.add('selected')
    console.log(selected1)
})

let selected2 = document.getElementsByClassName("color")[2]
selected2.addEventListener("click", function(){
    selected.classList.remove('selected')
    selected1.classList.remove('selected')
    selected3.classList.remove('selected')
    this.classList.add('selected')
    console.log(selected2)
})

let selected3 = document.getElementsByClassName("color")[3]
selected3.addEventListener("click", function(){
    selected.classList.remove('selected')
    selected1.classList.remove('selected')
    selected2.classList.remove('selected')
    this.classList.add('selected')
    console.log(selected3)
})

