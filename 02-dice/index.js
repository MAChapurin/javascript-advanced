function dice(dice) {
  const sidesAmount = Number(dice.replace(/\D/g, ''));
  return Math.floor(Math.random() * sidesAmount + 1);
}

console.log(dice('d4'));
console.log(dice('d6'));
console.log(dice('d8'));
console.log(dice('d10'));
console.log(dice('d12'));
console.log(dice('d16'));
console.log(dice('d20'));
