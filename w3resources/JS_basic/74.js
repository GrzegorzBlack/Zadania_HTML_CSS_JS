// 74. Write a JavaScript program to find the larger value between the first
// or last and set all the other elements with that value. Display the new array.

function larger(array) {
  let max = Math.max(array[0], array[array.length - 1]);
  console.log(max);

  let newArray = [];

  array.forEach((element) => {
    element = max;
    newArray.push(element);
  });

  return newArray;
}

console.log(larger([20, 50, 60]));
