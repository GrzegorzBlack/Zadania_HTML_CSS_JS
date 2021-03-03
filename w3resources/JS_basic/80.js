// 80. Write a JavaScript program to swap the first and last elements of a
// given array of integers. The array length should be at least 1.

function given(array) {
  if (array.length >= 1) {
    [array[0], array[array.length - 1]] = [array[array.length - 1], array[0]];
    return array;
  } else {
    return "Array is too short!";
  }
}

console.log(given([2, 8, 6, 0]));
