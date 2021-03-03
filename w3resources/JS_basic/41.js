// 41. Write a JavaScript program to check three given numbers, if the
// three numbers are same return 30 otherwise return 20 and if two
// numbers are same return 40.

function checkNumbers(a, b, c) {
  if (a === b && b === c) {
    return 30;
  } else if (a === b || b === c || a === c) {
    return 40;
  } else {
    return 20;
  }
}

console.log(checkNumbers(20, 10, 20));
