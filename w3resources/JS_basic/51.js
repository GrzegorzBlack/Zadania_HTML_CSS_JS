// 51. Write a JavaScript program to convert a given number to
// hours and minutes

function convert(number) {
  let hourz = Math.floor(number / 60);
  let num = number % 60;
  return `${hourz} : ${num}`;
}

console.log(convert(310));
