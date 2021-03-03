//23. Write a JavaScript program to create a new string from a given string
// changing the position of first and last characters. The string length
// must be greater than or equal to 1

function change(str) {
  if (str.length >= 1) {
    let array = str.split("");
    console.log(array);
    let first = array.slice(0, 1);
    let last = array.slice(array.length - 1);
    let middle = array.slice(1, array.length - 1);

    console.log(first);
    console.log(middle);

    let newString = last.concat(middle, first).join("");
    return newString;
  } else {
    return str;
  }
}

const word = change("grubas");

console.log(word);
