function adjacentElementsProduct(nums) {
  //  write code here.

  let value = 0;
  let maxValue = 0;

  for (let i = 0; i < nums.length - 1; i += 2) {
    console.log(i);
    value = nums[i] * nums[i + 1];

    value > maxValue ? (maxValue = value) : (value = value);

    console.log(value);
  }

  return value;
}

/**
 * Test Suite
 */

const nums = [3, 6, -2, -5, 7, 3];

// act
const result = adjacentElementsProduct(nums);

// log
console.log("result: ", result);
