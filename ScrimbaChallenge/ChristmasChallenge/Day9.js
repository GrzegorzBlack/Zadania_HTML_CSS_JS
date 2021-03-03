function sumOddFibonacciNumbers(num) {
  //  write code here.
  let x = 1;
  let y = 1;
  let array = [1, 1];
  let newArray = [];
  let z = 0;
  let value = 0;

  const checkFun = function check(x, y, z) {
    z = x + y;
    if (z < num) {
      array.push(z);
      x = y;

      y = z;
      console.log(x);
      console.log(y);
      console.log(array);

      return check(x, y, z);
    } else {
      newArray = array.filter((item) => item % 2);
      value = newArray.reduce((a, b) => a + b);
      console.log(value);
      return value;
    }
  };

  return checkFun(x, y, z);
}

/**
 * Test Suite
 */
describe("sumOddFibonacciNumbers()", () => {
  it("returns sum of all odd Fibonnci numbers", () => {
    // arrange
    const num = 10;

    // act
    const result = sumOddFibonacciNumbers(num);

    // log
    console.log("result 1: ", result);

    // assert
    expect(result).toBe(10);
  });

  it("returns sum of all odd Fibonnci numbers 2nd example", () => {
    // arrange
    const num = 1000;

    // act
    const result = sumOddFibonacciNumbers(num);

    // log
    console.log("result 2: ", result);

    // assert
    expect(result).toBe(1785);
  });
});
