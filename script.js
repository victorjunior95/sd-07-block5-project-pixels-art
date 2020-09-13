function black() {
  document.getElementsByClassName('black').class = 'color black selected';
  document.getElementsByClassName('blue').class = 'color blue';
  document.getElementsByClassName('yellow').class = 'color yellow';
  document.getElementsByClassName('green').class = 'color green';
}

function blue() {
  document.getElementsByClassName('blue').class = 'color blue selected';
  document.getElementsByClassName('black').class = 'color black';
  document.getElementsByClassName('yellow').class = 'color yellow';
  document.getElementsByClassName('green').class = 'color green';
}

function yellow() {
  document.getElementsByClassName('yellow').class = 'color yellow selected';
  document.getElementsByClassName('black').class = 'color black';
  document.getElementsByClassName('blue').class = 'color blue';
  document.getElementsByClassName('green').class = 'color green';
}

function green() {
  document.getElementsByClassName('green').class = 'color green selected';
  document.getElementsByClassName('black').class = 'color black';
  document.getElementsByClassName('blue').class = 'color blue';
  document.getElementsByClassName('yellow').class = 'color yellow';
}
