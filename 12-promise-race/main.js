'use strict';

const USERS_URL = 'https://jsonplaceholder.typicode.com/users/';

Promise.myRace = function (promises) {
  return new Promise(function (resolve, reject) {
    promises.map((promise) => promise.then(resolve, reject));
  });
};

async function getUserById(id) {
  const res = await fetch(`${USERS_URL}${id}`);
  if (!res.ok) {
    throw new Error('Something go wrong!');
  }
  const user = await res.json();
  return user;
}

async function raceUser(arr) {
  try {
    const result = await Promise.myRace(arr);
    return result;
  } catch (error) {
    throw error;
  }
}

raceUser([getUserById(1), getUserById(2), getUserById(13)])
  .then(console.log)
  .catch(error => console.log(error));
