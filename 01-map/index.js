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

const newSet = new Set();
users.map((el, _, users) => {
  newSet.add(users.find((user) => user.id === el.id && user.name === el.name));
});

console.log('Исходный массив: \n', users);
console.log('Уникализированный с помощью Set масссив: \n',[...newSet]);
