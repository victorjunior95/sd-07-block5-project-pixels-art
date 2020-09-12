let color = "black";
function resetSelector (){
    document.querySelector('.black').className = 'color black box';
    document.querySelector('.green').className = 'color green box';
    document.querySelector('.blue').className = 'color blue box';
    document.querySelector('.red').className = 'color red box';
}
const blackPicker = document.querySelector('.black');
blackPicker.addEventListener('click', function (){
    color = "black";
    resetSelector();
    document.querySelector('.black').className = 'color black box selected';
});

const greenPicker = document.querySelector('.green');
greenPicker.addEventListener('click', function (){
    color = "green";
    resetSelector();
    document.querySelector('.green').className = 'color green box selected';
});

const bluePicker = document.querySelector('.blue');
bluePicker.addEventListener('click', function (){
    color = "blue";
    resetSelector();
    document.querySelector('.blue').className = 'color blue box selected';
});

const redPicker = document.querySelector('.red');
redPicker.addEventListener('click', function (){
    color = 'red';
    resetSelector();
    document.querySelector('.red').className = 'color red box selected';
});

// https://flaviocopes.com/how-to-add-event-listener-multiple-elements-javascript/
document.querySelectorAll('.pixel').forEach(item => {
    item.addEventListener('click', event => {
      item.style.backgroundColor = color;
    })
  })