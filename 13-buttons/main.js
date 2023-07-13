'use strict'

const btnWrapper = document.querySelector('.btn-wrapper');
const btnsCount = document.querySelectorAll('.btn');
const countSum = document.querySelector('.count');
const countStore = {
  count: 0,
};

btnsCount.forEach((_, index) => {
  countStore[`btn${index + 1}`] = 0;
});


btnWrapper.addEventListener('click', (e) => {
  const targetElement = e.target;
  if (targetElement.classList.contains('btn')) {
    countStore.count += 1;
    countStore[`btn${targetElement.dataset.number}`] += 1;
    countSum.textContent = countStore.count;
    [...btnWrapper.children].map((btn, index) => {
      btn.textContent = `Нажми меня ${countStore[`btn${index + 1}`]}`;
    });
    targetElement.textContent = `Нажата ${
      countStore[`btn${targetElement.dataset.number}`]
    }`;
  }
});
