function checkAge(date) {
  const now = new Date();
  const year = 3.154e10;
  const birthday = new Date(date);
  if (now.getFullYear() - birthday.getFullYear() > 14) return true;
  let birthdayYear = now.getFullYear() - birthday.getFullYear();
  if (birthdayYear === 14) {
    birthdayYear += 1;
  }
  return (
    birthday.getMonth() >= now.getMonth() && birthday.getDate() >= now.getDate()
  );
}

console.log(checkAge('2009-06-01'));
console.log(checkAge('2009-06-02'));
console.log(checkAge('2009-06-03'));
console.log(checkAge('2009-06-04'));
console.log(checkAge('2010-06-01'));