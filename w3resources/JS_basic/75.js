// 75. Write a JavaScript program to create a new array taking the middle
// elements of the two arrays of integer and each length 3.

function create(array1, array2) {
  let newArray = [];

  let element1 = array1[1];
  let element2 = array2[1];
  console.log(element1, element2);

  newArray.push(element1, element2);
  return newArray;
}

console.log(create([2, 5, 8], [5, 3, 9]));
