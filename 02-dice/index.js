function dice(side) {
  const num = Number(side.replace(/\D/g, ''));
  return Math.floor(Math.random() * num + 1);
}

console.log(dice('d4'));
console.log(dice('d6'));
console.log(dice('d8'));
console.log(dice('d10'));
console.log(dice('d12'));
console.log(dice('d16'));
console.log(dice('d20'));
