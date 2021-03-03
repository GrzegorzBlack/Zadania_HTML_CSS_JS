// Given a rectangular matric and an integer column, return an array
//containing the elements of the colmunth column of the given matrix
// (the leftmost column is the 0th one).
//

function extractMatrixColumn(matrix, column) {
  //  write code here.

  let array = [];

  matrix.forEach((element) => {
    array = array.concat(element.slice(column, column + 1));
    console.log(array);
  });
  console.log(array);
  return array;
}

//Krótsza wersja:

function extractMatrixColumn(matrix, column) {
  return matrix.map((element) => element[column]);
}

// arrange
const matrix = [
  [1, 1, 1, 2],
  [0, 5, 0, 4],
  [2, 1, 3, 6],
];
const column = 2;

// act
const result = extractMatrixColumn(matrix, column);

// log
console.log("result: ", result);
