//33. Write a JavaScript program to check whether two numbers are in
// range 40..60 or in the range 70..100 inclusive.

function integers(x, y) {
  if ((x, y >= 40 && x, y <= 60)) {
    return "Numbers are in the range 40-60";
  } else if ((x, y >= 70, x, y <= 100)) {
    return "Numbers are in the range 70-100";
  } else {
    return "Number are not in the given ranges";
  }
}

console.log(integers(50, 60));
