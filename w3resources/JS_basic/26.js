// 26. Write a JavaScript program to create a new string from a given string taking
// the last 3 characters and added at both the front and back.
// The string length must be 3 or more.

function transform(string) {
  if (string.length < 3) {
    return "Za krótki wyraz!";
  } else {
    letters = string.substring(0, 3);
    //let newString = letters + string + letters;
    //return newString;
  }
}

console.log(transform("javascript"));
console.log(letters);
//console.log(window);
