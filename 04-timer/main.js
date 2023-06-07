'use strict';

let timerId = null;

const secondsWords = ['секунда', 'секунды', 'секунд'];
const minutesWords = ['минута', 'минуты', 'минут'];
const hoursWords = ['час', 'часа', 'часов'];
const daysWords = ['день', 'дня', 'дней'];
const monthWords = ['месяц', 'месяца', 'месяцев'];

function getIndexForWord(num) {
  if (num > 10 && num < 20) return 2;
  if (num === 1 || num % 10 === 1) return 0;
  if ([2, 3, 4].includes(num) || [2, 3, 4].includes(num % 10)) return 1;
  return 2;
}

function updateDate() {
  const newYear = new Date(2024, 0, 1, 0, 0, 0);
  const now = new Date();
  const restTime = newYear - now;
  if (restTime <= 0) {
    clearInterval(timerId);
  }
  const daysInCurrentMonth = new Date(
    2023,
    new Date().getMonth() + 1,
    0
  ).getDate();
  const month = restTime > 0 ? 11 - now.getMonth() : 0;
  const days = restTime > 0 ? daysInCurrentMonth - now.getDate() : 0;
  const hours = restTime > 0 ? Math.floor(restTime / 1000 / 60 / 60) % 24 : 0;
  const minutes = restTime > 0 ? Math.floor(restTime / 1000 / 60) % 60 : 0;
  const seconds = restTime > 0 ? Math.floor(restTime / 1000) % 60 : 0;
  document.querySelector(
    '.title'
  ).textContent = `До нового года осталось ${month} ${
    monthWords[getIndexForWord(month)]
  }, ${days} ${daysWords[getIndexForWord(days)]}, ${hours} ${
    hoursWords[getIndexForWord(hours)]
  }, ${minutes} ${minutesWords[getIndexForWord(minutes)]}, ${seconds} ${
    secondsWords[getIndexForWord(seconds)]
  }`;
}

updateDate();
timerId = setInterval(updateDate, 1000);
