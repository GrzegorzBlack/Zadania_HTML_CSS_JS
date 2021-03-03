// Snail Sort

// Given an n x n array, return the array elements arranged from outermost elements to
// the middle element, traveling clockwise.

// array = [[1,2,3],
//          [4,5,6],
//          [7,8,9]]
// snail(array) #=> [1,2,3,6,9,8,7,4,5]

// For better understanding, please follow the numbers of the next array consecutively:

// array = [[1,2,3],
//          [8,9,4],
//          [7,6,5]]
// snail(array) #=> [1,2,3,4,5,6,7,8,9]

// NOTE: The idea is not sort the elements from the lowest value to the highest; the
// idea is to traverse the 2-d array in a clockwise snailshell pattern.

// NOTE 2: The 0x0 (empty matrix) is represented as en empty array inside an array [[]].

snail = function (array) {
  // if(result.length)
  let result = [];
  console.log(array.length);
  console.log(result);
  function wkurwiamnieto() {
    if (array.length < 3 && array.length > 1) {
      for (let i = 0; i < array.length; i++) {
        if (i === 0) {
          for (let j = 0; j < array.length; j++) {
            result.push(array[i][j]);
          }
        } else if (i == 1) {
          for (let j = 1; j >= 0; j--) {
            //result.push(array[i][j]);
            result.push(array[i][j]);
            console.log(result);
          }
        }
      }
      console.log(result);
    } else if (array[0] == undefined) {
      return "Pusta tablica";
    }
  }
  let first = 0; // 0 - 1
  let last = array.length; // 6 - 5

  function One() {
    for (let i = first; i < last; i++) {
      //result.push(array[i])

      if (i == first) {
        for (let j = first; j < last; j++) {
          //console.log(array[i][j]);
          result.push(array[i][j]);
          console.log(result);
        }
      } else if (i != first && i !== last - 1) {
        //console.log(array[i].length - 1);
        let length = last - 1;
        result.push(array[i][length]);
        console.log(result);
      } else if (i == last - 1) {
        for (let j = last - 1; j >= first; j--) {
          result.push(array[i][j]);
          console.log(result);
        }
      }
    }
    last = last - 1;
    console.log(first);
    console.log(last);

    if (result.length !== array.length * array[0].length) {
      for (let i = last; i > first + 1; i--) {
        //result.push(array[i][j]);
        result.push(array[i - 1][first]);
        console.log(result);
      }
    }
    first = first + 1;

    while (result.length < array.length * array[0].length) {
      One();
    }
  }
  wkurwiamnieto();
  if (result.length == 0) {
    One();
  }

  return result;
};

// console.log(
//   snail([
//     [1, 2, 3, 4, 5, 6],
//     [20, 21, 22, 23, 24, 7],
//     [19, 32, 33, 34, 25, 8],
//     [18, 31, 36, 35, 26, 9],
//     [17, 30, 29, 28, 27, 10],
//     [16, 15, 14, 13, 12, 11],
//   ])
// );

// console.log(
//   snail([
//     [1, 2, 3, 4, 5],
//     [16, 17, 18, 19, 6],
//     [15, 24, 25, 20, 7],
//     [14, 23, 22, 21, 8],
//     [13, 12, 11, 10, 9],
//   ])
// );

// console.log(
//   snail([
//     [1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5],
//   ])
// );

// console.log(
//   snail([
//     [1, 2],
//     [4, 3],
//   ])
// );

console.log(snail([[]]));
