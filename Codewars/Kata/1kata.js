function test(array) {
  let newArr = array.map((el, index) => {
    if (index < array.length - 1) {
      return el * array[index + 1];
    } else {
      return el;
    }
  });

  console.log(newArr);

  let result = Math.max(...newArr);
  return result;
}

console.log(test([2, 1, 5, 6, 3, 0]));
