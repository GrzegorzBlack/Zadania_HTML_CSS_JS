//22. Write a JavaScript program to remove a character at the specified position
// of a given string and return the new string.

function program(string, x) {
  let char = string.slice(x - 1, x);
  return char;
}

console.log(program("charakter", 5));

console.log(program("kapitan", 6));

console.log(program("javascript", 3));
