function checkAge(date) {
  const now = new Date();
  const birthday = new Date(date);
  if (now.getFullYear() - birthday.getFullYear() > 14) return true;
  if (now.getFullYear() - birthday.getFullYear() < 14) return false;
  return (
    birthday.getMonth() < now.getMonth() ||
    (birthday.getMonth() === now.getMonth() &&
      birthday.getDate() <= now.getDate())
  );
}

console.log(checkAge('2009-06-01'));
console.log(checkAge('2009-06-04'));
console.log(checkAge('2009-07-03'));
console.log(checkAge('2009-06-06'));
console.log(checkAge('2019-07-07'));
