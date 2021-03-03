//85. Write a JavaScript code to divide a given array of positive integers
//into two parts. First element goes to first part, second element goes
//to second part, and third element goes to first part and so on.
// Now compute the sum of two parts and store into an array of size two.

function dividege(array) {
  let arr1 = [];
  let arr2 = [];

  for (let i = 0; i < array.length; i++) {
    if (i % 2 == 0) {
      arr1.push(array[i]);
    } else {
      arr2.push(array[i]);
    }
  }

  let sum1 = arr1.reduce((a, b) => {
    return a + b;
  });
  let sum2 = arr2.reduce((a, b) => {
    return a + b;
  });

  let lastSum = Array.of(sum1, sum2);
  return lastSum;
}

console.log(dividege([4, 7, 2, 10, 5, 1]));
