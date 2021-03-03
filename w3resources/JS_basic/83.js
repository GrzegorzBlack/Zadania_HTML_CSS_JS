// 83. Write a JavaScript to find the longest string from a given
// array of strings.

function long(array) {
  let longestStr = array.reduce((acc, current) =>
    acc.length > current.length ? acc : current
  );
  return longestStr;
}

console.log(long(["first", "second", "third", "longestttt"]));
