//document.getElementsByClassName('black').class = 'color black selected';

function black() {
  document.getElementsByClassName('black').class = 'color black selected';
  document.getElementsByClassName('blue').class = 'color blue';
  document.getElementsByClassName('yellow').class = 'color yellow';
  document.getElementsByClassName('green').class = 'color green';
}

function blue() {
  document.getElementsByClassName('black').class = 'color black';
  document.getElementsByClassName('blue').class = 'color blue selected';
  document.getElementsByClassName('yellow').class = 'color yellow';
  document.getElementsByClassName('green').class = 'color green';
}

function yellow() {
  document.getElementsByClassName('black').class = 'color black';
  document.getElementsByClassName('blue').class = 'color blue';
  document.getElementsByClassName('yellow').class = 'color yellow selected';
  document.getElementsByClassName('green').class = 'color green';
}

function green() {
  document.getElementsByClassName('black').class = 'color black';
  document.getElementsByClassName('blue').class = 'color blue';
  document.getElementsByClassName('yellow').class = 'color yellow';
  document.getElementsByClassName('green').class = 'color green selected';
}
