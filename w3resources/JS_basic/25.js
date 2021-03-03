// 25. Write a JavaScript program to check whether a given positive number
// is a multiple of 3 or a multiple of 7.

function isMulti(x) {
  if (x <= 0) {
    return "Nieprawidłowa liczba!";
  } else {
    if (x % 3 === 0 || x % 7 === 0) {
      return true;
    } else {
      return false;
    }
  }
}

console.log(isMulti(31));
console.log(isMulti(30));
console.log(isMulti(-30));
