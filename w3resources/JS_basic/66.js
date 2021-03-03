// 66. Write a JavaScript program to display the city name if the string begins
// with "Los" or "New" otherwise return blank.

function display(str) {
  let first = str.substring(0, 3);
  if (first === "New" || first === "Los") {
    return str;
  } else {
    return "  ";
  }
}

console.log(display("New Mexico"));
