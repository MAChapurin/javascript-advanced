'use strict';

function getUnigArrayOfObj(arr) {
  return [...new Set(arr.map((el) => JSON.stringify(el)))].map((el) =>
    JSON.parse(el)
  );
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
