// 90. Write a JavaScript program to find the kth greatest element of a
// given array of integers

function check(array, x) {
  let newArray = array.sort(function (a, b) {
    return a - b;
  });
  console.log(newArray);
  return newArray[newArray.length - 3];
}

console.log(check([1, 2, 6, 4, 5], 3));
