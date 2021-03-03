// 37. Write a JavaScript program to create new string with first 3 characters are in lower
// case from a given string. If the string length is less than 3 convert all the
// characters in upper case.

function transform(string) {
  if (string.length >= 3) {
    let newString = string.substring(0, 3).toLowerCase();
    let rest = string.substring(3);

    return (newString = newString + rest);
  } else {
    return string.toUpperCase();
  }
}

console.log(transform("Soubhan El Kalima"));
