// 94. Write a JavaScript program to find the number which appears most in a given
// array of integers.

function findNum(arr) {
  let number;
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    number = arr.filter((val) => val == arr[i]);
    //console.log(number);
    if (result.length < number.length) {
      result = number;
    }
    console.log(result);
  }
  return result[0];
}

console.log(findNum([1, 2, 3, 2, 2, 6, 1, 9]));
