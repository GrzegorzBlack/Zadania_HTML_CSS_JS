// Write a JavaScript program to check whether a given number is presents in
// the range 40..10000. For example 40 presents in 40 and 4000

function range(x) {
  if (x >= 40 && x <= 10000) {
    return true;
  } else {
    return false;
  }
}

console.log(range(41));
