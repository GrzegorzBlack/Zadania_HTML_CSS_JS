// 59. Write a JavaScript program to extract the first half
//of a string of even length.

function extract(str) {
  if (str.length % 2 === 0) {
    return str.substring(0, str.length / 2);
  } else {
    return "String have wrong length";
  }
}

console.log(extract("kotubeoraura"));
