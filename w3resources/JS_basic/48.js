// 48. Write a JavaScript program to reverse a given string.

function reverse(str) {
  let string = str.split("");
  console.log(string);
  string = string.reverse().join("");
  console.log(string);
}

reverse("kobieta");
