//64. Write a JavaScript program to concatenate two strings and return the result.
//If the length of the strings are not same then remove the characters
//from the longer string.

function concat(str1, str2) {
  if (str1.length !== str2.length) {
    if (str1.length > str2.length) {
      let str2Length = str2.length;
      let newStr = str1.substring(str2Length);

      return newStr + str2;
    } else {
      let str1Length = str1.length;
      let newStr = str2.substring(0, str1Length);
      return str1 + newStr;
    }
  } else {
    return str1 + str2;
  }
}

console.log(concat("java", "script"));
