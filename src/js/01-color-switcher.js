const buttonStart = document.querySelector('[data-start]');
const buttonStop = document.querySelector('[data-stop]');
let intervalValue = null;

const changeColor = () => {
  document.body.style.backgroundColor = `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
};

buttonStop.disabled = true;

buttonStart.addEventListener('click', () => {
  intervalValue = setInterval(changeColor, 1000);
  buttonStart.disabled = true;
  buttonStop.disabled = false;
});

buttonStop.addEventListener('click', () => {
  clearInterval(intervalValue);
  buttonStop.disabled = true;
  buttonStart.disabled = false;
});
