// 17. Write a JavaScript program to compute the absolute difference between
// a specified number and 19. Returns triple their absolute difference
// if the specified number is greater than 19.

function difference(x) {
  let num = 19;
  let result;
  if (x > 19) {
    return (result = Math.abs((x - 19) * 3));
  } else {
    return (result = Math.abs(19 - x));
  }
}

console.log(difference(10));
console.log(difference(30));
