const buttonStart = document.querySelector('button[data-start]');
const buttonStop = document.querySelector('button[data-stop]');
const bodyChangeColor = document.querySelector('body');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

let intervalValue = 0;

intervalValue = setInterval(() => {
  bodyChangeColor.style.backgroundColor = getRandomHexColor();
}, 1000);

buttonStop.disabled = true;

buttonStart.addEventListener('click', (element) => {
  element.target.disabled = true;
  buttonStop.disabled = false;
});

buttonStop.addEventListener('click', (element) => {
  element.target.disabled = true;
  buttonStart.disabled = false;
  clearInterval(intervalValue);
});


