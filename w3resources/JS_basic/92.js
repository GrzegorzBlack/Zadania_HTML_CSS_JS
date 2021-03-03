// 92. Write a JavaScript program to find the maximal difference between any two
// adjacent elements of a given array of integers.

function program(array) {
  let results = [];
  let sum = [];
  for (let i = 0; i < array.length - 1; i++) {
    let difference = Math.abs(array[i] - array[i + 1]);
    //console.log(difference);
    results.push(difference);
    //console.log(sum);
  }
  //console.log(sum);
  let max = Math.max(...results);
  return max;
}

console.log(program([1, 2, 3, 8, 9]));
