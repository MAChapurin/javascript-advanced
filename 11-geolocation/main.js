'use strict';

const btn = document.querySelector('button');
const position = document.querySelector('#pos');

function getCurrentCoords() {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(({ coords }) => {
        resolve(coords);
      });
    } else {
      reject(Error('No suport geolocation'));
    }
  });
}

function renderCoords() {
  getCurrentCoords()
    .then(({ latitude, longitude }) => {
      position.textContent = `${latitude} ${longitude}`;
    })
    .catch((error) => {
      position.textContent = error.message;
    });
}

btn.addEventListener('click', renderCoords);
