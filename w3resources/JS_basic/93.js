// 93. Write a JavaScript program to find the maximal difference among all
// possible pairs of a given array of integers.

function program(arr) {
  let result = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let difference = Math.abs(arr[i] - arr[j]);
      result = Math.max(result, difference);
      console.log(result);
    }
  }
  return result;
}

console.log(program([1, 2, 3, 8, 9]));
