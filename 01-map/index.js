'use strict';

function getUnigArrayOfObj(arr) {
  const arrayToJSON = arr.map((el) => JSON.stringify(el));
  const arrayWithoutRepeatingElements = new Set(arrayToJSON);
  return [...arrayWithoutRepeatingElements].map((el) => JSON.parse(el));
}

const users = [
  { id: 1, name: 'Wasya' },
  { id: 2, name: 'Petya' },
  { id: 3, name: 'Sveta' },
  { id: 4, name: 'Rita' },
  { id: 5, name: 'Oleg' },
  { id: 1, name: 'Wasya' },
  { id: 3, name: 'Sveta' },
  { id: 4, name: 'Rita' },
];

console.log('Исходный массив: \n', users);
console.log('Уникализированный масссив: \n', getUnigArrayOfObj(users));
