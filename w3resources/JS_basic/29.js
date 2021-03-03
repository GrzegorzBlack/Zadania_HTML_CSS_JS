// 29. Write a JavaScript program to check whether three given integer values
// are in the range 50..99 (inclusive). Return true if one or more of them
// are in the said range.

function checkNumbers(x, y, z) {
  if ((x >= 50 && x <= 99) || (y >= 50 && y <= 99) || (z >= 50 && z <= 99)) {
    return true;
  } else {
    return false;
  }
}

const numbers = checkNumbers(50, 100, 30);
console.log(numbers);
