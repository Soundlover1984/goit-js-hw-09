
const buttonStart = document.querySelector('button[data-start]');
const buttonStop = document.querySelector('button[data-stop]');
let intervalValue = 0;

function changeColor() {
  document.body.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0")}`;
}

buttonStart.addEventListener('click', function() {
  intervalValue = setInterval(changeColor, 1000);
  buttonStart.setAttribute('disabled', 'true');
  buttonStop.removeAttribute('disabled');
});

buttonStop.addEventListener('click', function() {
  clearInterval(intervalValue);
  buttonStop.setAttribute('disabled', 'true');
  buttonStart.removeAttribute('disabled');
});


