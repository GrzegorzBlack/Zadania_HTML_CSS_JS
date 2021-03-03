// 73. Write a JavaScript program to reverse the elements of a given array
// of integers length 3.

function reverse(array) {
  let newArray = [];
  for (let i = 2; i >= 0; i--) {
    newArray.push(array[i]);
    console.log(array[i]);
  }
  return newArray;
}

console.log(reverse([2, 5, 8]));
