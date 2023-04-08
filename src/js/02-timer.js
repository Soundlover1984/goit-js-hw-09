import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';


const dateInput = document.querySelector('#datetime-picker');
const btnStart = document.querySelector('[data-start]');
const dayRemain = document.querySelector('[data-days]');
const hourRemain = document.querySelector('[data-hours]');
const minRemain = document.querySelector('[data-minutes]');
const secRemain = document.querySelector('[data-seconds]');
const spansValue = document.querySelectorAll('.value');

let timerValue = null;

btnStart.disabled = true;

flatpickr(dateInput, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] <= Date.now()) {
      Notiflix.Notify.failure('Please choose a date in the future');
      btnStart.disabled = true;
    } else {
      btnStart.disabled = false;
      Notiflix.Notify.success('OK, go!!!');
    }
  },
});

btnStart.addEventListener('click', onBtnStart);

function addLeadingZero(value) {
  return `${value}`.padStart(2, '0');
}

function onBtnStart() {
    dateInput.disabled = true;
    btnStart.disabled = true;
    timerValue = setInterval(() => {
    const chosenDate = new Date(dateInput.value);
    const targetTime = chosenDate - Date.now();
    const { days, hours, minutes, seconds } = convertMs(targetTime);

    dayRemain.textContent = addLeadingZero(days);
    hourRemain.textContent = addLeadingZero(hours);
    minRemain.textContent = addLeadingZero(minutes);
    secRemain.textContent = addLeadingZero(seconds);

    if (targetTime < 1000) {
      clearInterval(timerValue);
      dateInput.disabled = false;
    }
  }, 1000);
}

function convertMs(ms) {
  // Number of milliseconds in each unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}



