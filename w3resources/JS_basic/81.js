// 81. Write a JavaScript program to add two digits of a given positive
// integer of length two.

function program(number) {
  let str = number.toString();
  console.log(str[0]);
  let add = Number(str[0]) + Number(str[1]);
  return add;
}

console.log(program(26));
