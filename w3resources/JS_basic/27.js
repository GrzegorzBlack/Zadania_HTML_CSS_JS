// 27. Write a JavaScript program to check whether a string starts with
// 'Java' and false otherwise.

function checkString(string) {
  if ("Java" === string.substring(0, 4)) {
    return true;
  } else {
    return false;
  }
}

const isTrue = checkString("Javascript");

console.log(isTrue);
