//  Write a JavaScript program to count the number of
//  vowels in a given string.

function check(string) {
  let number = string.replace(/[^aeiou]/gi, "").length;
  return number;
}

console.log(check("brytnia"));
