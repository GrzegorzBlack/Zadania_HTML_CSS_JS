// Your task is to create NxN multiplication table of
//size provided in parameter.
// For example when given size is 3:
// 123
// 246
// 369
// for given example the return value should be :
// [[1,2,3], [2,4,6], [3,6,9]]

function multiplicationTable(size) {
  let result = [];

  for (let i = 0; i < size; i++) {
    // console.log();
    result[i] = [];
    // console.log(result);
    for (let j = 1; j <= size; j++) {
      let num = (i + 1) * j;
      result[i].push(num);
      //   console.log(result);
    }
  }
  return result;
}

console.log(multiplicationTable(3));
