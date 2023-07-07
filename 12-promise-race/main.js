'use strict';

async function getUserById(id) {
  const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
  if (!res.ok) {
    throw new Error('Something go wrong!')
  }
  const user = await res.json();
  return user;
}


async function race(arr) {
  try {
    const result = await Promise.race(arr);
    return result;
  }
  catch(e) {
    console.log(e.message);
  }
}


async function logUser(arr) {
  const resultUser = await race(arr)
  console.log(resultUser);
}

logUser([getUserById(1), getUserById(2), getUserById(13)])
