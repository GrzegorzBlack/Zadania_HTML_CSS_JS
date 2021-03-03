// Write an algorithm that takes an array and moves all of the zeros to the end,
// preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

var moveZeros = function (arr) {
  let newArr = arr.filter((e) => e !== 0);
  let arrZeros = arr.filter((e) => e === 0);

  //console.log(newArr);
  //console.log(arrZeros);
  let result = newArr.concat(arrZeros);
  return result;
};

//console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]));

console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]));
