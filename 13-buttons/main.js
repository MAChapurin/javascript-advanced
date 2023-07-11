const btnWrapper = document.querySelector('.btn-wrapper');
const countElement = document.querySelector('.count');

function* incrementCount() {
  let count = 0;
  while (true) {
    count += 1;
    yield count;
  }
}

const addOne = incrementCount();

btnWrapper.addEventListener('click', (e) => {
  const targetElement = e.target;
  if (targetElement.classList.contains('btn')) {
    [...btnWrapper.children].map((el) => (el.textContent = 'Нажми меня'));
    targetElement.textContent = 'Нажата';
    countElement.textContent = addOne.next().value;
  }
});
