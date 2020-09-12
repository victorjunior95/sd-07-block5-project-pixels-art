let color = "black";
const blackPicker = document.querySelector('.black');
blackPicker.addEventListener('click', function (){
    color = "black";
});

const greenPicker = document.querySelector('.green');
greenPicker.addEventListener('click', function (){
    color = "green";
});

const bluePicker = document.querySelector('.blue');
bluePicker.addEventListener('click', function (){
    color = "blue";
});

const redPicker = document.querySelector('.red');
redPicker.addEventListener('click', function (){
    color = 'red';
})
for(index = 0; index < document.querySelectorAll('.pixel').length; index += 1){
    let pixel = document.querySelectorAll('.pixel')[1];
    pixel.addEventListener('click', function (){
        document.querySelectorAll('.pixel')[1].style.backgroundColor = color;
    })
}