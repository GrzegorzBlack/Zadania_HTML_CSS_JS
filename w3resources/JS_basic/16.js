// Write a JavaScript program to compute the sum of the two given integers.
// If the two values are same, then returns triple their sum.

function add(x, y) {
  let sum;
  if (x === y) {
    return (sum = (x + y) * 3);
  } else {
    return (sum = x + y);
  }
}

console.log(add(3, 10));

console.log(add(5, 5));
