// 71. Write a JavaScript program to check whether 1 appears in first or last
//  position of a given array of integers. The array length must be greater
//  or equal to 1.

function check(array) {
  if (array.length >= 1) {
    if (array[0] === 1) {
      return "1 is at first position";
    } else if (array[array.length - 1] === 1) {
      return "1 is at last position";
    } else {
      return "No 1 at first and last positions!";
    }
  } else {
    return "Array is too short";
  }
}

console.log(check([2, 5, 3, 1]));
