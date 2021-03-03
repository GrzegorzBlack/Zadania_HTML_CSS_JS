//28. Write a JavaScript program to check whether two given integer values
// are in the range 50..99 (inclusive). Return true if either of them
// are in the said range.

function checkNumbers(x, y) {
  if ((x >= 50 && x <= 99) || (y >= 50 && y <= 99)) {
    return true;
  } else {
    return false;
  }
}

const numbers = checkNumbers(50, 100);
console.log(numbers);

function front_back3(str) {
  if (str.length >= 3) {
    str_len = 3;

    back = str.substring(str.length - 3);
    return back + str + back;
  } else return false;
}
console.log(front_back3("abc"));

console.log(window.back);
