function avoidObstacles(nums) {
  //  write code here.

  let newNums = nums.sort();
  console.log(newNums);
  //let value = 0;
  for (let i = 2; i < 10; i++) {
    const f = function (x) {
      return i == x;
    };
    if (newNums.every(f)) {
      return i;
    } else {
      newNums.every(f);
    }
  }
}

/**
 * Test Suite
 */
// arrange
const nums = [5, 3, 6, 7, 9];

// act
const result = avoidObstacles(nums);

// log
console.log("result: ", result);
