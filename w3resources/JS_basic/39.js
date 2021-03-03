// 39. Write a JavaScript program to compute the sum of the two given integers,
// If the sum is in the range 50..80 return 65 other wise return 80.

function sum(x, y) {
  let sumNum = x + y;
  if (sumNum >= 50 && sumNum <= 80) {
    return 65;
  } else {
    return 80;
  }
}

console.log(sum(30, 50));
