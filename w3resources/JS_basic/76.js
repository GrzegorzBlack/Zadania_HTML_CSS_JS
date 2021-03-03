// 76. Write a JavaScript program to create a new array taking the first and
//last elements from a given array of integers and length must be greater
//or equal to 1.

function create(arr1) {
  if (arr1.length >= 1) {
    let newArr = [];
    newArr.push(arr1[0], arr1[arr1.length - 1]);
    return newArr;
  } else {
    return "Something gone wrong!";
  }
}

console.log(create([2, 5, 8, 3]));
