// Write a JavaScript program to divide two positive numbers and
// return a string with properly formatted commas.

function divide(x, y) {
  let div = Math.round(x / y)
    .toString()
    .split("");
  console.log(div);
  return div;
}

console.log(divide(80, 60));
