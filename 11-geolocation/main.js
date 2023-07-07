'use strict';

function getCurrentCoords() {
  const promise = new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(navigator.geolocation);
        resolve(position.coords);
      });
    } else {
      reject(Error('No suport geolocation'));
    }
  });

  promise.then((data) => {
    const { latitude, longitude } = data;
    document.querySelector('#pos').textContent = `${latitude} ${longitude}`;
  });

  promise.catch((er) => {
    document.querySelector('#pos').textContent = er.message;
  });
}

const btn = document.querySelector('button');
btn.addEventListener('click', getCurrentCoords);
