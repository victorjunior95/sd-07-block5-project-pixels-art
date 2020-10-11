const colors = document.querySelectorAll('.color');

colors[0].className = 'color selected';

const setColor = (selectedColor) => {
  colors.forEach((element, index) => {
    if (index !== selectedColor) {
      element.className = 'color';
    } else {
      element.className = 'color selected';
    }
  });
};

colors[0].addEventListener('click', () => setColor(0));
colors[1].addEventListener('click', () => setColor(1));
colors[2].addEventListener('click', () => setColor(2));
colors[3].addEventListener('click', () => setColor(3));
