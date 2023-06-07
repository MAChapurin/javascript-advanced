function getRandomNumberFromDiceDiapason(dice) {
  const sidesAmount = Number(dice.replace(/\D/g, ''));
  return Math.floor(Math.random() * sidesAmount + 1);
}

console.log(getRandomNumberFromDiceDiapason('d4'));
console.log(getRandomNumberFromDiceDiapason('d6'));
console.log(getRandomNumberFromDiceDiapason('d8'));
console.log(getRandomNumberFromDiceDiapason('d10'));
console.log(getRandomNumberFromDiceDiapason('d12'));
console.log(getRandomNumberFromDiceDiapason('d16'));
console.log(getRandomNumberFromDiceDiapason('d20'));
