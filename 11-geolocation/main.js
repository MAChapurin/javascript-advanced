'use strict';

function getCurrentCoords() {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        resolve(position.coords);
      });
    } else {
      reject(Error('No suport geolocation'));
    }
  });
}

function renderCoords(element) {
  getCurrentCoords()
    .then((data) => {
      const { latitude, longitude } = data;
      element.textContent = `${latitude} ${longitude}`;
    })
    .catch((error) => {
      element.textContent = error.message;
    });
}

const btn = document.querySelector('button');
const position = document.querySelector('#pos');

btn.addEventListener('click', () => {
  renderCoords(position);
});
