// 35. Write a program to check whether a specified character exists within
// the 2nd to 4th position in a given string

function checkString(x, string) {
  let newString = string.substring(1, 4);
  //console.log(newString);
  if (newString.includes(x)) {
    return true;
  } else {
    return false;
  }
}

console.log(checkString("a", "javascript"));
