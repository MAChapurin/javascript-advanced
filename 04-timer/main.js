'use strict';

const SECONDS_IN_MILLISECONDS = 1000;
const MINUTE_IN_MILLISECONDS = 1000 * 60;
const HOUR_IN_MILLISECONDS = MINUTE_IN_MILLISECONDS * 60;

const yearsWords = ['год', 'года', 'лет'];
const secondsWords = ['секунда', 'секунды', 'секунд'];
const minutesWords = ['минута', 'минуты', 'минут'];
const hoursWords = ['час', 'часа', 'часов'];
const daysWords = ['день', 'дня', 'дней'];
const monthWords = ['месяц', 'месяца', 'месяцев'];

const pluralRules = new Intl.PluralRules('ru');

function pluralize(count, singular, few, plural) {
  const grammaticalNumber = pluralRules.select(count);
  switch (grammaticalNumber) {
    case 'many':
      return plural;
    case 'one':
      return singular;
    case 'few':
      return few;
    case 'other':
      return plural;
    default:
      throw new Error('Unknown: ' + grammaticalNumber);
  }
}

function updateDate(element, date, timerId, text = '') {
  if (!element) return;
  const targetDate = date;
  const now = new Date();
  const restTime = targetDate - now;
  if (restTime <= 0) {
    clearInterval(timerId);
  }
  const daysInCurrentMonth = new Date(
    now.getFullYear(),
    now.getMonth() + 1,
    0
  ).getDate();

  const getRestYears = () => {
    const yearsRest = date.getFullYear() - now.getFullYear();
    const currentMonth = now.getMonth();
    const dateMonth = targetDate.getMonth();
    switch (yearsRest) {
      case 0:
        return 0;
      case 1:
        return currentMonth < dateMonth ? 1 : 0;

      default:
        return yearsRest;
    }
  };

  const getRestMonths = () => {
    if (now.getFullYear() === date.getFullYear()) {
      return date.getMonth() - now.getMonth() - 1;
    }
    if (date.getFullYear() - now.getFullYear() === 1) {
      const result = 11 - now.getMonth() + date.getMonth();
      return result >= 12 ? result % 12 : result;
    }
    return 11 - now.getMonth();
  };

  const getRestDays = () => {
    if (
      now.getFullYear() === targetDate.getFullYear() &&
      now.getMonth() === targetDate.getMonth()
    ) {
      return targetDate.getDate() - now.getDate();
    }
    return daysInCurrentMonth - now.getDate() + date.getDate();
  };

  const years = getRestYears();
  const month = getRestMonths();
  const days = getRestDays();
  const hours = Math.floor(restTime / HOUR_IN_MILLISECONDS) % 24;
  const minutes = Math.floor(restTime / MINUTE_IN_MILLISECONDS) % 60;
  const seconds = Math.floor(restTime / SECONDS_IN_MILLISECONDS) % 60;
  element.textContent = `${text} 
  ${years > 0 ? `${years} ${pluralize(years, ...yearsWords)}` : ''}
  ${month > 0 ? `${month} ${pluralize(month, ...monthWords)}` : ''}
  ${days > 0 ? `${days} ${pluralize(days, ...daysWords)}` : ''}
  ${hours > 0 ? `${hours} ${pluralize(hours, ...hoursWords)}` : ''}
  ${minutes > 0 ? `${minutes} ${pluralize(minutes, ...minutesWords)}` : ''}
  ${seconds > 0 ? `${seconds} ${pluralize(seconds, ...secondsWords)}` : ''}`;
}

const timer1 = document.getElementById('timer1');
const timer2 = document.getElementById('timer2');
const timer3 = document.getElementById('timer3');
const timer4 = document.getElementById('timer4');
const newYear = new Date(2077, 0, 1);
const timerId1 = setInterval(() => {
  updateDate(timer1, newYear, timerId1, 'До нового 2077 года остается');
}, 1000);
const timerId2 = setInterval(() => {
  updateDate(
    timer2,
    new Date(2023, 8, 3),
    timerId2,
    'До третьего сентября 2023 остается'
  );
}, 1000);

const timerId3 = setInterval(() => {
  updateDate(
    timer3,
    new Date(2024, 5, 1),
    timerId3,
    'До следующего лета остается'
  );
}, 1000);

const timerId4 = setInterval(() => {
  updateDate(
    timer4,
    new Date(2024, 0, 1),
    timerId4,
    'До нового года осталось'
  );
}, 1000);
