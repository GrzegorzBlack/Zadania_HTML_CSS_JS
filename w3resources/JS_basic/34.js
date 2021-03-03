//34. Write a JavaScript program to find the larger number from the two given
// positive integers, the two numbers are in the range 40..60 inclusive.

function check(x, y) {
  if ((x, y >= 40 && x, y <= 60)) {
    if (x !== y) {
      let biggerNum = Math.max(x, y);
      return biggerNum;
    } else {
      return `Integers are the same!`;
    }
  } else {
    return "Numbers are outside the range";
  }
}

console.log(check(40, 70));
