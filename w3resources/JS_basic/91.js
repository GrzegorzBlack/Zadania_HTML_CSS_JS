// 91. Write a JavaScript program to find the maximum possible sum of some of its
// k consecutive numbers (numbers that follow each other in order.) of a given
// array of positive integers.

function maximum(arr, k) {
  let sum = [];
  //let result = 0;
  let newK = k - 1;
  console.log(sum);
  for (let i = 0; i < arr.length - newK; i++) {
    let newArr = arr.slice(i, i + k);
    console.log(newArr);
    let result = newArr.reduce((a, b) => a + b);
    sum.push(result);
  }
  let maxNumber = Math.max(...sum);
  return maxNumber;
}

console.log(maximum([1, 2, 3, 14, 5], 2));

//console.log(maximum([2, 3, 5, 1, 6], 3));
